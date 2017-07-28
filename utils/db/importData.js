/**
 * ETL Script for importing JSON data into MySql database
 */
var fs = require("fs");
var mysql = require("mysql");
var async = require("async");
var UAParser = require("ua-parser-js");
var ProgressBar = require('progress');
var queryBuilder = require("./queryBuilder");

const DEFAULT_DATA_PATH = __dirname + "/../../db.json";
const DEFAULT_CONFIG_PATH = __dirname + "/config.json";

// Labels
const BASE_DATA_PROGRESS_LABEL = "Insert into browsers & properties table ";
const ASSOCIATION_DATA_PROGRESS_LABEL = "Associate properties into browsers";
const DATABASE_CONNECTION_ERROR_LABEL = "Error connecting to database";
const TOTAL_SAMPLES_LABEL = "Total samples for conversion: ";

// Default exclude for SQL errors
const DEFAULT_ERROR_CODE_EXCLUDES = ["ER_DUP_ENTRY"];

var jsonToMysql = {
  /**
   * Variables used for caching
   */
  browserCache: {},
  userAgentParserCache: {},
  /**
   * Entry point
   */
  initialize: function () {
    var data,
      config = this.readJsonFile(DEFAULT_CONFIG_PATH),
      dataPath = config.jsonPath || DEFAULT_DATA_PATH;

    data = this.readJsonFile(dataPath).samples;

    this.initializeConnection(config)
      .then(() => this.initDataConversion(data))
      .then(() => {
        console.log("Import complete");
        process.exit(0);
      }).catch(error => console.error("Error", error));
  },
  /**
   * Establishing connection to database
   *
   * @param {Object} config
   * @return {Promise}
   */
  initializeConnection: function (config) {
    this.connection = mysql.createConnection(config.mySqlConfig);

    return new Promise((resolve, reject) => {
      this.connection.connect(error => {
        if (error) {
          return reject(DATABASE_CONNECTION_ERROR_LABEL);
        }
        resolve();
      });
    });
  },
  /**
   * Main method responsible for converting the json data to db
   */
  initDataConversion: function (data) {
    console.log(TOTAL_SAMPLES_LABEL + data.length);
    return this.insertBaseData(data).then(() => this.insertRelations(data));
  },
  /**
   * Insert Base data into tables
   * @param {Progress} progressBar
   * @return {Promise}
   */
  insertBaseData: function (data) {
    var progressBar = this.createProgressBar(BASE_DATA_PROGRESS_LABEL, data.length);

    return new Promise((resolve, reject) => {
      async.eachSeries(
        data,
        (entry, callback) => {
          this.insertBaseRecord(entry).then(() => {
            progressBar.tick();
            callback();
          }, callback);
        },
        error => {
          if (error) {
            return reject(error);
          }
          resolve();
        }
      );
    });
  },
  /**
   * Establishing relations between added records
   *
   * @param {Array} data
   * @return {Promise}
   */
  insertRelations: function (data) {
    var progressBar = this.createProgressBar(ASSOCIATION_DATA_PROGRESS_LABEL, data.length);

    return new Promise((resolve, reject) => {
      async.eachSeries(
        data,
        (entry, callback) => {
          this.insertBrowsersWithPropertiesRecord(entry).then(() => {
            progressBar.tick();
            callback();
          }, callback);
        },
        error => {
          if (error) {
            return reject(error);
          }
          resolve();
        }
      );
    });
  },
  /**
   * Method for reading and parsing the data from JSON file path
   *
   * @param {string} path
   * @return {Array}
   */
  readJsonFile: function (path) {
    var data = fs.readFileSync(path, 'utf-8');

    return JSON.parse(data);
  },
  /**
   * Method to extract the data from userAgent string
   *
   * @param {string} userAgentText
   * @return {Object}
   */
  getUserAgentData: function (userAgentText) {
    if (this.userAgentParserCache[userAgentText]) {
      return this.userAgentParserCache[userAgentText];
    }

    let parser = new UAParser();
    parser.setUA(userAgentText);
    let result = parser.getResult();
    this.userAgentParserCache[userAgentText] = result;

    return result;
  },
  /**
   * Method for handling the insertion of data into Browsers, Browser_has_WindowProperties
   * & Browser_has_Document Properties tables
   *
   * @param {Object} data
   * @return {Promise}
   */
  insertBaseRecord: function (data) {
    var userAgentText = data.userAgent,
      userAgentData = this.getUserAgentData(userAgentText);

    return Promise.all([
      this.insertBrowsersDataRecord(userAgentData, userAgentText),
      this.insertObjectData(data.windowProps, queryBuilder.buildWindowPropertiesInsertQuery),
      this.insertObjectData(data.documentProps, queryBuilder.buildDocumentPropertiesInsertQuery)
    ]);
  },
  /**
   * Method for handling the insertion of data into Browser_has_WindowProperties
   * & Browser_has_Document Properties tables
   *
   * @param {Object} data
   *
   * @return {Promise}
   */
  insertBrowsersWithPropertiesRecord: function (entry) {
    var userAgentData = this.getUserAgentData(entry.userAgent);

    return this.executeSqlQuery(queryBuilder.buildBrowsersSelectQuery(userAgentData)).then(results => {
      var browserId;
      
      if (results && results.length) {
        browserId = results[0].id;
      }

      if (!browserId) {
        return Promise.resolve();
      }

      this.browserCache[browserId] = true;

      return Promise.all([
        // Document properties
        this.associateBrowserProperties(
          entry.documentProps,
          browserId,
          queryBuilder.buildDocumentPropertiesSelectQuery,
          queryBuilder.buildBrowserHasDocumentPropertiesInsertQuery
        ),
        // Window properties
        this.associateBrowserProperties(
          entry.windowProps,
          browserId,
          queryBuilder.buildWindowPropertiesSelectQuery,
          queryBuilder.buildBrowserHasWindowPropertiesInsertQuery
        ),
      ]);
    });
  },

  /*******************************************************************************************************
   *
   *                            Methods for inserting data into mySql
   *
   ******************************************************************************************************/
  /**
   * Method for inserting data to Browsers table
   *
   * @param {Object} userAgentData
   * @param {string} userAgentText
   * @return {Promise}
   */
  insertBrowsersDataRecord: function (userAgentData, userAgentText) {
    return this.executeSqlQuery(queryBuilder.buildBrowsersInsertQuery(userAgentData, userAgentText));
  },
  /**
   * Inserting Object data with provided builder function
   *
   * @param {Object} data
   * @param {Function} builder sql query builder
   *
   * @return {Promise}
   */
  insertObjectData: function (data, builder) {
    if (!data || typeof data !== "object") {
      return Promise.reject();
    }

    return Promise.all(Object.keys(data).map(key => this.executeSqlQuery(builder(key, data[key]))));
  },
  /**
   * Associating browser properties based on browserId
   *
   * @param {Object} data
   * @param {number} browserId
   * @param {Function} selectBuilder
   * @param {Function} insertBuilder
   *
   * @return {Promise}
   */
  associateBrowserProperties: function (data, browserId, selectBuilder, insertBuilder) {
    return Promise.all(Object.keys(data).map(key => this.executeSqlQuery(selectBuilder(key)).then(results => {
      if (results && results.length) {
        return this.executeSqlQuery(insertBuilder(browserId, results[0].id));
      }
      return Promise.resolve();
    })));
  },
  /*******************************************************************************************************
   *
   *                                    Helper Methods
   *
   ******************************************************************************************************/

  /**
   * Method for getting the npm progressbar implementation
   *
   * @param {string} logText
   * @param {string} total
   *
   * @return {Object}
   */
  createProgressBar: function (logText, total) {
    var options = {
      complete: "=",
      incomplete: " ",
      width: 35,
      total: parseInt(total)
    };
    const PROGRESS_TEXT = "[:bar] :percent (:current / :total)";

    return new ProgressBar(logText + PROGRESS_TEXT, options);
  },
  /**
   * Common method used for querying with mySql database
   *
   * @param {string} query
   * @param {Array} [errorCodeExcludes]
   *
   * @return {Promise}
   */
  executeSqlQuery: function (query, errorCodeExclude = DEFAULT_ERROR_CODE_EXCLUDES) {
    return new Promise((resolve, reject) => {
      this.connection.query(query, (error, results) => {
        if (error && !errorCodeExclude.includes(error.code)) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }
};

jsonToMysql.initialize();
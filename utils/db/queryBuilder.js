/**
 * Helper library for building SQL queries for the import script
 */

const INITIAL_PROPERTY_COUNT = 1;

module.exports = {
  /**
   * insert data to Browsers table
   *
   * @param {Object} userAgentData
   * @param {string} userAgentText
   * @return {string}
   */
  buildBrowsersInsertQuery: function (userAgentData, userAgentText) {
    var browser = userAgentData.browser.name,
      version = userAgentData.browser.major,
      mobile = !!(userAgentData.device.type && userAgentData.device.type === "mobile"),
      os = userAgentData.os.name;

    return `INSERT INTO Browsers (userAgent, browser, version, mobile, os, count)
      VALUES ('${userAgentText}','${browser}','${version}',${mobile},'${os}',${INITIAL_PROPERTY_COUNT})
      ON DUPLICATE KEY UPDATE count=count+1;`;
  },
  /**
   * insert data to WindowProperties table
   *
   * @param {string} name
   * @param {string} type
   * @return {string}
   */
  buildWindowPropertiesInsertQuery: function (name, type) {
    return `INSERT INTO WindowProperties (name, type) VALUES ('${name}', '${type}');`;
  },
  /**
   * insert data to DocumentProperties table
   *
   * @param {string} name
   * @param {string} type
   * @return {string}
   */
  buildDocumentPropertiesInsertQuery: function (name, type) {
    return `INSERT INTO DocumentProperties (name, type) VALUES ('${name}', '${type}');`;
  },
  /**
   * select data from Browsers table by userAgent
   *
   * @param {string} userAgentText
   * @return {string}
   */
  buildBrowsersSelectQuery: function (userAgentText) {
    return `SELECT * FROM Browsers WHERE userAgent='${userAgentText}';`;
  },
  /**
   * select data from WindowProperties table by name
   *
   * @param {string} windowProperty
   * @return {string}
   */
  buildWindowPropertiesSelectQuery: function (windowProperty) {
    return `SELECT id FROM WindowProperties WHERE name='${windowProperty}';`;
  },
  /**
   * select data from DocumentProperties table by name
   *
   * @param {string} documentProperty
   * @return {string}
   */
  buildDocumentPropertiesSelectQuery: function (documentProperty) {
    return `SELECT id FROM DocumentProperties WHERE name='${documentProperty}';`;
  },
  /**
   * insert data to Browser_has_WindowProperties table
   *
   * @param {string} browserId
   * @param {string} windowPropertyId
   * @return {string}
   */
  buildBrowserHasWindowPropertiesInsertQuery: function (browserId, windowPropertyId) {
    return `INSERT INTO Browsers_has_WindowProperties (Browsers_id, WindowProperties_id, count)
      VALUES ('${browserId}', '${windowPropertyId}', '${INITIAL_PROPERTY_COUNT}')
      ON DUPLICATE KEY UPDATE count=count+1;`;
  },
  /**
   * insert data to Browser_has_DocumentProperties table
   *
   * @param {string} browserId
   * @param {string} documentPropertyId
   * @return {string}
   */
  buildBrowserHasDocumentPropertiesInsertQuery: function (browserId, documentPropertyId) {
    return `INSERT INTO Browsers_has_DocumentProperties (Browsers_id, DocumentProperties_id, count)
      VALUES ('${browserId}', '${documentPropertyId}', '${INITIAL_PROPERTY_COUNT}')
      ON DUPLICATE KEY UPDATE count=count+1;`;
  }
};
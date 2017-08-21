import {
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} from "graphql";
import Db from '../data/db';
import BrowserUniqType from "../objects/BrowserUniqType";

const browsersToIterate = ["Chrome", "Firefox", "Safari", "IE", "Opera"];
const propertyToGet = "versions";

export default {
  /**
   * @override
   */
  type: new GraphQLList(BrowserUniqType),
  /**
   * @override
   */
  description: "List of browsers",
  /**
   * @override
   */
  resolve: (root, args) => {
    return new Promise((resolve, reject) => {
      let deferredArr = [],
        resultArr = [];

      browsersToIterate.forEach(browserName => {
        deferredArr[deferredArr.length] = Db.models.Browsers.findAll({
          attributes: [propertyToGet],
          where: {
            browser: browserName
          }
        }).then(versions => {
          resultArr.push({
            browser: {
              name: browserName,
              versions: versions
            }
          });
        });
      });

      Promise.all(deferredArr).then(() => {
        resolve(resultArr);
      });
    });
  }
}




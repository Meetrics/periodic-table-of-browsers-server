import {
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} from "graphql";
import Db from '../data/db';
import BrowserType from "../objects/BrowserType";


export default {
  /**
   * @override
   */
  type: new GraphQLList(BrowserType),
  /**
   * @override
   */
  description: "List of browsers",
  args: {
    id: {type: GraphQLID},
    userAgent: {type: GraphQLString},
    browser: {type: GraphQLString},
    version: {type: GraphQLString},
    mobile: {type: GraphQLBoolean},
    os: {type: GraphQLString}
  },
  /**
   * @override
   */
  resolve: (root, args) => {
    return Db.models.Browsers.findAll({where: args});
  }
}




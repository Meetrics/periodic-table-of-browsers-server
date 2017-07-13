import {
  GraphQLList,
  GraphQLString
} from "graphql";
import BrowserType from "../objects/BrowserType";
import _ from "lodash";


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
    nameHas: {
      type: GraphQLString
    }
  },
  /**
   * @override
   */
  resolve: (root, args) => {
    return Db.models.Browsers.findAll({where: args});
  }
}




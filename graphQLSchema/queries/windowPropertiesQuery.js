import {
  GraphQLList,
  GraphQLString,
  GraphQLInt
} from "graphql";
import Db from "../data/db";
import WindowPropertyType from "../objects/WindowPropertyType";
import _ from "lodash";

export default {
  /**
   * @override
   */
  type: new GraphQLList(WindowPropertyType),
  /**
   * @override
   */
  description: "List of window methods and properties",
  args: {
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString
    }
  },
  /**
   * @override
   */
  resolve: (root, args) => {
    return Db.models.WindowProperties.findAll({where: args});
  }
}
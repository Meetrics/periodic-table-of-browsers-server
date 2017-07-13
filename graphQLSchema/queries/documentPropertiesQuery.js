import {
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from "graphql";
import Db from '../data/db';
import DocumentPropertyType from "../objects/DocumentPropertyType";

export default {
  /**
   * @override
   */
  type: new GraphQLList(DocumentPropertyType),
  /**
   * @override
   */
  description: "List of all document properties",
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
    return Db.models.DocumentProperties.findAll({where: args});
  }
}




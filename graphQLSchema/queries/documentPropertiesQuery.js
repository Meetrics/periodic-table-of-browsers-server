import {
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from "graphql";
import DocumentProperties from "../data/documentProperties";
import DocumentPropertyType from "../objects/DocumentPropertyType";
import _ from "lodash";

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
    return _.filter(DocumentProperties, args);
  }
}




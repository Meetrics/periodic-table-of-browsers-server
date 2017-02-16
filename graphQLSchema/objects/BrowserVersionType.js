import {
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  /**
   * @override
   */
  name: "BrowserVersion",
  /**
   * @override
   */
  description: "BrowserVersion representation",
  /**
   * @override
   */
  fields: () => ({
    version: {type: GraphQLString},
  })
});
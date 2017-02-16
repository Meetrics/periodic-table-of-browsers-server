import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from "graphql";

export default new GraphQLObjectType({
  /**
   * @override
   */
  name: "BrowserType",
  /**
   * @override
   */
  description: "Browser object",
  /**
   * @override
   */
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString}
  })
});
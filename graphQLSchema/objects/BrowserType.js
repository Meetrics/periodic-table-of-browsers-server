import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
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
    userAgent: {type: GraphQLString},
    browser: {type: GraphQLString},
    version: {type: GraphQLString},
    mobile: {type: GraphQLBoolean},
    os: {type: GraphQLString}
  })
});
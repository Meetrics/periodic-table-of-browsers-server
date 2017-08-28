import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  /**
   * @override
   */
  name: "BrowserUniqType",
  /**
   * @override
   */
  description: "Browser uniq object",
  /**
   * @override
   */
  fields: () => ({
    name: {type: GraphQLString},
    versions: {
      type: new GraphQLList(new GraphQLObjectType({
        name: "BrowserVersions",
        description: "Browser versions description",
        fields: () => ({
          version: {type: GraphQLString},
          id: {type: GraphQLID}
        })
      }))
    }
  })
});
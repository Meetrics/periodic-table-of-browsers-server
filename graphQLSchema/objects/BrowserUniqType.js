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
  description: "Browser object",
  /**
   * @override
   */
  fields: () => ({
    browser: {
      type: new GraphQLObjectType({
        name: "Browser",
        description: "Browser uniq description",
        fields: () => ({
          name: {type: GraphQLString},
          versions: {
            type: new GraphQLList(new GraphQLObjectType({
              name: "BrowserVersions",
              description: "Browser versions description",
              fields: () => ({
                version: {type: GraphQLString}
              })
            }))
          }
        })
      })
    }
  })
});
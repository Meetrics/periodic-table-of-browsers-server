import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLInterfaceType
} from "graphql"

const BrowserNames = new GraphQLObjectType({
  name: "BrowserNames",
  description: "All browsers names that we know",
  fields: () => ({
    _id: {type: GraphQLString},
    name: {type: GraphQLString}
  })
})

const Query = new GraphQLObjectType({
  name: "PeriodicTableOfBrowsersSchema",
  description: "Root of the Periodic Table of Browsers",
  fields: () => ({
    browsers: {
      type: new GraphQLList(BrowserNames),
      description: "List of browsers",
      resolve: function () {
        return [{_id: "123", name: "NOW12345678"}]
      }
    }
  })
})

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;

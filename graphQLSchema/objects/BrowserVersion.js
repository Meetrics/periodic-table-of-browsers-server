import {
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: "BrowserVersion",
  description: "BrowserVersion representation",
  fields: () => ({
    version: {type: GraphQLString},
  })
});
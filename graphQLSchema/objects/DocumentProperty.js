import {
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: "DocumentProperties",
  description: "DocumentProperties representation",
  fields: () => ({
    name: {type: GraphQLString},
    type: {type: GraphQLString}
  })
});
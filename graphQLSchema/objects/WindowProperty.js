import {
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: "WindowProperties",
  description: "WindowProperties representation",
  fields: () => ({
    name: {type: GraphQLString},
    type: {type: GraphQLString}
  })
});
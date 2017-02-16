import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from "graphql";

export default new GraphQLObjectType({
  name: "Browser",
  description: "Browser object",
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString}
  })
});
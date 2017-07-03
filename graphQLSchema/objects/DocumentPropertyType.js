import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  /**
   * @override
   */
  name: "DocumentProperties",
  /**
   * @override
   */
  description: "DocumentProperties representation",
  /**
   * @override
   */
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    type: {type: GraphQLString}
  })
});
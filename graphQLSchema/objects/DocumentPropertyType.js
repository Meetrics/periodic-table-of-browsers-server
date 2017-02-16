import {
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
    name: {type: GraphQLString},
    type: {type: GraphQLString}
  })
});
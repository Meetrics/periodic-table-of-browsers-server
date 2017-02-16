import {
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  /**
   * @override
   */
  name: "WindowProperty Type",
  /**
   * @override
   */
  description: "WindowProperty representation",
  /**
   * @override
   */
  fields: () => ({
    name: {type: GraphQLString},
    type: {type: GraphQLString}
  })
});
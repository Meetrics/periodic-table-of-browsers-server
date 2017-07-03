import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  /**
   * @override
   */
  name: "WindowPropertyType",
  /**
   * @override
   */
  description: "WindowProperty representation",
  /**
   * @override
   */
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    type: {type: GraphQLString}
  })
});
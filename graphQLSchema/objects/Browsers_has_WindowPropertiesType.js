import {
  GraphQLObjectType,
  GraphQLInt
} from "graphql";

export default new GraphQLObjectType({
  /**
   * @override
   */
  name: "Browsers_has_WindowPropertiesType",
  /**
   * @override
   */
  description: "Browsers_has_WindowProperties representation",
  /**
   * @override
   */
  fields: () => ({
    Browsers_id: {type: GraphQLInt},
    WindowProperties_id: {type: GraphQLInt},
    count: {type: GraphQLInt}
  })
});
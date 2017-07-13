import {
  GraphQLObjectType,
  GraphQLInt
} from "graphql";

export default new GraphQLObjectType({
  /**
   * @override
   */
  name: "Browsers_has_DocumentPropertiesTypw",
  /**
   * @override
   */
  description: "Browsers_has_DocumentProperties representation",
  /**
   * @override
   */
  fields: () => ({
    Browsers_id: {type: GraphQLInt},
    DocumentProperties_id: {type: GraphQLInt},
    count: {type: GraphQLInt}
  })
});
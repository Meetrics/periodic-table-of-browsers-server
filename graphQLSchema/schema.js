import {
  GraphQLObjectType,
  GraphQLSchema
} from "graphql";
import browsersQuery from "./queries/browsersQuery";
import browsersUniqQuery from "./queries/browsersUniqQuery";
import windowPropertiesQuery from "./queries/windowPropertiesQuery";
import documentPropertiesQuery from "./queries/documentPropertiesQuery";
import browsers_has_DocumentPropertiesQuery from "./queries/browsers_has_DocumentPropertiesQuery";
import browsers_has_WindowPropertiesQuery from "./queries/browsers_has_WindowPropertiesQuery";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    /**
     * @override
     */
    name: "PeriodicTableOfBrowsersSchema",
    /**
     * @override
     */
    description: "Root of the Periodic Table of Browsers",
    /**
     * @override
     */
    fields: () => ({
      browsers: browsersQuery,
      browsersUniq: browsersUniqQuery,
      browsers_has_DocumentProperties: browsers_has_DocumentPropertiesQuery,
      browsers_has_WindowProperties: browsers_has_WindowPropertiesQuery,
      windowProperties: windowPropertiesQuery,
      documentProperties: documentPropertiesQuery
    })
  })
});

import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLInterfaceType,
  GraphQLBoolean
} from "graphql";
import UserAgent from "./objects/UserAgentType";
import browsersQuery from "./queries/browsersQuery";
import windowPropertiesQuery from "./queries/windowPropertiesQuery";
import documentPropertiesQuery from "./queries/documentPropertiesQuery";
import userAgentsQuery from "./queries/userAgentsQuery";

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
      userAgents: userAgentsQuery,
      windowProperties: windowPropertiesQuery,
      documentProperties: documentPropertiesQuery
    })
  })
});

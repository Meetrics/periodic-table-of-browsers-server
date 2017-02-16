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
import UserAgent from "./objects/UserAgent";
import browsersQuery from "./queries/browsersQuery";
import userAgentsQuery from "./queries/userAgentsQuery";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "PeriodicTableOfBrowsersSchema",
    description: "Root of the Periodic Table of Browsers",
    fields: () => ({
      browsers: browsersQuery,
      userAgents: userAgentsQuery
    })
  })
});

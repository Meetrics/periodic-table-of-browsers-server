import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} from "graphql";
import Browser from "./Browser";

export default new GraphQLObjectType({
  name: "UserAgent",
  description: "UserAgent representation",
  fields: () => ({
    userAgent: {type: GraphQLString},
    browser: {type: Browser},
    version: {type: GraphQLString},
    mobile: {type: GraphQLBoolean},
    os: {type: GraphQLString}
  })
});
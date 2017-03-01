import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} from "graphql";
import Browser from "./BrowserType";

export default new GraphQLObjectType({
  /**
   * @override
   */
  name: "UserAgent",
  /**
   * @override
   */
  description: "UserAgent representation",
  /**
   * @override
   */
  fields: () => ({
    userAgent: {type: GraphQLString},
    browser: {type: Browser},
    version: {type: GraphQLString},
    mobile: {type: GraphQLBoolean},
    os: {type: GraphQLString}
  })
});
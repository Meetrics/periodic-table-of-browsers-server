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
    id: {type: GraphQLID},
    userAgent: {type: GraphQLString}
  })
});
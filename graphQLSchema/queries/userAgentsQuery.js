import {GraphQLList} from "graphql";
import ImpressionsList from "../data/impressions";
import UserAgentType from "../objects/UserAgentType";
import _ from "lodash";

export default {
  /**
   * @override
   */
  type: new GraphQLList(UserAgentType),
  /**
   * @override
   */
  description: "List of known Useragents",
  /**
   * @override
   */
  resolve:() => {
    return _.uniq(ImpressionsList.map((property) => {
      return {
        id: property.id,
        userAgent: property.userAgent
      };
    }));
  }
}
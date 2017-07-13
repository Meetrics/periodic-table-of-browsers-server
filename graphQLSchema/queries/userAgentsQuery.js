import {GraphQLList} from "graphql";
import UserAgentType from "../objects/UserAgentType";
import _ from "lodash";
import Db from '../data/db';

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
  resolve: (root, args) => {
    return Db.models.UserAgents.findAll({where: args});
  }
}
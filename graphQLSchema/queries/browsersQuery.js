import {GraphQLList} from "graphql";
import ImpressionsList from '../data/impressions';
import Browser from '../objects/Browser';

export default {
  type: new GraphQLList(Browser),
  description: "List of browsers",
  resolve: function () {
    return ImpressionsList.map((impression) => {
      return {
        name: impression.userAgent
      }
    });
  }
}
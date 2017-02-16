import {GraphQLList} from "graphql";
import ImpressionsList from '../data/impressions';
import Browser from '../objects/Browser';
import _ from 'lodash';

const BROWSER_REGEX = /(Firefox|Safari|Chrome|Chromium|Opera|MSIE )\/?/;

export default {
  type: new GraphQLList(Browser),
  description: "List of browsers",
  resolve: () => {
    return _.uniq(ImpressionsList.map((impression) => {
      var match = impression.userAgent.match(BROWSER_REGEX);
      return match && match[1];
    }).filter(a => !!a)).map((name) => {return {name}});
  }
}




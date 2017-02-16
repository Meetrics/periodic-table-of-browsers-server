import {GraphQLList} from "graphql";
import ImpressionsList from '../data/impressions';
import BrowserType from '../objects/BrowserType';
import _ from 'lodash';

const BROWSER_REGEX = /(Firefox|Safari|Chrome|Chromium|Opera|Trident|MSIE )\/?/;

export default {
  /**
   * @override
   */
  type: new GraphQLList(BrowserType),
  /**
   * @override
   */
  description: "List of browsers",
  /**
   * @override
   */
  resolve: () => {
    return _.uniq(ImpressionsList.map((impression) => {
      let match = impression.userAgent.match(BROWSER_REGEX);
      return match && match[1];
    }).filter(a => !!a)).map((name) => {return {name}});
  }
}




import {
  GraphQLList,
  GraphQLString
} from "graphql";
import ImpressionsList from "../data/impressions";
import BrowserType from "../objects/BrowserType";
import _ from "lodash";

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
  args: {
    nameHas: {
      type: GraphQLString
    }
  },
  /**
   * @override
   */
  resolve: (root, {nameHas}) => {
    let browsers = ImpressionsList.map((impression) => {
      let match = impression.userAgent.match(BROWSER_REGEX);
      return match && match[1];
    });

    browsers = _.uniq(browsers);

    let matchedBrowsers = _.filter(browsers, function (browser) {
      return browser.search(nameHas) !== -1;
    });

    return matchedBrowsers.map((name) => { return { name }; });
  }
}




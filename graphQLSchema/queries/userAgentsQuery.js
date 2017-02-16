import {GraphQLList} from "graphql";
import ImpressionsList from '../data/impressions';
import UserAgent from '../objects/UserAgent';

export default {
  type: new GraphQLList(UserAgent),
  description: "List of known Useragents",
  resolve:() => {
    return [{
      userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; SM-N910F Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.124 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/99.0.0.26.69;]",
      browser: {disco:"Chrome"},
      version: "56",
      mobile: false,
      os: "Linux"
    }]
  }
}
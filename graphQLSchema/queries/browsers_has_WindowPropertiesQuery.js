import {
  GraphQLList,
  GraphQLInt
} from "graphql";
import Db from '../data/db';
import Browsers_has_WindowPropertiesType from "../objects/Browsers_has_WindowPropertiesType";


export default {
  /**
   * @override
   */
  type: new GraphQLList(Browsers_has_WindowPropertiesType),
  /**
   * @override
   */
  description: "List of browsers window properties",
  args: {
    Browsers_id: {type: GraphQLInt},
    WindowProperties_id: {type: GraphQLInt},
    count: {type: GraphQLInt},
  },
  /**
   * @override
   */
  resolve: (root, args) => {
    return Db.models.Browsers_has_WindowProperties.findAll({where: args});
  }
}




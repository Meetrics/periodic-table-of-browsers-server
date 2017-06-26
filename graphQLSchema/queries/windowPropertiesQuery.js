import {GraphQLList} from "graphql";
import WindowProperties from '../data/windowProperties';
import WindowPropertyType from '../objects/WindowPropertyType';
import _ from 'lodash';

export default {
  /**
   * @override
   */
  type: new GraphQLList(WindowPropertyType),
  /**
   * @override
   */
  description: "List of all window properties",
  /**
   * @override
   */
  resolve: () => {
    return WindowProperties.map((property) => {
    	return {
				name: property.name,
				type: property.type
			}
    });
  }
}
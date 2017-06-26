import {GraphQLList} from "graphql";
import DocumentProperties from '../data/documentProperties';
import DocumentPropertyType from '../objects/DocumentPropertyType';
import _ from 'lodash';

export default {
  /**
   * @override
   */
  type: new GraphQLList(DocumentPropertyType),
  /**
   * @override
   */
  description: "List of all document properties",
  /**
   * @override
   */
  resolve: () => {
    return DocumentProperties.map((property) => {
      return {
				name: property.name,
				type: property.type
			}
    });
  }
}




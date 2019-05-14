/**
 * Jenkins X
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ExtensionDefinitionReference } from './extensionDefinitionReference';

/**
* ExtensionDefinitionReferenceList contains a list of ExtensionRepository items
*/
export interface ExtensionDefinitionReferenceList {
    'remotes': Array<ExtensionDefinitionReference>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "remotes",
            "baseName": "remotes",
            "type": "Array<ExtensionDefinitionReference>"
        }    ];

    static getAttributeTypeMap() {
        return ExtensionDefinitionReferenceList.attributeTypeMap;
    }
}


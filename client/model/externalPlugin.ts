/**
 * Jenkins X
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ReplaceableSliceOfStrings } from './replaceableSliceOfStrings';

/**
* ExternalPlugin holds configuration for registering an external plugin.
*/
export interface ExternalPlugin {
    /**
    * Endpoint is the location of the external plugin. Defaults to the name of the plugin, ie. \"http://{{name}}\".
    */
    'endpoint'?: string;
    'events'?: ReplaceableSliceOfStrings;
    /**
    * Name of the plugin.
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "endpoint",
            "baseName": "endpoint",
            "type": "string"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "ReplaceableSliceOfStrings"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExternalPlugin.attributeTypeMap;
    }
}


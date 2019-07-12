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
* ContextPolicy configures options about how to handle various contexts.
*/
export interface ContextPolicy {
    /**
    * Infer required and optional jobs from Branch Protection configuration
    */
    'fromBranchProtection'?: boolean;
    'optionalContexts'?: ReplaceableSliceOfStrings;
    'requiredContexts'?: ReplaceableSliceOfStrings;
    'requiredIfPresentContexts'?: ReplaceableSliceOfStrings;
    /**
    * whether to consider unknown contexts optional (skip) or required.
    */
    'skipUnknownContexts'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fromBranchProtection",
            "baseName": "fromBranchProtection",
            "type": "boolean"
        },
        {
            "name": "optionalContexts",
            "baseName": "optionalContexts",
            "type": "ReplaceableSliceOfStrings"
        },
        {
            "name": "requiredContexts",
            "baseName": "requiredContexts",
            "type": "ReplaceableSliceOfStrings"
        },
        {
            "name": "requiredIfPresentContexts",
            "baseName": "requiredIfPresentContexts",
            "type": "ReplaceableSliceOfStrings"
        },
        {
            "name": "skipUnknownContexts",
            "baseName": "skipUnknownContexts",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ContextPolicy.attributeTypeMap;
    }
}

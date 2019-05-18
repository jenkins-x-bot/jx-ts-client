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
* Query is turned into a Git Provider search query. See the docs for details: https://help.github.com/articles/searching-issues-and-pull-requests/
*/
export interface Query {
    'excludedBranches'?: ReplaceableSliceOfStrings;
    'includedBranches'?: ReplaceableSliceOfStrings;
    'labels'?: ReplaceableSliceOfStrings;
    'milestone'?: string;
    'missingLabels'?: ReplaceableSliceOfStrings;
    'reviewApprovedRequired'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "excludedBranches",
            "baseName": "excludedBranches",
            "type": "ReplaceableSliceOfStrings"
        },
        {
            "name": "includedBranches",
            "baseName": "includedBranches",
            "type": "ReplaceableSliceOfStrings"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "ReplaceableSliceOfStrings"
        },
        {
            "name": "milestone",
            "baseName": "milestone",
            "type": "string"
        },
        {
            "name": "missingLabels",
            "baseName": "missingLabels",
            "type": "ReplaceableSliceOfStrings"
        },
        {
            "name": "reviewApprovedRequired",
            "baseName": "reviewApprovedRequired",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Query.attributeTypeMap;
    }
}


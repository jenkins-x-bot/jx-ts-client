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

import { CommitStatusCommitReference } from './commitStatusCommitReference';
import { CommitStatusItem } from './commitStatusItem';
import { ResourceReference } from './resourceReference';

export interface CommitStatusDetails {
    'items'?: Array<CommitStatusItem>;
    'checked': boolean;
    'commit': CommitStatusCommitReference;
    'context': string;
    'pipelineActivity': ResourceReference;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "Items",
            "type": "Array<CommitStatusItem>"
        },
        {
            "name": "checked",
            "baseName": "checked",
            "type": "boolean"
        },
        {
            "name": "commit",
            "baseName": "commit",
            "type": "CommitStatusCommitReference"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "string"
        },
        {
            "name": "pipelineActivity",
            "baseName": "pipelineActivity",
            "type": "ResourceReference"
        }    ];

    static getAttributeTypeMap() {
        return CommitStatusDetails.attributeTypeMap;
    }
}


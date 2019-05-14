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


export class CommitStatusCommitReference {
    'gitUrl'?: string;
    'pullRequest'?: string;
    'sha'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "gitUrl",
            "baseName": "gitUrl",
            "type": "string"
        },
        {
            "name": "pullRequest",
            "baseName": "pullRequest",
            "type": "string"
        },
        {
            "name": "sha",
            "baseName": "sha",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CommitStatusCommitReference.attributeTypeMap;
    }
}

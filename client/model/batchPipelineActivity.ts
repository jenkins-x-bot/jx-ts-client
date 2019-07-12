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

import { PullRequestInfo } from './pullRequestInfo';

/**
* BatchPipelineActivity contains information about a batch build, used by both the batch build and its comprising PRs for linking them together
*/
export interface BatchPipelineActivity {
    'batchBranchName'?: string;
    'batchBuildNumber'?: string;
    'pullRequestInfo'?: Array<PullRequestInfo>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "batchBranchName",
            "baseName": "batchBranchName",
            "type": "string"
        },
        {
            "name": "batchBuildNumber",
            "baseName": "batchBuildNumber",
            "type": "string"
        },
        {
            "name": "pullRequestInfo",
            "baseName": "pullRequestInfo",
            "type": "Array<PullRequestInfo>"
        }    ];

    static getAttributeTypeMap() {
        return BatchPipelineActivity.attributeTypeMap;
    }
}

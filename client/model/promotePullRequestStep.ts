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


/**
* PromotePullRequestStep is the step for promoting a version to an environment by raising a Pull Request on the git repository of the environment
*/
export interface PromotePullRequestStep {
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'completedTimestamp'?: Date;
    'description'?: string;
    'mergeCommitSHA'?: string;
    'name'?: string;
    'pullRequestURL'?: string;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'startedTimestamp'?: Date;
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "completedTimestamp",
            "baseName": "completedTimestamp",
            "type": "Date"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "mergeCommitSHA",
            "baseName": "mergeCommitSHA",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "pullRequestURL",
            "baseName": "pullRequestURL",
            "type": "string"
        },
        {
            "name": "startedTimestamp",
            "baseName": "startedTimestamp",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PromotePullRequestStep.attributeTypeMap;
    }
}


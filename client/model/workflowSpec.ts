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

import { WorkflowStep } from './workflowStep';

/**
* WorkflowSpec is the specification of the pipeline activity
*/
export interface WorkflowSpec {
    'pipeline'?: string;
    'steps'?: Array<WorkflowStep>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pipeline",
            "baseName": "pipeline",
            "type": "string"
        },
        {
            "name": "steps",
            "baseName": "steps",
            "type": "Array<WorkflowStep>"
        }    ];

    static getAttributeTypeMap() {
        return WorkflowSpec.attributeTypeMap;
    }
}

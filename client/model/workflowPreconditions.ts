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


/**
* WorkflowPreconditions is the trigger to start a step
*/
export interface WorkflowPreconditions {
    /**
    * the names of the environments which need to have promoted before this step can be triggered
    */
    'environments'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "environments",
            "baseName": "environments",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return WorkflowPreconditions.attributeTypeMap;
    }
}


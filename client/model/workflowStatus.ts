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
* WorkflowStatus is the status for an Environment resource
*/
export interface WorkflowStatus {
    'version'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WorkflowStatus.attributeTypeMap;
    }
}

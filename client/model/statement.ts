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
* Statement represents a decision that was made, for example that a promotion was approved or denied
*/
export interface Statement {
    'measurementValue': boolean;
    'name': string;
    'statementType': string;
    'tags'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "measurementValue",
            "baseName": "measurementValue",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "statementType",
            "baseName": "statementType",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return Statement.attributeTypeMap;
    }
}

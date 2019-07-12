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
* PipelineExtension defines the image and command of an app which wants to modify/extend the pipeline
*/
export interface PipelineExtension {
    /**
    * Arguments to the entrypoint.
    */
    'args'?: Array<string>;
    /**
    * Entrypoint array. Not executed within a shell.
    */
    'command'?: string;
    /**
    * Docker image name.
    */
    'image'?: string;
    /**
    * Name of the container specified as a DNS_LABEL.
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "args",
            "baseName": "args",
            "type": "Array<string>"
        },
        {
            "name": "command",
            "baseName": "command",
            "type": "string"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PipelineExtension.attributeTypeMap;
    }
}

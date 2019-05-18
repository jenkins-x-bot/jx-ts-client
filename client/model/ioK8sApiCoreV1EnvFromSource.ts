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

import { IoK8sApiCoreV1ConfigMapEnvSource } from './ioK8sApiCoreV1ConfigMapEnvSource';
import { IoK8sApiCoreV1SecretEnvSource } from './ioK8sApiCoreV1SecretEnvSource';

/**
* EnvFromSource represents the source of a set of ConfigMaps
*/
export interface IoK8sApiCoreV1EnvFromSource {
    'configMapRef'?: IoK8sApiCoreV1ConfigMapEnvSource;
    /**
    * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
    */
    'prefix'?: string;
    'secretRef'?: IoK8sApiCoreV1SecretEnvSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configMapRef",
            "baseName": "configMapRef",
            "type": "IoK8sApiCoreV1ConfigMapEnvSource"
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "IoK8sApiCoreV1SecretEnvSource"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1EnvFromSource.attributeTypeMap;
    }
}


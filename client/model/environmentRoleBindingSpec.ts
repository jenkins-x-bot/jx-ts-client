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

import { EnvironmentFilter } from './environmentFilter';
import { IoK8sApiRbacV1RoleRef } from './ioK8sApiRbacV1RoleRef';
import { IoK8sApiRbacV1Subject } from './ioK8sApiRbacV1Subject';

/**
* EnvironmentRoleBindingSpec is the specification of an EnvironmentRoleBinding
*/
export interface EnvironmentRoleBindingSpec {
    /**
    * specifies which sets of environments this binding applies to
    */
    'environments'?: Array<EnvironmentFilter>;
    'roleRef': IoK8sApiRbacV1RoleRef;
    /**
    * Subjects holds references to the objects the role applies to.
    */
    'subjects': Array<IoK8sApiRbacV1Subject>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "environments",
            "baseName": "environments",
            "type": "Array<EnvironmentFilter>"
        },
        {
            "name": "roleRef",
            "baseName": "roleRef",
            "type": "IoK8sApiRbacV1RoleRef"
        },
        {
            "name": "subjects",
            "baseName": "subjects",
            "type": "Array<IoK8sApiRbacV1Subject>"
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentRoleBindingSpec.attributeTypeMap;
    }
}


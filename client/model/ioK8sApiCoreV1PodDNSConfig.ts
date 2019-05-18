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

import { IoK8sApiCoreV1PodDNSConfigOption } from './ioK8sApiCoreV1PodDNSConfigOption';

/**
* PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
*/
export interface IoK8sApiCoreV1PodDNSConfig {
    /**
    * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
    */
    'nameservers'?: Array<string>;
    /**
    * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
    */
    'options'?: Array<IoK8sApiCoreV1PodDNSConfigOption>;
    /**
    * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
    */
    'searches'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nameservers",
            "baseName": "nameservers",
            "type": "Array<string>"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<IoK8sApiCoreV1PodDNSConfigOption>"
        },
        {
            "name": "searches",
            "baseName": "searches",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PodDNSConfig.attributeTypeMap;
    }
}


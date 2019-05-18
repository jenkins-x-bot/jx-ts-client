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
* ContainerPort represents a network port in a single container.
*/
export interface IoK8sApiCoreV1ContainerPort {
    /**
    * Number of port to expose on the pod\'s IP address. This must be a valid port number, 0 < x < 65536.
    */
    'containerPort': number;
    /**
    * What host IP to bind the external port to.
    */
    'hostIP'?: string;
    /**
    * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
    */
    'hostPort'?: number;
    /**
    * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
    */
    'name'?: string;
    /**
    * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to \"TCP\".
    */
    'protocol'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "containerPort",
            "baseName": "containerPort",
            "type": "number"
        },
        {
            "name": "hostIP",
            "baseName": "hostIP",
            "type": "string"
        },
        {
            "name": "hostPort",
            "baseName": "hostPort",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ContainerPort.attributeTypeMap;
    }
}


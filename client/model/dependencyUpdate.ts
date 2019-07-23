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

import { DependencyUpdateDetails } from './dependencyUpdateDetails';

/**
* DependencyUpdate describes an dependency update message from the commit log
*/
export interface DependencyUpdate {
    'component'?: string;
    'fromReleaseHTMLURL': string;
    'fromReleaseName': string;
    'fromVersion': string;
    'host': string;
    'owner': string;
    'paths'?: Array<Array<DependencyUpdateDetails>>;
    'repo': string;
    'toReleaseHTMLURL': string;
    'toReleaseName': string;
    'toVersion': string;
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "component",
            "baseName": "component",
            "type": "string"
        },
        {
            "name": "fromReleaseHTMLURL",
            "baseName": "fromReleaseHTMLURL",
            "type": "string"
        },
        {
            "name": "fromReleaseName",
            "baseName": "fromReleaseName",
            "type": "string"
        },
        {
            "name": "fromVersion",
            "baseName": "fromVersion",
            "type": "string"
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string"
        },
        {
            "name": "paths",
            "baseName": "paths",
            "type": "Array<Array<DependencyUpdateDetails>>"
        },
        {
            "name": "repo",
            "baseName": "repo",
            "type": "string"
        },
        {
            "name": "toReleaseHTMLURL",
            "baseName": "toReleaseHTMLURL",
            "type": "string"
        },
        {
            "name": "toReleaseName",
            "baseName": "toReleaseName",
            "type": "string"
        },
        {
            "name": "toVersion",
            "baseName": "toVersion",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DependencyUpdate.attributeTypeMap;
    }
}


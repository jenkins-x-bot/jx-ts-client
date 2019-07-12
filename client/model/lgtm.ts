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
* Lgtm specifies a configuration for a single lgtm. The configuration for the lgtm plugin is defined as a list of these structures.
*/
export interface Lgtm {
    /**
    * ReviewActsAsLgtm indicates that a Github review of \"approve\" or \"request changes\" acts as adding or removing the lgtm label
    */
    'reviewActsAsLgtm'?: boolean;
    /**
    * StoreTreeHash indicates if tree_hash should be stored inside a comment to detect squashed commits before removing lgtm labels
    */
    'storeTreeHash'?: boolean;
    /**
    * WARNING: This disables the security mechanism that prevents a malicious member (or compromised GitHub account) from merging arbitrary code. Use with caution.  StickyLgtmTeam specifies the Github team whose members are trusted with sticky LGTM, which eliminates the need to re-lgtm minor fixes/updates.
    */
    'trustedTeamForStickyLgtm'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reviewActsAsLgtm",
            "baseName": "reviewActsAsLgtm",
            "type": "boolean"
        },
        {
            "name": "storeTreeHash",
            "baseName": "storeTreeHash",
            "type": "boolean"
        },
        {
            "name": "trustedTeamForStickyLgtm",
            "baseName": "trustedTeamForStickyLgtm",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Lgtm.attributeTypeMap;
    }
}

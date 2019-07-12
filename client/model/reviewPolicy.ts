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

import { Restrictions } from './restrictions';

/**
* ReviewPolicy specifies git provider approval/review criteria. Any nil values inherit the policy from the parent, otherwise bool/ints are overridden. Non-empty lists are appended to parent lists.
*/
export interface ReviewPolicy {
    /**
    * DismissStale overrides whether new commits automatically dismiss old reviews if set
    */
    'dismissStaleReviews'?: boolean;
    'dismissalRestrictions'?: Restrictions;
    /**
    * RequireOwners overrides whether CODEOWNERS must approve PRs if set
    */
    'requireCodeOwnerReviews'?: boolean;
    /**
    * Approvals overrides the number of approvals required if set (set to 0 to disable)
    */
    'requiredApprovingReviewCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dismissStaleReviews",
            "baseName": "dismissStaleReviews",
            "type": "boolean"
        },
        {
            "name": "dismissalRestrictions",
            "baseName": "dismissalRestrictions",
            "type": "Restrictions"
        },
        {
            "name": "requireCodeOwnerReviews",
            "baseName": "requireCodeOwnerReviews",
            "type": "boolean"
        },
        {
            "name": "requiredApprovingReviewCount",
            "baseName": "requiredApprovingReviewCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ReviewPolicy.attributeTypeMap;
    }
}

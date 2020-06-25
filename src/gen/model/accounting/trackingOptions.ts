/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.4
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TrackingOption } from '././trackingOption';

export class TrackingOptions {
    'options'?: Array<TrackingOption>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "options",
            "baseName": "Options",
            "type": "Array<TrackingOption>"
        }    ];

    static getAttributeTypeMap() {
        return TrackingOptions.attributeTypeMap;
    }
}


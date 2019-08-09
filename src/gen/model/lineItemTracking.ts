/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class LineItemTracking {
    /**
    * The Xero identifier for a tracking category
    */
    'trackingCategoryID'?: string;
    /**
    * The name of the tracking category
    */
    'name'?: string;
    /**
    * See Tracking Options
    */
    'option'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "trackingCategoryID",
            "baseName": "TrackingCategoryID",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "option",
            "baseName": "Option",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LineItemTracking.attributeTypeMap;
    }
}


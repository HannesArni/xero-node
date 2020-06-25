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


export class HistoryRecord {
    /**
    * details
    */
    'details'?: string;
    /**
    * Name of branding theme
    */
    'changes'?: string;
    /**
    * has a value of 0
    */
    'user'?: string;
    /**
    * UTC timestamp of creation date of branding theme
    */
    'dateUTC'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "details",
            "baseName": "Details",
            "type": "string"
        },
        {
            "name": "changes",
            "baseName": "Changes",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "User",
            "type": "string"
        },
        {
            "name": "dateUTC",
            "baseName": "DateUTC",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return HistoryRecord.attributeTypeMap;
    }
}


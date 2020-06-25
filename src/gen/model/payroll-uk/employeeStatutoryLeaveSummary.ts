/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.2.4
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class EmployeeStatutoryLeaveSummary {
    /**
    * The unique identifier (guid) of a statutory leave.
    */
    'statutoryLeaveID'?: string;
    /**
    * The unique identifier (guid) of the employee
    */
    'employeeID'?: string;
    /**
    * The category of statutory leave
    */
    'type'?: EmployeeStatutoryLeaveSummary.TypeEnum;
    /**
    * The date when the leave starts
    */
    'startDate'?: string;
    /**
    * The date when the leave ends
    */
    'endDate'?: string;
    /**
    * Whether the leave was entitled to receive payment
    */
    'isEntitled'?: boolean;
    /**
    * The status of the leave
    */
    'status'?: EmployeeStatutoryLeaveSummary.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "statutoryLeaveID",
            "baseName": "statutoryLeaveID",
            "type": "string"
        },
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EmployeeStatutoryLeaveSummary.TypeEnum"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "isEntitled",
            "baseName": "isEntitled",
            "type": "boolean"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "EmployeeStatutoryLeaveSummary.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeStatutoryLeaveSummary.attributeTypeMap;
    }
}

export namespace EmployeeStatutoryLeaveSummary {
    export enum TypeEnum {
        Sick = <any> 'Sick',
        Adoption = <any> 'Adoption',
        Maternity = <any> 'Maternity',
        Paternity = <any> 'Paternity',
        Sharedparental = <any> 'Sharedparental'
    }
    export enum StatusEnum {
        Pending = <any> 'Pending',
        InProgress = <any> 'In-Progress',
        Completed = <any> 'Completed'
    }
}

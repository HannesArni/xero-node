import { AllowanceCategory } from '././allowanceCategory';
import { AllowanceType } from '././allowanceType';
import { EarningsType } from '././earningsType';
import { EmploymentTerminationPaymentType } from '././employmentTerminationPaymentType';
import { RateType } from '././rateType';

export class EarningsRate {
    /**
    * Name of the earnings rate (max length = 100)
    */
    'name'?: string;
    /**
    * See Accounts
    */
    'accountCode'?: string;
    /**
    * Type of units used to record earnings (max length = 50). Only When RateType is RATEPERUNIT
    */
    'typeOfUnits'?: string;
    /**
    * Most payments are subject to tax, so you should only set this value if you are sure that a payment is exempt from PAYG withholding
    */
    'isExemptFromTax'?: boolean;
    /**
    * See the ATO website for details of which payments are exempt from SGC
    */
    'isExemptFromSuper'?: boolean;
    /**
    * Boolean to determine if the earnings rate is reportable or exempt from W1
    */
    'isReportableAsW1'?: boolean;
    'earningsType'?: EarningsType;
    /**
    * Xero identifier
    */
    'earningsRateID'?: string;
    'rateType'?: RateType;
    /**
    * Default rate per unit (optional). Only applicable if RateType is RATEPERUNIT.
    */
    'ratePerUnit'?: string;
    /**
    * This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MULTIPLE
    */
    'multiplier'?: number;
    /**
    * Indicates that this earnings rate should accrue leave. Only applicable if RateType is MULTIPLE
    */
    'accrueLeave'?: boolean;
    /**
    * Optional Amount for FIXEDAMOUNT RateType EarningsRate
    */
    'amount'?: number;
    'employmentTerminationPaymentType'?: EmploymentTerminationPaymentType;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
    /**
    * Is the current record
    */
    'currentRecord'?: boolean;
    'allowanceType'?: AllowanceType;
    'allowanceCategory'?: AllowanceCategory;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "accountCode",
            "baseName": "AccountCode",
            "type": "string"
        },
        {
            "name": "typeOfUnits",
            "baseName": "TypeOfUnits",
            "type": "string"
        },
        {
            "name": "isExemptFromTax",
            "baseName": "IsExemptFromTax",
            "type": "boolean"
        },
        {
            "name": "isExemptFromSuper",
            "baseName": "IsExemptFromSuper",
            "type": "boolean"
        },
        {
            "name": "isReportableAsW1",
            "baseName": "IsReportableAsW1",
            "type": "boolean"
        },
        {
            "name": "earningsType",
            "baseName": "EarningsType",
            "type": "EarningsType"
        },
        {
            "name": "earningsRateID",
            "baseName": "EarningsRateID",
            "type": "string"
        },
        {
            "name": "rateType",
            "baseName": "RateType",
            "type": "RateType"
        },
        {
            "name": "ratePerUnit",
            "baseName": "RatePerUnit",
            "type": "string"
        },
        {
            "name": "multiplier",
            "baseName": "Multiplier",
            "type": "number"
        },
        {
            "name": "accrueLeave",
            "baseName": "AccrueLeave",
            "type": "boolean"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "employmentTerminationPaymentType",
            "baseName": "EmploymentTerminationPaymentType",
            "type": "EmploymentTerminationPaymentType"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "currentRecord",
            "baseName": "CurrentRecord",
            "type": "boolean"
        },
        {
            "name": "allowanceType",
            "baseName": "AllowanceType",
            "type": "AllowanceType"
        },
        {
            "name": "allowanceCategory",
            "baseName": "AllowanceCategory",
            "type": "AllowanceCategory"
        }    ];

    static getAttributeTypeMap() {
        return EarningsRate.attributeTypeMap;
    }
}


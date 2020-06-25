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

import { Pagination } from '././pagination';
import { Problem } from '././problem';
import { Reimbursement } from '././reimbursement';

export class Reimbursements {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'reimbursements'?: Array<Reimbursement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "problem",
            "baseName": "problem",
            "type": "Problem"
        },
        {
            "name": "reimbursements",
            "baseName": "reimbursements",
            "type": "Array<Reimbursement>"
        }    ];

    static getAttributeTypeMap() {
        return Reimbursements.attributeTypeMap;
    }
}


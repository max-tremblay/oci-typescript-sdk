/**
 * Budgets API
 * Use the Budgets API to manage budgets and budget alerts. For more information, see [Budgets Overview](/iaas/Content/Billing/Concepts/budgetsoverview.htm).
 * OpenAPI spec version: 20190111
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
* The create budget details.
* <p>
Clients should use 'targetType' and 'targets' to specify the target type and list of targets on which the budget is applied.
* <p>
For backwards compatibility, 'targetCompartmentId' is still supported for all existing clients.
* This is considered deprecated, however, and all clients are upgraded to use 'targetType' and 'targets'.
* <p>
Specifying both 'targetCompartmentId' and 'targets' causes a Bad Request.
* 
*/
export interface CreateBudgetDetails {
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * This is DEPRECATED. Set the target compartment ID in targets instead.
   *
   */
  "targetCompartmentId"?: string;
  /**
   * The displayName of the budget. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The description of the budget.
   */
  "description"?: string;
  /**
   * The amount of the budget expressed as a whole number in the currency of the customer's rate card.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "amount": number;
  /**
   * The reset period for the budget.
   *
   */
  "resetPeriod": model.ResetPeriod;
  /**
   * The number of days offset from the first day of the month, at which the budget processing period starts. In months that have fewer days than this value, processing will begin on the last day of that month. For example, for a value of 12, processing starts every month on the 12th at midnight. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "budgetProcessingPeriodStartOffset"?: number;
  /**
   * The type of the budget processing period. Valid values are INVOICE, MONTH, and SINGLE_USE.
   *
   */
  "processingPeriodType"?: model.ProcessingPeriodType;
  /**
   * The date when the one-time budget begins. For example, `2023-03-23`. The date-time format conforms to RFC 3339, and will be truncated to the starting point of the date provided after being converted to UTC time.
   */
  "startDate"?: Date;
  /**
   * The date when the one-time budget concludes. For example, `2023-03-23`. The date-time format conforms to RFC 3339, and will be truncated to the starting point of the date provided after being converted to UTC time.
   */
  "endDate"?: Date;
  /**
   * The type of target on which the budget is applied.
   *
   */
  "targetType"?: model.TargetType;
  /**
   * The list of targets on which the budget is applied.
   *   If targetType is \"COMPARTMENT\", the targets contain the list of compartment OCIDs.
   *   If targetType is \"TAG\", the targets contain the list of cost tracking tag identifiers in the form of \"{tagNamespace}.{tagKey}.{tagValue}\".
   * Curerntly, the array should contain exactly one item.
   *
   */
  "targets"?: Array<string>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateBudgetDetails {
  export function getJsonObj(obj: CreateBudgetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateBudgetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

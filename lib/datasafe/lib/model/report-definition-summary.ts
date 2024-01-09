/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Summary of report definition.
 */
export interface ReportDefinitionSummary {
  /**
   * Name of the report definition.
   */
  "displayName": string;
  /**
   * The OCID of the report definition.
   */
  "id": string;
  /**
   * Specifies the name of the category that this report belongs to.
   */
  "category"?: ReportDefinitionSummary.Category;
  /**
   * A description of the report definition.
   */
  "description"?: string;
  /**
   * Signifies whether the definition is seeded or user defined. Values can either be 'true' or 'false'.
   */
  "isSeeded"?: boolean;
  /**
   * Specifies how the report definitions are ordered in the display. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "displayOrder"?: number;
  /**
   * Specifies the time at which the report definition was created.
   */
  "timeCreated": Date;
  /**
   * The date and time of the report definition update in Data Safe.
   */
  "timeUpdated"?: Date;
  /**
   * The OCID of the compartment containing the report definition.
   */
  "compartmentId": string;
  /**
   * Specifies the name of a resource that provides data for the report. For example alerts, events.
   */
  "dataSource"?: model.ReportDefinitionDataSource;
  /**
   * The current state of the audit report.
   */
  "lifecycleState": model.ReportDefinitionLifecycleState;
  /**
    * The schedule to generate the report periodically in the specified format:
* <version-string>;<version-specific-schedule>
* <p>
Allowed version strings - \"v1\"
* v1's version specific schedule -<ss> <mm> <hh> <day-of-week> <day-of-month>
* Each of the above fields potentially introduce constraints. A work request is created only
* when clock time satisfies all the constraints. Constraints introduced:
* 1. seconds = <ss> (So, the allowed range for <ss> is [0, 59])
* 2. minutes = <mm> (So, the allowed range for <mm> is [0, 59])
* 3. hours = <hh> (So, the allowed range for <hh> is [0, 23])
* 4. <day-of-week> can be either '*' (without quotes or a number between 1(Monday) and 7(Sunday))
* No constraint introduced when it is '*'. When not, day of week must equal the given value.
* 5. <day-of-month> can be either '*' (without quotes or a number between 1 and 28)
* No constraint introduced when it is '*'. When not, day of month must equal the given value
* 
    */
  "schedule"?: string;
  /**
   * The list of data protection regulations/standards used in the report that will help demonstrate compliance.
   */
  "complianceStandards"?: Array<string>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ReportDefinitionSummary {
  export enum Category {
    CustomReports = "CUSTOM_REPORTS",
    Summary = "SUMMARY",
    ActivityAuditing = "ACTIVITY_AUDITING",
    FirewallViolations = "FIREWALL_VIOLATIONS",
    AllowedSql = "ALLOWED_SQL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ReportDefinitionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReportDefinitionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

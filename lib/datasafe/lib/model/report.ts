/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The description of the report.
 */
export interface Report {
  /**
   * The OCID of the report.
   */
  "id": string;
  /**
   * Name of the report.
   */
  "displayName": string;
  /**
   * The OCID of the report definition.
   */
  "reportDefinitionId"?: string;
  /**
   * Specifies a description of the report.
   */
  "description"?: string;
  /**
   * The OCID of the compartment containing the report.
   */
  "compartmentId": string;
  /**
   * Specifies the format of report to be .xls or .pdf
   */
  "mimeType"?: Report.MimeType;
  /**
   * Specifies the date and time the report was generated.
   */
  "timeGenerated": Date;
  /**
   * The current state of the audit report.
   */
  "lifecycleState": model.ReportLifecycleState;
  /**
   * The type of the audit report.
   */
  "type"?: model.ReportType;
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
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Report {
  export enum MimeType {
    Pdf = "PDF",
    Xls = "XLS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Report): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Report): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

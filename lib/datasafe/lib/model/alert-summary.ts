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
 * Summary of a Data Safe Alert.
 */
export interface AlertSummary {
  /**
   * The OCID of the alert.
   */
  "id": string;
  /**
   * The status of the alert.
   */
  "status": model.AlertStatus;
  /**
   * The display name of the alert.
   */
  "displayName": string;
  /**
   * The details of the alert.
   */
  "description"?: string;
  /**
   * Severity level of the alert.
   */
  "severity": model.AlertSeverity;
  /**
   * Creation date and time of the operation that triggered alert, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "operationTime"?: Date;
  /**
   * The operation that triggered alert.
   */
  "operation"?: string;
  /**
   * The result of the operation (event) that triggered alert.
   */
  "operationStatus"?: AlertSummary.OperationStatus;
  /**
   * Array of OCIDs of the target database.
   */
  "targetIds"?: Array<string>;
  /**
   * Array of names of the target database.
   */
  "targetNames"?: Array<string>;
  /**
   * The OCID of the policy that triggered alert.
   */
  "policyId"?: string;
  /**
   * Type of the alert. Indicates the Data Safe feature triggering the alert.
   */
  "alertType"?: model.AlertType;
  /**
   * The OCID of the compartment that contains the alert.
   */
  "compartmentId": string;
  /**
   * Creation date and time of the alert, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * Last date and time the alert was updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated": Date;
  /**
   * The current state of the alert.
   */
  "lifecycleState": model.AlertLifecycleState;
  /**
   * The key of the rule of alert policy that triggered alert.
   */
  "alertPolicyRuleKey"?: string;
  /**
   * The display name of the rule of alert policy that triggered alert.
   */
  "alertPolicyRuleName"?: string;
  /**
   * Map that contains maps of values.
   *  Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "featureDetails"?: { [key: string]: { [key: string]: any } };
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace AlertSummary {
  export enum OperationStatus {
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AlertSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AlertSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

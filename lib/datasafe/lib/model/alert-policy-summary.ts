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
 * Summary of a Data Safe alert policy.
 */
export interface AlertPolicySummary {
  /**
   * The OCID of the alert policy.
   */
  "id": string;
  /**
   * The display name of the alert policy.
   */
  "displayName": string;
  /**
   * The details of the alert policy.
   */
  "description"?: string;
  /**
   * Indicates the Data Safe feature that the alert policy belongs to.
   */
  "alertPolicyType": model.AlertPolicyType;
  /**
   * Indicates if the alert policy is user-defined (true) or pre-defined (false).
   */
  "isUserDefined"?: boolean;
  /**
   * Severity level of the alert raised by this policy.
   */
  "severity"?: model.AlertSeverity;
  /**
   * The OCID of the compartment that contains the alert policy.
   */
  "compartmentId": string;
  /**
   * Creation date and time of the alert policy, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * Last date and time the alert policy was updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated": Date;
  /**
   * The current state of the alert policy.
   */
  "lifecycleState": model.AlertPolicyLifecycleState;
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

export namespace AlertPolicySummary {
  export function getJsonObj(obj: AlertPolicySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AlertPolicySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

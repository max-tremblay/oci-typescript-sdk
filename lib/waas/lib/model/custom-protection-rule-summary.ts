/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * An overview of a custom protection rule.
 */
export interface CustomProtectionRuleSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the custom protection rule.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the custom protection rule's compartment.
   */
  "compartmentId"?: string;
  /**
   * The user-friendly name of the custom protection rule.
   */
  "displayName"?: string;
  /**
   * The auto-generated ID for the custom protection rule. These IDs are referenced in logs.
   */
  "modSecurityRuleIds"?: Array<string>;
  /**
   * The current lifecycle state of the custom protection rule.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * The date and time the protection rule was created, expressed in RFC 3339 timestamp format.
   */
  "timeCreated"?: Date;
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

export namespace CustomProtectionRuleSummary {
  export function getJsonObj(obj: CustomProtectionRuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CustomProtectionRuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

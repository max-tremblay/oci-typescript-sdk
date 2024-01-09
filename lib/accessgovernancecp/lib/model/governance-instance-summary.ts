/**
 * Access Governance APIs
 * Use the Oracle Access Governance API to create, view, and manage GovernanceInstances.
 * OpenAPI spec version: 20220518
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
 * The summary of an GovernanceInstance.
 */
export interface GovernanceInstanceSummary {
  /**
   * The unique OCID of the GovernanceInstance.
   */
  "id"?: string;
  /**
   * The name for the GovernanceInstance.
   */
  "displayName": string;
  /**
   * The description of the GovernanceInstance.
   */
  "description"?: string;
  /**
   * The OCID of the compartment where the GovernanceInstance resides.
   */
  "compartmentId": string;
  /**
   * The time the the GovernanceInstance was created in an RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time the GovernanceInstance was updated in an RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the GovernanceInstance.
   */
  "lifecycleState": model.InstanceLifecycleState;
  /**
   * The licenseType being used.
   */
  "licenseType"?: model.LicenseType;
  /**
   * The access URL of the GovernanceInstance.
   */
  "instanceUrl"?: string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace GovernanceInstanceSummary {
  export function getJsonObj(obj: GovernanceInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GovernanceInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

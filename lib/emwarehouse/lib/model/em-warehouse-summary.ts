/**
 * EM Warehouse API
 * Use the EM Warehouse API to manage EM Warehouse data collection.
 * OpenAPI spec version: 20180828
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
 * Summary of the EmWarehouse.
 */
export interface EmWarehouseSummary {
  /**
   * operations Insights Warehouse Identifier
   */
  "operationsInsightsWarehouseId": string;
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * EmWarehouse Identifier, can be renamed
   */
  "displayName": string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * Type of the EmWarehouse.
   */
  "emWarehouseType": string;
  /**
   * EMBridge Identifier
   */
  "emBridgeId"?: string;
  /**
   * Data Flow Run Status
   */
  "latestEtlRunStatus"?: string;
  /**
   * Data Flow Run Status Message
   */
  "latestEtlRunMessage"?: string;
  /**
   * Data Flow Run Total Time
   */
  "latestEtlRunTime"?: string;
  /**
   * The time the the EmWarehouse was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time the EmWarehouse was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the EmWarehouse.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace EmWarehouseSummary {
  export function getJsonObj(obj: EmWarehouseSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EmWarehouseSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

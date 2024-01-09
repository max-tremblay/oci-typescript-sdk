/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * Information about discovery schedule to be updated.
 */
export interface UpdateDiscoveryScheduleDetails {
  /**
   * A user-friendly name for the discovery schedule. Does not have to be unique, and it's mutable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Recurrence specification for the discovery schedule execution.
   */
  "executionRecurrences"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. It exists only for cross-compatibility.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateDiscoveryScheduleDetails {
  export function getJsonObj(obj: UpdateDiscoveryScheduleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDiscoveryScheduleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

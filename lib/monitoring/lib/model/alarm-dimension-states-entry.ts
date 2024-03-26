/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetricData, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For more information, see
[the Monitoring documentation](/iaas/Content/Monitoring/home.htm).

 * OpenAPI spec version: 20180401
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
 * A timestamped alarm state entry for a metric stream.
 *
 */
export interface AlarmDimensionStatesEntry {
  /**
   * Indicator of the metric stream associated with the alarm state entry. Includes one or more dimension key-value pairs.
   *
   */
  "dimensions": { [key: string]: string };
  /**
    * Transition state (status value) associated with the alarm state entry.
* <p>
Example: {@code FIRING}
* 
    */
  "status": AlarmDimensionStatesEntry.Status;
  /**
   * Identifier of the alarm's base values for alarm evaluation, for use when the alarm contains overrides.
   * A valid ruleName value starts with an alphabetic character and includes only alphanumeric characters, underscores and square brackets.
   * Minimum number of characters: 3. Default value is {@code BASE}. For information about alarm overrides, see {@link #alarmOverride(AlarmOverrideRequest) alarmOverride}.
   *
   */
  "ruleName": string;
  /**
    * Transition time associated with the alarm state entry. Format defined by RFC3339.
* <p>
Example: {@code 2022-02-01T01:02:29.600Z}
* 
    */
  "timestamp": Date;
}

export namespace AlarmDimensionStatesEntry {
  export enum Status {
    Firing = "FIRING",
    Ok = "OK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AlarmDimensionStatesEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AlarmDimensionStatesEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

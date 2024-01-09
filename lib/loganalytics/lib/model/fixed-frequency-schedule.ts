/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Fixed frequency schedule for a scheduled task.
 */
export interface FixedFrequencySchedule extends model.Schedule {
  /**
   * Recurring interval in ISO 8601 extended format as described in
   * https://en.wikipedia.org/wiki/ISO_8601#Durations.
   * The largest supported unit is D, e.g. P14D (not P2W).
   * The value must be at least 5 minutes (PT5M) and at most 3 weeks (P21D or PT30240M).
   *
   */
  "recurringInterval": string;
  /**
   * Number of times (0-based) to execute until auto-stop.
   * Default value -1 will execute indefinitely.
   * Value 0 will execute once.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "repeatCount"?: number;

  "type": string;
}

export namespace FixedFrequencySchedule {
  export function getJsonObj(obj: FixedFrequencySchedule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Schedule.getJsonObj(obj) as FixedFrequencySchedule)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "FIXED_FREQUENCY";
  export function getDeserializedJsonObj(
    obj: FixedFrequencySchedule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Schedule.getDeserializedJsonObj(obj) as FixedFrequencySchedule)),
      ...{}
    };

    return jsonObj;
  }
}

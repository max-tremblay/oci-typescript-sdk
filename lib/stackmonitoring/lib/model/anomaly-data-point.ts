/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * anomaly evaluation result fo the data point
 */
export interface AnomalyDataPoint {
  /**
   * if the value is anomaly or not 0 indicates not an anomaly -1 indicates value is below the threshold +1 indicates value is above the threshold Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "anomaly": number;
  /**
   * lower threshold for the metric value Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "low"?: number;
  /**
   * upper threshold for the metric value Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "high"?: number;
  /**
   * timestamp of when the metric was collected
   */
  "timestamp": Date;
  /**
   * value for the metric data point Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "value": number;
}

export namespace AnomalyDataPoint {
  export function getJsonObj(obj: AnomalyDataPoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnomalyDataPoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

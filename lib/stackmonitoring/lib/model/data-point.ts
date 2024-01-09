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
 * metric data point
 */
export interface DataPoint {
  /**
   * timestamp of when the metric was collected
   */
  "timestamp": Date;
  /**
   * value for the metric data point Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "value": number;
}

export namespace DataPoint {
  export function getJsonObj(obj: DataPoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataPoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

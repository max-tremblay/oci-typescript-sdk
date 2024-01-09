/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The database metric details.
 */
export interface FleetMetricDefinition {
  /**
   * The name of the metric.
   */
  "metricName"?: string;
  /**
   * The baseline value of the metric. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "baselineValue"?: number;
  /**
   * The target value of the metric. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "targetValue"?: number;
  /**
   * The unit of the value.
   */
  "unit"?: string;
  /**
   * The data point date and time in UTC in ISO-8601 format, which is \"yyyy-MM-dd'T'hh:mm:ss.sss'Z'\".
   */
  "timestamp"?: Date;
  /**
   * The percentage change in the metric aggregated value compared to the baseline value. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentageChange"?: number;
  /**
   * The dimensions of the metric.
   */
  "dimensions"?: Array<model.MetricDimensionDefinition>;
}

export namespace FleetMetricDefinition {
  export function getJsonObj(obj: FleetMetricDefinition): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? obj.dimensions.map(item => {
              return model.MetricDimensionDefinition.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FleetMetricDefinition): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? obj.dimensions.map(item => {
              return model.MetricDimensionDefinition.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

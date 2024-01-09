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
 * The CPU utilization metrics for Autonomous Databases.
 */
export interface CpuUtilizationAggregateMetrics {
  "cpuUtilization"?: model.MetricDataPoint;
  "cpuStatistics"?: model.MetricStatisticsDefinition;
}

export namespace CpuUtilizationAggregateMetrics {
  export function getJsonObj(obj: CpuUtilizationAggregateMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "cpuUtilization": obj.cpuUtilization
          ? model.MetricDataPoint.getJsonObj(obj.cpuUtilization)
          : undefined,
        "cpuStatistics": obj.cpuStatistics
          ? model.MetricStatisticsDefinition.getJsonObj(obj.cpuStatistics)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CpuUtilizationAggregateMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "cpuUtilization": obj.cpuUtilization
          ? model.MetricDataPoint.getDeserializedJsonObj(obj.cpuUtilization)
          : undefined,
        "cpuStatistics": obj.cpuStatistics
          ? model.MetricStatisticsDefinition.getDeserializedJsonObj(obj.cpuStatistics)
          : undefined
      }
    };

    return jsonObj;
  }
}

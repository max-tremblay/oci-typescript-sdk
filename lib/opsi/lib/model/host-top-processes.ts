/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Top Processes metric for the host
 *
 */
export interface HostTopProcesses extends model.HostPerformanceMetricGroup {
  /**
   * process id Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "pid"?: number;
  /**
   * User that started the process
   */
  "userName"?: string;
  /**
   * Memory utilization percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryUtilizationPercent"?: number;
  /**
   * CPU utilization percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuUtilizationPercent"?: number;
  /**
   * CPU usage in seconds Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuUsageInSeconds"?: number;
  /**
   * Command line executed for the process
   */
  "command"?: string;
  /**
   * Virtual memory in megabytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "virtualMemoryInMBs"?: number;
  /**
   * Physical memory in megabytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "physicalMemoryInMBs"?: number;
  /**
   * Process Start Time
   * Example: {@code \"2020-03-31T00:00:00.000Z\"}
   *
   */
  "startTime"?: Date;
  /**
   * Number of processes running at the time of collection Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalProcesses"?: number;
  /**
   * Container id if this process corresponds to a running container in the host
   */
  "containerId"?: string;
  /**
   * Bytes Read Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diskBytesRead"?: number;
  /**
   * Bytes Written Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diskBytesWritten"?: number;
  /**
   * Read transactions per second Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diskIopsRead"?: number;
  /**
   * Write transactions per second Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diskIopsWritten"?: number;
  /**
   * IO Transactions per second Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diskIops"?: number;

  "metricName": string;
}

export namespace HostTopProcesses {
  export function getJsonObj(obj: HostTopProcesses, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostPerformanceMetricGroup.getJsonObj(obj) as HostTopProcesses)),
      ...{}
    };

    return jsonObj;
  }
  export const metricName = "HOST_TOP_PROCESSES";
  export function getDeserializedJsonObj(obj: HostTopProcesses, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostPerformanceMetricGroup.getDeserializedJsonObj(obj) as HostTopProcesses)),
      ...{}
    };

    return jsonObj;
  }
}

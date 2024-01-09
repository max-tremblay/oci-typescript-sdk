/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * Metric and threshold details for triggering an autoscale action.
 */
export interface AutoScalePolicyMetricRule {
  /**
   * Allowed value is CPU_UTILIZATION.
   */
  "metricType": AutoScalePolicyMetricRule.MetricType;
  "threshold": model.MetricThresholdRule;
}

export namespace AutoScalePolicyMetricRule {
  export enum MetricType {
    CpuUtilization = "CPU_UTILIZATION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutoScalePolicyMetricRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "threshold": obj.threshold ? model.MetricThresholdRule.getJsonObj(obj.threshold) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutoScalePolicyMetricRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "threshold": obj.threshold
          ? model.MetricThresholdRule.getDeserializedJsonObj(obj.threshold)
          : undefined
      }
    };

    return jsonObj;
  }
}

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
* Details of a metric based horizontal autoscaling policy.
* <p>
In a metric-based autoscaling policy, an autoscaling action is triggered when a performance metric exceeds a threshold.
* 
*/
export interface MetricBasedHorizontalScalingPolicyDetails extends model.AutoScalePolicyDetails {
  "scaleOutConfig"?: model.MetricBasedHorizontalScaleOutConfig;
  "scaleInConfig"?: model.MetricBasedHorizontalScaleInConfig;

  "policyType": string;
}

export namespace MetricBasedHorizontalScalingPolicyDetails {
  export function getJsonObj(
    obj: MetricBasedHorizontalScalingPolicyDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AutoScalePolicyDetails.getJsonObj(
            obj
          ) as MetricBasedHorizontalScalingPolicyDetails)),
      ...{
        "scaleOutConfig": obj.scaleOutConfig
          ? model.MetricBasedHorizontalScaleOutConfig.getJsonObj(obj.scaleOutConfig)
          : undefined,
        "scaleInConfig": obj.scaleInConfig
          ? model.MetricBasedHorizontalScaleInConfig.getJsonObj(obj.scaleInConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const policyType = "METRIC_BASED_HORIZONTAL_SCALING_POLICY";
  export function getDeserializedJsonObj(
    obj: MetricBasedHorizontalScalingPolicyDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AutoScalePolicyDetails.getDeserializedJsonObj(
            obj
          ) as MetricBasedHorizontalScalingPolicyDetails)),
      ...{
        "scaleOutConfig": obj.scaleOutConfig
          ? model.MetricBasedHorizontalScaleOutConfig.getDeserializedJsonObj(obj.scaleOutConfig)
          : undefined,
        "scaleInConfig": obj.scaleInConfig
          ? model.MetricBasedHorizontalScaleInConfig.getDeserializedJsonObj(obj.scaleInConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}

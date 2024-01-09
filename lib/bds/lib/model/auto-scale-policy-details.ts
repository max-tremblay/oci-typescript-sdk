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
* Details of an autoscale policy.
* <p>
You can create following types of autoscaling policies:
* <p>
- **MetricBasedVerticalScalingPolicy:** Vertical autoscaling action is triggered when a performance metric exceeds a threshold
* - **MetricBasedHorizontalScalingPolicy:** Horizontal autoscaling action is triggered when a performance metric exceeds a threshold
* - **ScheduleBasedVerticalScalingPolicy:** Vertical autoscaling action is triggered at the specific times that you schedule.
* - **ScheduleBasedHorizontalScalingPolicy:** Horizontal autoscaling action is triggered at the specific times that you schedule.
* 
*/
export interface AutoScalePolicyDetails {
  /**
   * The type of autoscaling trigger.
   */
  "triggerType": AutoScalePolicyDetails.TriggerType;
  /**
   * The type of autoscaling action to take.
   */
  "actionType": AutoScalePolicyDetails.ActionType;

  "policyType": string;
}

export namespace AutoScalePolicyDetails {
  export enum TriggerType {
    MetricBased = "METRIC_BASED",
    ScheduleBased = "SCHEDULE_BASED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ActionType {
    VerticalScaling = "VERTICAL_SCALING",
    HorizontalScaling = "HORIZONTAL_SCALING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutoScalePolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "METRIC_BASED_VERTICAL_SCALING_POLICY":
          return model.MetricBasedVerticalScalingPolicyDetails.getJsonObj(
            <model.MetricBasedVerticalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "SCHEDULE_BASED_VERTICAL_SCALING_POLICY":
          return model.ScheduleBasedVerticalScalingPolicyDetails.getJsonObj(
            <model.ScheduleBasedVerticalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "SCHEDULE_BASED_HORIZONTAL_SCALING_POLICY":
          return model.ScheduleBasedHorizontalScalingPolicyDetails.getJsonObj(
            <model.ScheduleBasedHorizontalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "METRIC_BASED_HORIZONTAL_SCALING_POLICY":
          return model.MetricBasedHorizontalScalingPolicyDetails.getJsonObj(
            <model.MetricBasedHorizontalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.policyType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutoScalePolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "METRIC_BASED_VERTICAL_SCALING_POLICY":
          return model.MetricBasedVerticalScalingPolicyDetails.getDeserializedJsonObj(
            <model.MetricBasedVerticalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "SCHEDULE_BASED_VERTICAL_SCALING_POLICY":
          return model.ScheduleBasedVerticalScalingPolicyDetails.getDeserializedJsonObj(
            <model.ScheduleBasedVerticalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "SCHEDULE_BASED_HORIZONTAL_SCALING_POLICY":
          return model.ScheduleBasedHorizontalScalingPolicyDetails.getDeserializedJsonObj(
            <model.ScheduleBasedHorizontalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "METRIC_BASED_HORIZONTAL_SCALING_POLICY":
          return model.MetricBasedHorizontalScalingPolicyDetails.getDeserializedJsonObj(
            <model.MetricBasedHorizontalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.policyType}`);
      }
    }
    return jsonObj;
  }
}

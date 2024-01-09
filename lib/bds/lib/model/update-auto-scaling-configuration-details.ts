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
 * The information about the autoscale configuration.
 */
export interface UpdateAutoScalingConfigurationDetails {
  /**
   * A user-friendly name. The name does not have to be unique, and it may be changed. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Whether the autoscale configuration is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Base-64 encoded password for the cluster (and Cloudera Manager) admin user.
   */
  "clusterAdminPassword"?: string;
  "policy"?: model.AutoScalePolicy;
  "policyDetails"?:
    | model.UpdateScheduleBasedHorizontalScalingPolicyDetails
    | model.UpdateMetricBasedVerticalScalingPolicyDetails
    | model.UpdateMetricBasedHorizontalScalingPolicyDetails
    | model.UpdateScheduleBasedVerticalScalingPolicyDetails;
}

export namespace UpdateAutoScalingConfigurationDetails {
  export function getJsonObj(obj: UpdateAutoScalingConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "policy": obj.policy ? model.AutoScalePolicy.getJsonObj(obj.policy) : undefined,
        "policyDetails": obj.policyDetails
          ? model.UpdateAutoScalePolicyDetails.getJsonObj(obj.policyDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateAutoScalingConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "policy": obj.policy ? model.AutoScalePolicy.getDeserializedJsonObj(obj.policy) : undefined,
        "policyDetails": obj.policyDetails
          ? model.UpdateAutoScalePolicyDetails.getDeserializedJsonObj(obj.policyDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}

/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The scaling configuration for the custom metric expression rule.
 *
 */
export interface CustomExpressionQueryScalingConfiguration extends model.ScalingConfiguration {
  /**
    * The Monitoring Query Language (MQL) expression to evaluate for the alarm. The Alarms feature of
* the Monitoring service interprets results for each returned time series as Boolean values,
* where zero represents false and a non-zero value represents true. A true value means that the trigger
* rule condition has been met. The query must specify a metric, statistic, interval, and trigger
* rule (threshold or absence). Supported values for interval: {@code 1m}-{@code 60m} (also {@code 1h}). You can optionally
* specify dimensions and grouping functions. Supported grouping functions: {@code grouping()}, {@code groupBy()}.
* <p>
Example of threshold alarm:
* <p>
  -----
* <p>
    CPUUtilization[1m]{resourceId = \"MODEL_DEPLOYMENT_OCID\"}.grouping().mean() < 25
*     CPUUtilization[1m]{resourceId = \"MODEL_DEPLOYMENT_OCID\"}.grouping().mean() > 75
* <p>
  -----
* 
    */
  "query": string;

  "scalingConfigurationType": string;
}

export namespace CustomExpressionQueryScalingConfiguration {
  export function getJsonObj(
    obj: CustomExpressionQueryScalingConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ScalingConfiguration.getJsonObj(
            obj
          ) as CustomExpressionQueryScalingConfiguration)),
      ...{}
    };

    return jsonObj;
  }
  export const scalingConfigurationType = "QUERY";
  export function getDeserializedJsonObj(
    obj: CustomExpressionQueryScalingConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ScalingConfiguration.getDeserializedJsonObj(
            obj
          ) as CustomExpressionQueryScalingConfiguration)),
      ...{}
    };

    return jsonObj;
  }
}

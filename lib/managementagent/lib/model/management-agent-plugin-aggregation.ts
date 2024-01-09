/**
 * Management Agent API
 * Use the Management Agent API to manage your infrastructure's management agents, including their plugins and install keys.
For more information, see [Management Agent](https://docs.cloud.oracle.com/iaas/management-agents/index.html).

 * OpenAPI spec version: 20200202
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
 * A count of Management Agents Plugins sharing the values for specified dimensions.
 */
export interface ManagementAgentPluginAggregation {
  "dimensions"?: model.ManagementAgentPluginAggregationDimensions;
  /**
   * The number of Management Agent Plugins in this group Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count"?: number;
}

export namespace ManagementAgentPluginAggregation {
  export function getJsonObj(obj: ManagementAgentPluginAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? model.ManagementAgentPluginAggregationDimensions.getJsonObj(obj.dimensions)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagementAgentPluginAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? model.ManagementAgentPluginAggregationDimensions.getDeserializedJsonObj(obj.dimensions)
          : undefined
      }
    };

    return jsonObj;
  }
}

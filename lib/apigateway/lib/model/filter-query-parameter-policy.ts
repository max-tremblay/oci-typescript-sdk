/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * Filter parameters from the query string as they pass through the gateway.  The gateway applies filters after other
 * transformations, so any parameters set or renamed must also be listed here when using an ALLOW type policy.
 *
 */
export interface FilterQueryParameterPolicy {
  /**
   * BLOCK drops any query parameters that are in the list of items, so it acts as an exclusion list.  ALLOW
   * permits only the parameters in the list and removes all others, so it acts as an inclusion list.
   *
   */
  "type": FilterQueryParameterPolicy.Type;
  /**
   * The list of query parameters.
   *
   */
  "items": Array<model.FilterQueryParameterPolicyItem>;
}

export namespace FilterQueryParameterPolicy {
  export enum Type {
    Allow = "ALLOW",
    Block = "BLOCK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: FilterQueryParameterPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.FilterQueryParameterPolicyItem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FilterQueryParameterPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.FilterQueryParameterPolicyItem.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

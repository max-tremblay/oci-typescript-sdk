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
 * Send the request to an Oracle Functions function.
 *
 */
export interface OracleFunctionBackend extends model.ApiSpecificationRouteBackend {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Oracle Functions function resource.
   *
   */
  "functionId": string;

  "type": string;
}

export namespace OracleFunctionBackend {
  export function getJsonObj(obj: OracleFunctionBackend, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ApiSpecificationRouteBackend.getJsonObj(obj) as OracleFunctionBackend)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "ORACLE_FUNCTIONS_BACKEND";
  export function getDeserializedJsonObj(
    obj: OracleFunctionBackend,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ApiSpecificationRouteBackend.getDeserializedJsonObj(
            obj
          ) as OracleFunctionBackend)),
      ...{}
    };

    return jsonObj;
  }
}

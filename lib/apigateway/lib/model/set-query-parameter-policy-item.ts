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
 * Set will add a new query parameter if it was not in the original request.  If the parameter already exists on the
 * request, you can choose to override, append, or skip it.
 *
 */
export interface SetQueryParameterPolicyItem {
  /**
   * The case-sensitive name of the query parameter.  This name must be unique across transformation policies.
   *
   */
  "name": string;
  /**
   * A list of new values.  Each value can be a constant or may include one or more expressions enclosed within
   * ${} delimiters.
   *
   */
  "values": Array<string>;
  /**
   * If a query parameter with the same name already exists in the request, OVERWRITE will overwrite the value,
   * APPEND will append to the existing value, or SKIP will keep the existing value.
   *
   */
  "ifExists"?: SetQueryParameterPolicyItem.IfExists;
}

export namespace SetQueryParameterPolicyItem {
  export enum IfExists {
    Overwrite = "OVERWRITE",
    Append = "APPEND",
    Skip = "SKIP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SetQueryParameterPolicyItem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SetQueryParameterPolicyItem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * The LOG type endpoint configuration. Logs are fetched from the specified endpoint.
 * For time based incremental collection, specify the START_TIME macro with the desired time format,
 * example: {START_TIME:yyMMddHHmmssZ}.
 * For offset based incremental collection, specify the START_OFFSET macro with offset identifier in the API response,
 * example: {START_OFFSET:$.offset}
 *
 */
export interface LogTypeEndpoint extends model.LogAnalyticsEndpoint {
  "logEndpoint": model.LogEndpoint;

  "endpointType": string;
}

export namespace LogTypeEndpoint {
  export function getJsonObj(obj: LogTypeEndpoint, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.LogAnalyticsEndpoint.getJsonObj(obj) as LogTypeEndpoint)),
      ...{
        "logEndpoint": obj.logEndpoint ? model.LogEndpoint.getJsonObj(obj.logEndpoint) : undefined
      }
    };

    return jsonObj;
  }
  export const endpointType = "LOG";
  export function getDeserializedJsonObj(obj: LogTypeEndpoint, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LogAnalyticsEndpoint.getDeserializedJsonObj(obj) as LogTypeEndpoint)),
      ...{
        "logEndpoint": obj.logEndpoint
          ? model.LogEndpoint.getDeserializedJsonObj(obj.logEndpoint)
          : undefined
      }
    };

    return jsonObj;
  }
}

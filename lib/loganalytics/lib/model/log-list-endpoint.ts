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
 * An endpoint used to fetch a list of log URLs.
 */
export interface LogListEndpoint {
  /**
   * The endpoint name.
   */
  "name": string;
  /**
   * The endpoint description.
   */
  "description"?: string;
  /**
   * The endpoint model.
   */
  "model"?: string;
  /**
   * The endpoint unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endpointId"?: number;
  "request": model.EndpointRequest;
  "response"?: model.EndpointResponse;
  "credentials"?: model.EndpointCredentials;
  "proxy"?: model.EndpointProxy;
  /**
   * A flag indicating whether or not the endpoint is enabled for log collection.
   */
  "isEnabled"?: boolean;
  /**
   * The system flag. A value of false denotes a custom, or user
   * defined endpoint. A value of true denotes an Oracle defined endpoint.
   *
   */
  "isSystem"?: boolean;
  /**
   * A list of endpoint properties.
   */
  "endpointProperties"?: Array<model.LogAnalyticsProperty>;
}

export namespace LogListEndpoint {
  export function getJsonObj(obj: LogListEndpoint): object {
    const jsonObj = {
      ...obj,
      ...{
        "request": obj.request ? model.EndpointRequest.getJsonObj(obj.request) : undefined,
        "response": obj.response ? model.EndpointResponse.getJsonObj(obj.response) : undefined,
        "credentials": obj.credentials
          ? model.EndpointCredentials.getJsonObj(obj.credentials)
          : undefined,
        "proxy": obj.proxy ? model.EndpointProxy.getJsonObj(obj.proxy) : undefined,

        "endpointProperties": obj.endpointProperties
          ? obj.endpointProperties.map(item => {
              return model.LogAnalyticsProperty.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogListEndpoint): object {
    const jsonObj = {
      ...obj,
      ...{
        "request": obj.request
          ? model.EndpointRequest.getDeserializedJsonObj(obj.request)
          : undefined,
        "response": obj.response
          ? model.EndpointResponse.getDeserializedJsonObj(obj.response)
          : undefined,
        "credentials": obj.credentials
          ? model.EndpointCredentials.getDeserializedJsonObj(obj.credentials)
          : undefined,
        "proxy": obj.proxy ? model.EndpointProxy.getDeserializedJsonObj(obj.proxy) : undefined,

        "endpointProperties": obj.endpointProperties
          ? obj.endpointProperties.map(item => {
              return model.LogAnalyticsProperty.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

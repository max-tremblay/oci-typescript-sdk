/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about the Generic REST task. The endpoint and cancelEndpoint  properties are deprecated, use the properties executeRestCallConfig, cancelRestCallConfig and pollRestCallConfig for execute, cancel and polling of the calls.
 */
export interface TaskSummaryFromRestTask extends model.TaskSummary {
  "authDetails"?: model.AuthDetails;
  "authConfig"?: model.ResourcePrincipalAuthConfig;
  "endpoint"?: model.Expression;
  /**
   * The REST method to use. This property is deprecated, use ExecuteRestCallConfig's methodType property instead.
   */
  "methodType"?: TaskSummaryFromRestTask.MethodType;
  /**
   * Headers for payload.
   */
  "headers"?: any;
  /**
   * JSON data for payload body. This property is deprecated, use ExecuteRestCallConfig's payload config param instead.
   */
  "jsonData"?: string;
  /**
   * The REST invocation pattern to use. ASYNC_OCI_WORKREQUEST is being deprecated as well as cancelEndpoint/MethodType.
   */
  "apiCallMode"?: TaskSummaryFromRestTask.ApiCallMode;
  "cancelEndpoint"?: model.Expression;
  /**
   * The REST method to use for canceling the original request.
   */
  "cancelMethodType"?: TaskSummaryFromRestTask.CancelMethodType;
  "executeRestCallConfig"?: model.ExecuteRestCallConfig;
  "cancelRestCallConfig"?: model.CancelRestCallConfig;
  "pollRestCallConfig"?: model.PollRestCallConfig;

  "modelType": string;
}

export namespace TaskSummaryFromRestTask {
  export enum MethodType {
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Delete = "DELETE",
    Put = "PUT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ApiCallMode {
    Synchronous = "SYNCHRONOUS",
    AsyncOciWorkrequest = "ASYNC_OCI_WORKREQUEST",
    AsyncGeneric = "ASYNC_GENERIC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum CancelMethodType {
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Delete = "DELETE",
    Put = "PUT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TaskSummaryFromRestTask, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TaskSummary.getJsonObj(obj) as TaskSummaryFromRestTask)),
      ...{
        "authDetails": obj.authDetails ? model.AuthDetails.getJsonObj(obj.authDetails) : undefined,
        "authConfig": obj.authConfig ? model.AuthConfig.getJsonObj(obj.authConfig) : undefined,
        "endpoint": obj.endpoint ? model.Expression.getJsonObj(obj.endpoint) : undefined,

        "cancelEndpoint": obj.cancelEndpoint
          ? model.Expression.getJsonObj(obj.cancelEndpoint)
          : undefined,

        "executeRestCallConfig": obj.executeRestCallConfig
          ? model.ExecuteRestCallConfig.getJsonObj(obj.executeRestCallConfig)
          : undefined,
        "cancelRestCallConfig": obj.cancelRestCallConfig
          ? model.CancelRestCallConfig.getJsonObj(obj.cancelRestCallConfig)
          : undefined,
        "pollRestCallConfig": obj.pollRestCallConfig
          ? model.PollRestCallConfig.getJsonObj(obj.pollRestCallConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "REST_TASK";
  export function getDeserializedJsonObj(
    obj: TaskSummaryFromRestTask,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TaskSummary.getDeserializedJsonObj(obj) as TaskSummaryFromRestTask)),
      ...{
        "authDetails": obj.authDetails
          ? model.AuthDetails.getDeserializedJsonObj(obj.authDetails)
          : undefined,
        "authConfig": obj.authConfig
          ? model.AuthConfig.getDeserializedJsonObj(obj.authConfig)
          : undefined,
        "endpoint": obj.endpoint
          ? model.Expression.getDeserializedJsonObj(obj.endpoint)
          : undefined,

        "cancelEndpoint": obj.cancelEndpoint
          ? model.Expression.getDeserializedJsonObj(obj.cancelEndpoint)
          : undefined,

        "executeRestCallConfig": obj.executeRestCallConfig
          ? model.ExecuteRestCallConfig.getDeserializedJsonObj(obj.executeRestCallConfig)
          : undefined,
        "cancelRestCallConfig": obj.cancelRestCallConfig
          ? model.CancelRestCallConfig.getDeserializedJsonObj(obj.cancelRestCallConfig)
          : undefined,
        "pollRestCallConfig": obj.pollRestCallConfig
          ? model.PollRestCallConfig.getDeserializedJsonObj(obj.pollRestCallConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}

/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about the Generic REST task.
 */
export interface TaskSummaryFromRestTask extends model.TaskSummary {
  "authDetails"?: model.AuthDetails;
  "endpoint"?: model.Expression;
  /**
   * The REST method to use.
   */
  "methodType"?: TaskSummaryFromRestTask.MethodType;
  /**
   * The headers for the REST call.
   */
  "headers"?: any;
  /**
   * JSON data for payload body.
   */
  "jsonData"?: string;
  /**
   * The invocation type to be used for Generic REST invocation.
   */
  "apiCallMode"?: TaskSummaryFromRestTask.ApiCallMode;
  "cancelEndpoint"?: model.Expression;
  /**
   * The REST method to use for canceling the original request.
   */
  "cancelMethodType"?: TaskSummaryFromRestTask.CancelMethodType;

  "modelType": string;
}

export namespace TaskSummaryFromRestTask {
  export enum MethodType {
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Delete = "DELETE",
    Put = "PUT"
  }

  export enum ApiCallMode {
    Synchronous = "SYNCHRONOUS",
    AsyncOciWorkrequest = "ASYNC_OCI_WORKREQUEST"
  }

  export enum CancelMethodType {
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Delete = "DELETE",
    Put = "PUT"
  }

  export function getJsonObj(obj: TaskSummaryFromRestTask, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TaskSummary.getJsonObj(obj) as TaskSummaryFromRestTask)),
      ...{
        "authDetails": obj.authDetails ? model.AuthDetails.getJsonObj(obj.authDetails) : undefined,
        "endpoint": obj.endpoint ? model.Expression.getJsonObj(obj.endpoint) : undefined,

        "cancelEndpoint": obj.cancelEndpoint
          ? model.Expression.getJsonObj(obj.cancelEndpoint)
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
        "endpoint": obj.endpoint
          ? model.Expression.getDeserializedJsonObj(obj.endpoint)
          : undefined,

        "cancelEndpoint": obj.cancelEndpoint
          ? model.Expression.getDeserializedJsonObj(obj.cancelEndpoint)
          : undefined
      }
    };

    return jsonObj;
  }
}

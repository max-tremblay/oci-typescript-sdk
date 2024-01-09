/**
 *
 *
 * OpenAPI spec version: 20210216
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/recovery/ListWorkRequestLogs.ts.html |here} to see how to use ListWorkRequestLogsRequest.
 */
export interface ListWorkRequestLogsRequest extends common.BaseRequest {
  /**
   * The OCID of the work request.
   */
  "workRequestId": string;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending.
   *
   */
  "sortBy"?: ListWorkRequestLogsRequest.SortBy;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   * Allowed values are:
   *   - ASC
   *   - DESC
   */
  "sortOrder"?: model.SortOrder;
}

export namespace ListWorkRequestLogsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated"
  }
}

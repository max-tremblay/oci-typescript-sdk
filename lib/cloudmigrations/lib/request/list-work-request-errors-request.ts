/**
 *
 *
 * OpenAPI spec version: 20220919
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cloudmigrations/ListWorkRequestErrors.ts.html |here} to see how to use ListWorkRequestErrorsRequest.
 */
export interface ListWorkRequestErrorsRequest extends common.BaseRequest {
  /**
   * The ID of the asynchronous request.
   */
  "workRequestId": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * A token representing the position at which to start retrieving results. This must come from the `opc-next-page` header field of the previous response.
   */
  "page"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The field to sort by. Only one sort order may be provided. The default order for 'timeAccepted' is descending.
   *
   */
  "sortBy"?: ListWorkRequestErrorsRequest.SortBy;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
}

export namespace ListWorkRequestErrorsRequest {
  export enum SortBy {
    TimeAccepted = "timeAccepted"
  }
}

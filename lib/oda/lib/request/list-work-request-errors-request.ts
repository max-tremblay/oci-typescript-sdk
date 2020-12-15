/**
 *
 *
 * OpenAPI spec version: 20190506
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oda/ListWorkRequestErrors.ts.html |here} to see how to use ListWorkRequestErrorsRequest.
 */
export interface ListWorkRequestErrorsRequest extends common.BaseRequest {
  /**
   * The identifier of the asynchronous work request.
   */
  "workRequestId": string;
  /**
   * The client request ID for tracing. This value is included in the opc-request-id response header.
   */
  "opcRequestId"?: string;
  /**
 * The page at which to start retrieving results.
* <p>
You get this value from the `opc-next-page` header in a previous list request.
* To retireve the first page, omit this query parameter.
* <p>
Example: `MToxMA==`
* 
 */
  "page"?: string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
 * The field to sort by. You can specify only one sort order. If no value is specified, then the default is `TIMESTAMP`.
* <p>
The default sort order for both `TIMESTAMP` and `CODE` is ascending.
* 
 */
  "sortBy"?: ListWorkRequestErrorsRequest.SortBy;
  /**
   * Sort the results in this order, use either `ASC` (ascending) or `DESC` (descending).
   */
  "sortOrder"?: ListWorkRequestErrorsRequest.SortOrder;
}

export namespace ListWorkRequestErrorsRequest {
  export enum SortBy {
    Code = "CODE",
    Timestamp = "TIMESTAMP"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}

/**
 *
 *
 * OpenAPI spec version: 20190909
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loggingsearch/SearchLogs.ts.html |here} to see how to use SearchLogsRequest.
 */
export interface SearchLogsRequest extends common.BaseRequest {
  /**
   * Search request.
   *
   */
  "searchLogsDetails": model.SearchLogsDetails;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about
   * a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a response. Pagination is not supported in this API.
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the opc-next-page response header from the previous \"Search\" call.
   * For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
}

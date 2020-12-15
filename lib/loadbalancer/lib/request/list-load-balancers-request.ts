/**
 *
 *
 * OpenAPI spec version: 20170115
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loadbalancer/ListLoadBalancers.ts.html |here} to see how to use ListLoadBalancersRequest.
 */
export interface ListLoadBalancersRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the load balancers to list.
   */
  "compartmentId": string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `50`
* 
 */
  "limit"?: number;
  /**
 * For list pagination. The value of the `opc-next-page` response header from the previous \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `3`
* 
 */
  "page"?: string;
  /**
 * The level of detail to return for each result. Can be `full` or `simple`.
* <p>
Example: `full`
* 
 */
  "detail"?: string;
  /**
   * The field to sort by.  You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending.
   * Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.
   *
   */
  "sortBy"?: ListLoadBalancersRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order is case sensitive.
   *
   */
  "sortOrder"?: ListLoadBalancersRequest.SortOrder;
  /**
 * A filter to return only resources that match the given display name exactly.
* <p>
Example: `example_load_balancer`
* 
 */
  "displayName"?: string;
  /**
 * A filter to return only resources that match the given lifecycle state.
* <p>
Example: `SUCCEEDED`
* 
 */
  "lifecycleState"?: string;
}

export namespace ListLoadBalancersRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}

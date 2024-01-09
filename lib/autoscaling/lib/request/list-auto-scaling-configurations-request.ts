/**
 *
 *
 * OpenAPI spec version: 20181001
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/autoscaling/ListAutoScalingConfigurations.ts.html |here} to see how to use ListAutoScalingConfigurationsRequest.
 */
export interface ListAutoScalingConfigurationsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the
   * resource. Use tenancyId to search in
   * the root compartment.
   *
   */
  "compartmentId": string;
  /**
   * A filter to return only resources that match the given display name exactly.
   *
   */
  "displayName"?: string;
  /**
   *
   */
  "opcRequestId"?: string;
  /**
   * For list pagination. The maximum number of items to return in a paginated \"List\" call. For important details
   * about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the `opc-next-page` response header from the previous \"List\" call. For important
   * details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The field to sort by. You can provide one sort order (`sortOrder`). Default order for
   * TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME
   * sort order is case sensitive.
   *
   */
  "sortBy"?: ListAutoScalingConfigurationsRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order
   * is case sensitive.
   *
   */
  "sortOrder"?: ListAutoScalingConfigurationsRequest.SortOrder;
}

export namespace ListAutoScalingConfigurationsRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}

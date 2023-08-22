/**
 *
 *
 * OpenAPI spec version: 20200630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/ListOpsiDataObjects.ts.html |here} to see how to use ListOpsiDataObjectsRequest.
 */
export interface ListOpsiDataObjectsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * OPSI data object types.
   */
  "dataObjectType"?: Array<model.OpsiDataObjectType>;
  /**
   * A filter to return only resources that match the entire display name.
   */
  "displayName"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to
   * return in a paginated \"List\" call.
   * For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   * Example: `50`
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the `opc-next-page` response header from
   * the previous \"List\" call. For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * OPSI data object list sort options.
   *
   */
  "sortBy"?: ListOpsiDataObjectsRequest.SortBy;
  /**
   * A filter to return only data objects that belongs to the group of the given group name. By default, no filtering will be applied on group name.
   */
  "groupName"?: string;
  /**
   * A filter to return only data objects that match the entire data object name. By default, no filtering will be applied on data object name.
   */
  "name"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListOpsiDataObjectsRequest {
  export enum SortBy {
    DisplayName = "displayName",
    DataObjectType = "dataObjectType",
    Name = "name"
  }
}

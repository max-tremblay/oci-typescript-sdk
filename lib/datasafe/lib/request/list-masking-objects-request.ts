/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListMaskingObjects.ts.html |here} to see how to use ListMaskingObjectsRequest.
 */
export interface ListMaskingObjectsRequest extends common.BaseRequest {
  /**
   * The OCID of the masking policy.
   */
  "maskingPolicyId": string;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListMaskingObjectsRequest.SortOrder;
  /**
   * The field to sort by. You can specify only one sorting parameter (sortOrder).
   * The default order is ascending.
   *
   */
  "sortBy"?: ListMaskingObjectsRequest.SortBy;
  /**
   * A filter to return only items related to specific schema name.
   */
  "schemaName"?: Array<string>;
  /**
   * A filter to return only items related to a specific object name.
   */
  "objectName"?: Array<string>;
  /**
   * A filter to return only items related to a specific object type.
   */
  "objectType"?: Array<ListMaskingObjectsRequest.ObjectType>;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
}

export namespace ListMaskingObjectsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    SchemaName = "schemaName",
    ObjectName = "objectName",
    ObjectType = "objectType"
  }

  export enum ObjectType {
    All = "ALL",
    Table = "TABLE",
    EditioningView = "EDITIONING_VIEW"
  }
}

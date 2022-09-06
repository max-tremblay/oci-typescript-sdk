/**
 *
 *
 * OpenAPI spec version: 20210217
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dataconnectivity/ListDataEntities.ts.html |here} to see how to use ListDataEntitiesRequest.
 */
export interface ListDataEntitiesRequest extends common.BaseRequest {
  /**
   * The registry OCID.
   */
  "registryId": string;
  /**
   * The connection key.
   */
  "connectionKey": string;
  /**
   * The schema resource name used for retrieving schemas.
   */
  "schemaResourceName": string;
  /**
   * Used to filter by the name of the object.
   */
  "name"?: string;
  /**
   * For list pagination. The value for this parameter is the `opc-next-page` or the `opc-prev-page` response header from the previous `List` call. See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * Type of the object to filter the results with.
   */
  "type"?: string;
  /**
   * Sets the maximum number of results per page, or items to return in a paginated `List` call. See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * Specifies the fields to get for an object.
   */
  "fields"?: Array<string>;
  /**
   * Specifies the field to sort by. Accepts only one field. By default, when you sort by time fields, results are shown in descending order. All other fields default to ascending order. Sorting related parameters are ignored when parameter `query` is present (search operation and sorting order are by relevance score in descending order).
   */
  "sortBy"?: ListDataEntitiesRequest.SortBy;
  /**
   * Specifies sort order to use, either `ASC` (ascending) or `DESC` (descending).
   */
  "sortOrder"?: ListDataEntitiesRequest.SortOrder;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * This parameter can be used to set the api response type to preview.
   */
  "apiMode"?: ListDataEntitiesRequest.ApiMode;
  /**
   * Used to filter by the name of the object.
   */
  "nameList"?: Array<string>;
  /**
   * This parameter can be used to specify whether entity search type is a pattern search.
   */
  "isPattern"?: boolean;
  /**
   * Endpoint ID used for getDataAssetFullDetails.
   */
  "endpointId"?: string;
  /**
   * Artifact type which needs to be listed while listing Artifacts.
   */
  "includeTypes"?: Array<string>;
}

export namespace ListDataEntitiesRequest {
  export enum SortBy {
    Id = "id",
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum ApiMode {
    Preview = "PREVIEW",
    All = "ALL"
  }
}

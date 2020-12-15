/**
 *
 *
 * OpenAPI spec version: 20191031
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/applicationmigration/ListMigrations.ts.html |here} to see how to use ListMigrationsRequest.
 */
export interface ListMigrationsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of a compartment. Retrieves details of objects in the specified compartment.
   */
  "compartmentId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) on which to query for a migration.
   *
   */
  "id"?: string;
  /**
   * The number of items returned in a paginated `List` call. For information about pagination, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the preceding `List` call.
   * For information about pagination, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The sort order, either `ASC` (ascending) or `DESC` (descending).
   *
   */
  "sortOrder"?: model.SortOrders;
  /**
   * Specifies the field on which to sort.
   * By default, `TIMECREATED` is ordered descending.
   * By default, `DISPLAYNAME` is ordered ascending. Note that you can sort only on one field.
   *
   */
  "sortBy"?: ListMigrationsRequest.SortBy;
  /**
   * Display name on which to query.
   */
  "displayName"?: string;
  /**
   * This field is not supported. Do not use.
   */
  "lifecycleState"?: model.MigrationLifecycleStates;
}

export namespace ListMigrationsRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }
}

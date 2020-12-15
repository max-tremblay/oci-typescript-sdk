/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/ListAutonomousDatabases.ts.html |here} to see how to use ListAutonomousDatabasesRequest.
 */
export interface ListAutonomousDatabasesRequest extends common.BaseRequest {
  /**
   * The compartment [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * The Autonomous Container Database [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "autonomousContainerDatabaseId"?: string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The pagination token to continue listing from.
   */
  "page"?: string;
  /**
   * The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.
   * <p>
   **Note:** If you do not include the availability domain filter, the resources are grouped by availability domain, then sorted.
   *
   */
  "sortBy"?: ListAutonomousDatabasesRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   */
  "sortOrder"?: ListAutonomousDatabasesRequest.SortOrder;
  /**
   * A filter to return only resources that match the given Infrastructure Type.
   */
  "infrastructureType"?: string;
  /**
   * A filter to return only resources that match the given lifecycle state exactly.
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only autonomous database resources that match the specified workload type.
   */
  "dbWorkload"?: string;
  /**
   * A filter to return only autonomous database resources that match the specified dbVersion.
   */
  "dbVersion"?: string;
  /**
   * Filter on the value of the resource's 'isFreeTier' property. A value of `true` returns only Always Free resources.
   * A value of `false` excludes Always Free resources from the returned results. Omitting this parameter returns both Always Free and paid resources.
   *
   */
  "isFreeTier"?: boolean;
  /**
   * A filter to return only resources that match the entire display name given. The match is not case sensitive.
   */
  "displayName"?: string;
  /**
   * Unique identifier for the request.
   *
   */
  "opcRequestId"?: string;
  /**
   * Filter on the value of the resource's 'isRefreshableClone' property. A value of `true` returns only refreshable clones.
   * A value of `false` excludes refreshable clones from the returned results. Omitting this parameter returns both refreshable clones and databases that are not refreshable clones.
   *
   */
  "isRefreshableClone"?: boolean;
  /**
   * A filter to return only resources that have Data Guard enabled.
   */
  "isDataGuardEnabled"?: boolean;
}

export namespace ListAutonomousDatabasesRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}

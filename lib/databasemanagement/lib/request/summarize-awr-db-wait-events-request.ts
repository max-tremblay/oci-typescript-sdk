/**
 *
 *
 * OpenAPI spec version: 20201101
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/databasemanagement/SummarizeAwrDbWaitEvents.ts.html |here} to see how to use SummarizeAwrDbWaitEventsRequest.
 */
export interface SummarizeAwrDbWaitEventsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database.
   */
  "managedDatabaseId": string;
  /**
   * The parameter to filter the database by internal ID.
   * Note that the internal ID of the database can be retrieved from the following endpoint:
   * /managedDatabases/{managedDatabaseId}/awrDbs
   *
   */
  "awrDbId": string;
  /**
   * The optional single value query parameter to filter the database instance number.
   */
  "instNum"?: string;
  /**
   * The optional greater than or equal to filter on the snapshot ID.
   */
  "beginSnIdGreaterThanOrEqualTo"?: number;
  /**
   * The optional less than or equal to query parameter to filter the snapshot ID.
   */
  "endSnIdLessThanOrEqualTo"?: number;
  /**
   * The optional greater than or equal to query parameter to filter the timestamp.
   */
  "timeGreaterThanOrEqualTo"?: Date;
  /**
   * The optional less than or equal to query parameter to filter the timestamp.
   */
  "timeLessThanOrEqualTo"?: Date;
  /**
   * The optional multiple value query parameter to filter the entity name.
   */
  "name"?: Array<string>;
  /**
   * The optional query parameter to filter ASH activities by FOREGROUND or BACKGROUND.
   */
  "sessionType"?: SummarizeAwrDbWaitEventsRequest.SessionType;
  /**
   * The optional query parameter to filter the database container by an exact ID value.
   * Note that the database container ID can be retrieved from the following endpoint:
   * /managedDatabases/{managedDatabaseId}/awrDbSnapshotRanges
   *
   */
  "containerId"?: number;
  /**
   * The page token representing the page from where the next set of paginated results
   * are retrieved. This is usually retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of records returned in large paginated response.
   */
  "limit"?: number;
  /**
   * The option to sort the data within a time period.
   */
  "sortBy"?: SummarizeAwrDbWaitEventsRequest.SortBy;
  /**
   * The option to sort information in ascending (\u2018ASC\u2019) or descending (\u2018DESC\u2019) order. Descending order is the default order.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
}

export namespace SummarizeAwrDbWaitEventsRequest {
  export enum SessionType {
    Foreground = "FOREGROUND",
    Background = "BACKGROUND",
    All = "ALL"
  }

  export enum SortBy {
    TimeBegin = "TIME_BEGIN",
    Name = "NAME"
  }
}

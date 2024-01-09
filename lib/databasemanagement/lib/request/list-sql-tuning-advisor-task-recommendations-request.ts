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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/databasemanagement/ListSqlTuningAdvisorTaskRecommendations.ts.html |here} to see how to use ListSqlTuningAdvisorTaskRecommendationsRequest.
 */
export interface ListSqlTuningAdvisorTaskRecommendationsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database.
   */
  "managedDatabaseId": string;
  /**
   * The SQL tuning task identifier. This is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "sqlTuningAdvisorTaskId": number;
  /**
   * The SQL object ID for the SQL tuning task. This is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "sqlObjectId": number;
  /**
   * The execution ID for an execution of a SQL tuning task. This is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "executionId": number;
  /**
   * The possible sortBy values of an object's recommendations.
   */
  "sortBy"?: ListSqlTuningAdvisorTaskRecommendationsRequest.SortBy;
  /**
   * The option to sort information in ascending (\u2018ASC\u2019) or descending (\u2018DESC\u2019) order. Descending order is the default order.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The page token representing the page from where the next set of paginated results
   * are retrieved. This is usually retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of records returned in the paginated response.
   */
  "limit"?: number;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListSqlTuningAdvisorTaskRecommendationsRequest {
  export enum SortBy {
    RecommendationType = "RECOMMENDATION_TYPE",
    Benefit = "BENEFIT"
  }
}

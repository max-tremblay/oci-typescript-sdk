/**
 *
 *
 * OpenAPI spec version: 20220421
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/adm/ListApplicationDependencyRecommendations.ts.html |here} to see how to use ListApplicationDependencyRecommendationsRequest.
 */
export interface ListApplicationDependencyRecommendationsRequest extends common.BaseRequest {
  /**
   * Unique Remediation Run identifier path parameter.
   */
  "remediationRunId": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the `opc-next-page` header field of a previous response.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * A filter to return only resources that match the entire GAV (Group Artifact Version) identifier given.
   */
  "gav"?: string;
  /**
   * The field to sort by. Only one sort order may be provided.
   * If sort order is dfs, the nodes are returned by going through the application dependency tree in a depth-first manner. Children are sorted based on their GAV property alphabetically (either ascending or descending, depending on the order parameter). Default order is ascending.
   * If sort order is bfs, the nodes are returned by going through the application dependency tree in a breadth-first manner. Children are sorted based on their GAV property alphabetically (either ascending or descending, depending on the order parameter). Default order is ascending.
   * Default order for gav is ascending where ascending corresponds to alphanumerical order.
   * Default order for nodeId is ascending where ascending corresponds to alphanumerical order.
   * Sorting by DFS or BFS cannot be used in conjunction with the following query parameters: \"gav\", \"cvssV2GreaterThanOrEqual\", \"cvssV3GreaterThanOrEqual\" and \"vulnerabilityId\".
   *
   */
  "sortBy"?: ListApplicationDependencyRecommendationsRequest.SortBy;
}

export namespace ListApplicationDependencyRecommendationsRequest {
  export enum SortBy {
    Gav = "gav",
    NodeId = "nodeId",
    Dfs = "dfs",
    Bfs = "bfs"
  }
}

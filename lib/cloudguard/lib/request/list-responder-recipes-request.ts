/**
 *
 *
 * OpenAPI spec version: 20200131
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cloudguard/ListResponderRecipes.ts.html |here} to see how to use ListResponderRecipesRequest.
 */
export interface ListResponderRecipesRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * Default is false.
   * When set to true, the list of all Oracle Managed Resources
   * Metadata supported by Cloud Guard is returned.
   *
   */
  "resourceMetadataOnly"?: boolean;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * The field life cycle state. Only one state can be provided. Default value for state is active. If no value is specified state is active.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * Default is false.
   * When set to true, the hierarchy of compartments is traversed
   * and all compartments and subcompartments in the tenancy are
   * returned depending on the the setting of `accessLevel`.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Valid values are `RESTRICTED` and `ACCESSIBLE`. Default is `RESTRICTED`.
   * Setting this to `ACCESSIBLE` returns only those compartments for which the
   * user has INSPECT permissions directly or indirectly (permissions can be on a
   * resource in a subcompartment).
   * When set to `RESTRICTED` permissions are checked and no partial results are displayed.
   *
   */
  "accessLevel"?: ListResponderRecipesRequest.AccessLevel;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListResponderRecipesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListResponderRecipesRequest {
  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}

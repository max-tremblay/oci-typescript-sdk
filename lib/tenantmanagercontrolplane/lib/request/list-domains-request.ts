/**
 *
 *
 * OpenAPI spec version: 20230401
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/tenantmanagercontrolplane/ListDomains.ts.html |here} to see how to use ListDomainsRequest.
 */
export interface ListDomainsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * The domain OCID.
   */
  "domainId"?: string;
  /**
   * The lifecycle state of the resource.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The status of the domain.
   */
  "status"?: string;
  /**
   * A filter to return only resources that exactly match the name given.
   */
  "name"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The field to sort by. Only one sort order can be provided.
   * * The default order for timeCreated is descending.
   * * The default order for displayName is ascending.
   * * If no value is specified, timeCreated is the default.
   *
   */
  "sortBy"?: ListDomainsRequest.SortBy;
  /**
   * The sort order to use, whether 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrder;
}

export namespace ListDomainsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}

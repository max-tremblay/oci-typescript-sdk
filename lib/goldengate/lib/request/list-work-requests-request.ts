/**
 *
 *
 * OpenAPI spec version: 20200407
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/goldengate/ListWorkRequests.ts.html |here} to see how to use ListWorkRequestsRequest.
 */
export interface ListWorkRequestsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment that contains the work request. Work requests should be scoped
   * to the same compartment as the resource the work request affects. If the work request concerns
   * multiple resources, and those resources are not in the same compartment, it is up to the service team
   * to pick the primary resource whose compartment should be used.
   *
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the resource in which to list resources.
   *
   */
  "resourceId"?: string;
  /**
   * The client request ID for tracing.
   *
   */
  "opcRequestId"?: string;
  /**
   * The page token representing the page at which to start retrieving results. This is usually
   * retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of items to return.
   *
   */
  "limit"?: number;
}

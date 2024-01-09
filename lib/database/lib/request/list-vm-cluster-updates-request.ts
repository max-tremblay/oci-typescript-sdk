/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/ListVmClusterUpdates.ts.html |here} to see how to use ListVmClusterUpdatesRequest.
 */
export interface ListVmClusterUpdatesRequest extends common.BaseRequest {
  /**
   * The VM cluster [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "vmClusterId": string;
  /**
   * A filter to return only resources that match the given update type exactly.
   */
  "updateType"?: ListVmClusterUpdatesRequest.UpdateType;
  /**
   * A filter to return only resources that match the given lifecycle state exactly.
   */
  "lifecycleState"?: string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The pagination token to continue listing from.
   */
  "page"?: string;
  /**
   * Unique identifier for the request.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListVmClusterUpdatesRequest {
  export enum UpdateType {
    GiUpgrade = "GI_UPGRADE",
    GiPatch = "GI_PATCH",
    OsUpdate = "OS_UPDATE"
  }
}

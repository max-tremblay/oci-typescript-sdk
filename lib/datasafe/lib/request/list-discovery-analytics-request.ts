/**
 *
 *
 * OpenAPI spec version: 20181201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListDiscoveryAnalytics.ts.html |here} to see how to use ListDiscoveryAnalyticsRequest.
 */
export interface ListDiscoveryAnalyticsRequest extends common.BaseRequest {
  /**
   * A filter to return only resources that match the specified compartment OCID.
   */
  "compartmentId": string;
  /**
   * Default is false.
   * When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in the tenancy are returned. Depends on the 'accessLevel' setting.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Attribute by which the discovery analytics data should be grouped.
   */
  "groupBy"?: ListDiscoveryAnalyticsRequest.GroupBy;
  /**
   * A filter to return only items related to a specific target OCID.
   */
  "targetId"?: string;
  /**
   * A filter to return only the resources that match the specified sensitive data model OCID.
   */
  "sensitiveDataModelId"?: string;
  /**
   * A filter to return only items related to a specific sensitive type OCID.
   */
  "sensitiveTypeId"?: string;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
  /**
   * A filter to return only the common sensitive type resources. Common sensitive types belong to
   * library sensitive types which are frequently used to perform sensitive data discovery.
   *
   */
  "isCommon"?: boolean;
}

export namespace ListDiscoveryAnalyticsRequest {
  export enum GroupBy {
    TargetId = "targetId",
    SensitiveDataModelId = "sensitiveDataModelId",
    SensitiveTypeId = "sensitiveTypeId",
    TargetIdAndSensitiveDataModelId = "targetIdAndSensitiveDataModelId",
    SensitiveTypeIdAndTargetId = "sensitiveTypeIdAndTargetId",
    SensitiveTypeIdAndSensitiveDataModelId = "sensitiveTypeIdAndSensitiveDataModelId"
  }
}

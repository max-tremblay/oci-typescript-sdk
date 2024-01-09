/**
 *
 *
 * OpenAPI spec version: 20210610
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/jms/ListJavaReleases.ts.html |here} to see how to use ListJavaReleasesRequest.
 */
export interface ListJavaReleasesRequest extends common.BaseRequest {
  /**
   * Unique Java release version identifier
   */
  "releaseVersion"?: string;
  /**
   * The version identifier for the Java family.
   */
  "familyVersion"?: string;
  /**
   * Java release type.
   */
  "releaseType"?: model.ReleaseType;
  /**
   * The security status of the Java Runtime.
   */
  "jreSecurityStatus"?: model.JreSecurityStatus;
  /**
   * Java license type.
   */
  "licenseType"?: model.LicenseType;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. The token is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * If no value is specified _releaseDate_ is default.
   *
   */
  "sortBy"?: model.JavaReleaseSortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/databasemanagement/SummarizeExternalListenerMetrics.ts.html |here} to see how to use SummarizeExternalListenerMetricsRequest.
 */
export interface SummarizeExternalListenerMetricsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external listener.
   */
  "externalListenerId": string;
  /**
   * The beginning of the time range set to retrieve metric data for the DB system
   * and its members. Expressed in UTC in ISO-8601 format, which is `yyyy-MM-dd'T'hh:mm:ss.sss'Z'`.
   *
   */
  "startTime": string;
  /**
   * The end of the time range set to retrieve metric data for the DB system
   * and its members. Expressed in UTC in ISO-8601 format, which is `yyyy-MM-dd'T'hh:mm:ss.sss'Z'`.
   *
   */
  "endTime": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
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
   * The filter used to retrieve a specific set of metrics by passing the desired metric names with a comma separator. Note that, by default, the service returns all supported metrics.
   */
  "filterByMetricNames"?: string;
}

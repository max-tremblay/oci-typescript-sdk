/**
 *
 *
 * OpenAPI spec version: 20190801
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagement/GetEventReport.ts.html |here} to see how to use GetEventReportRequest.
 */
export interface GetEventReportRequest extends common.BaseRequest {
  /**
   * Instance Oracle Cloud identifier (ocid)
   */
  "managedInstanceId": string;
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * filter event occurrence. Selecting only those last occurred before given date in ISO 8601 format
   * Example: 2017-07-14T02:40:00.000Z
   *
   */
  "latestTimestampLessThan"?: Date;
  /**
   * filter event occurrence. Selecting only those last occurred on or after given date in ISO 8601 format
   * Example: 2017-07-14T02:40:00.000Z
   *
   */
  "latestTimestampGreaterThanOrEqualTo"?: Date;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

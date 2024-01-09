/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

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
 * A summary of the status of the job executions.
 */
export interface JobExecutionsStatusSummary {
  /**
   * The status of the job execution.
   */
  "status": JobExecutionsStatusSummary.Status;
  /**
   * The number of job executions of a particular status. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count": number;
}

export namespace JobExecutionsStatusSummary {
  export enum Status {
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: JobExecutionsStatusSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobExecutionsStatusSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

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
 * A log message from the execution of a work request.
 */
export interface WorkRequestLogEntry {
  /**
   * The identifier of the work request log. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "id": number;
  /**
   * The OCID of the work request.
   */
  "workRequestId": string;
  /**
   * A human-readable log message.
   */
  "message": string;
  /**
   * The date and time the log message was written, described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339). The precision for the time object is in milliseconds.
   *
   */
  "timestamp": Date;
}

export namespace WorkRequestLogEntry {
  export function getJsonObj(obj: WorkRequestLogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestLogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

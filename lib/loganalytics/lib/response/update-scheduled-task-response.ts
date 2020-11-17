/**
 *
 *
 * OpenAPI spec version: 20200601
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

export interface UpdateScheduledTaskResponse {
  /**
   * Unique Oracle-assigned identifier for the request. When you contact Oracle about a specific request, provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * For optimistic concurrency control. See `if-match`.
   *
   */
  "etag": string;
  /**
   * The returned model.ScheduledTask instance, or null if {@link #isNotModified()} is true.
   */
  "scheduledTask": model.ScheduledTask;

  /**
   * Flag to indicate whether or not the object was modified.  If this is true,
   * the getter for the object itself will return null.  Callers should check this
   * if they specified one of the request params that might result in a conditional
   * response (like 'if-match'/'if-none-match').
   */
  "isNotModified": boolean;
}

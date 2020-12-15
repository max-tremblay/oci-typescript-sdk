/**
 *
 *
 * OpenAPI spec version: 20190828
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

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/nosql/GetRow.ts.html |here} to see how to use GetRowRequest.
 */
export interface GetRowRequest extends common.BaseRequest {
  /**
   * A table name within the compartment, or a table OCID.
   */
  "tableNameOrId": string;
  /**
   * An array of strings, each of the format \"column-name:value\",
   * representing the primary key of the row.
   *
   */
  "key": Array<string>;
  /**
   * The ID of a table's compartment. When a table is identified
   * by name, the compartmentId is often needed to provide
   * context for interpreting the name.
   *
   */
  "compartmentId"?: string;
  /**
   * Consistency requirement for a read operation.
   */
  "consistency"?: GetRowRequest.Consistency;
  /**
   * Timeout setting for this operation.
   */
  "timeoutInMs"?: number;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace GetRowRequest {
  export enum Consistency {
    Eventual = "EVENTUAL",
    Absolute = "ABSOLUTE"
  }
}

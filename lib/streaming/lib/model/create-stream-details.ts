/**
 * Streaming API
 * Use the Streaming API to produce and consume messages, create streams and stream pools, and manage related items. For more information, see [Streaming](/Content/Streaming/Concepts/streamingoverview.htm).
 * OpenAPI spec version: 20180418
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
 * Object used to create a stream.
 */
export interface CreateStreamDetails {
  /**
    * The name of the stream. Avoid entering confidential information.
* <p>
Example: `TelemetryEvents`
* 
    */
  "name": string;
  /**
   * The number of partitions in the stream. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "partitions": number;
  /**
   * The OCID of the compartment that contains the stream.
   */
  "compartmentId"?: string;
  /**
   * The OCID of the stream pool that contains the stream.
   */
  "streamPoolId"?: string;
  /**
   * The retention period of the stream, in hours. Accepted values are between 24 and 168 (7 days).
   * If not specified, the stream will have a retention period of 24 hours.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retentionInHours"?: number;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair that is applied with no predefined name, type, or namespace. Exists for cross-compatibility only.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateStreamDetails {
  export function getJsonObj(obj: CreateStreamDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateStreamDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

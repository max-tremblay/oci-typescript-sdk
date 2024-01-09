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
 * Detailed representation of a stream, including all its partitions.
 */
export interface Stream {
  /**
    * The name of the stream. Avoid entering confidential information.
* <p>
Example: `TelemetryEvents`
* 
    */
  "name": string;
  /**
   * The OCID of the stream.
   */
  "id": string;
  /**
   * The number of partitions in the stream. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "partitions": number;
  /**
   * The retention period of the stream, in hours. This property is read-only. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retentionInHours": number;
  /**
   * The OCID of the stream.
   */
  "compartmentId": string;
  /**
   * The OCID of the stream pool that contains the stream.
   */
  "streamPoolId": string;
  /**
   * The current state of the stream.
   */
  "lifecycleState": Stream.LifecycleState;
  /**
   * Any additional details about the current state of the stream.
   */
  "lifecycleStateDetails"?: string;
  /**
    * The date and time the stream was created, expressed in in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: `2018-04-20T00:00:07.405Z`
* 
    */
  "timeCreated": Date;
  /**
   * The endpoint to use when creating the StreamClient to consume or publish messages in the stream.
   * If the associated stream pool is private, the endpoint is also private and can only be accessed from inside the stream pool's associated subnet.
   *
   */
  "messagesEndpoint": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. Exists for cross-compatibility only.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}'
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Stream {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Stream): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Stream): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

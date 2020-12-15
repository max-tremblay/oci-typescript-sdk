/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ons/PublishMessage.ts.html |here} to see how to use PublishMessageRequest.
 */
export interface PublishMessageRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the topic.
   *
   */
  "topicId": string;
  /**
   * The message to publish.
   */
  "messageDetails": model.MessageDetails;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * Type of message body in the request.
   *
   */
  "messageType"?: PublishMessageRequest.MessageType;
}

export namespace PublishMessageRequest {
  export enum MessageType {
    Json = "JSON",
    RawText = "RAW_TEXT"
  }
}

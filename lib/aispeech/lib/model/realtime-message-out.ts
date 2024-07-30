/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
 * Websocket messages sent by client to the service.
 */
export interface RealtimeMessageOut {
  "event": string;
}

export namespace RealtimeMessageOut {
  export function getJsonObj(obj: RealtimeMessageOut): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "event" in obj && obj.event) {
      switch (obj.event) {
        case "SEND_FINAL_RESULT":
          return model.RealtimeMessageSendFinalResult.getJsonObj(
            <model.RealtimeMessageSendFinalResult>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.event}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RealtimeMessageOut): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "event" in obj && obj.event) {
      switch (obj.event) {
        case "SEND_FINAL_RESULT":
          return model.RealtimeMessageSendFinalResult.getDeserializedJsonObj(
            <model.RealtimeMessageSendFinalResult>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.event}`);
      }
    }
    return jsonObj;
  }
}

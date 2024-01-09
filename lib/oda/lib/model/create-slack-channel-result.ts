/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * The configuration for a Slack channel.
 */
export interface CreateSlackChannelResult extends model.CreateChannelResult {
  /**
   * The Slack Client Id for the Slack app.
   */
  "clientId": string;
  /**
   * The URL to redirect to when authentication is successful.
   */
  "authSuccessUrl"?: string;
  /**
   * The URL to redirect to when authentication is unsuccessful.
   */
  "authErrorUrl"?: string;
  /**
   * The ID of the Skill or Digital Assistant that the Channel is routed to.
   */
  "botId"?: string;
  /**
   * The URL to use to send messages to this channel.
   * This will be generally be used to configure a webhook in a 3rd party messaging system to send messages to this channel.
   *
   */
  "webhookUrl": string;

  "type": string;
}

export namespace CreateSlackChannelResult {
  export function getJsonObj(obj: CreateSlackChannelResult, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelResult.getJsonObj(obj) as CreateSlackChannelResult)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "SLACK";
  export function getDeserializedJsonObj(
    obj: CreateSlackChannelResult,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelResult.getDeserializedJsonObj(obj) as CreateSlackChannelResult)),
      ...{}
    };

    return jsonObj;
  }
}

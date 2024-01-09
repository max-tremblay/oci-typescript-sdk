/**
 * Oracle Integration API
 * Oracle Integration API.
 * OpenAPI spec version: 20190131
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
 * Details required for creating Private Endpoint Outbound Connection (ReverseConnection).
 *
 */
export interface PrivateEndpointOutboundConnection extends model.OutboundConnection {
  /**
   * Customer Private Network VCN Subnet OCID. This is a required argument.
   */
  "subnetId": string;
  /**
   * One or more Network security group Ids. This is an optional argument.
   */
  "nsgIds"?: Array<string>;

  "outboundConnectionType": string;
}

export namespace PrivateEndpointOutboundConnection {
  export function getJsonObj(
    obj: PrivateEndpointOutboundConnection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.OutboundConnection.getJsonObj(obj) as PrivateEndpointOutboundConnection)),
      ...{}
    };

    return jsonObj;
  }
  export const outboundConnectionType = "PRIVATE_ENDPOINT";
  export function getDeserializedJsonObj(
    obj: PrivateEndpointOutboundConnection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.OutboundConnection.getDeserializedJsonObj(
            obj
          ) as PrivateEndpointOutboundConnection)),
      ...{}
    };

    return jsonObj;
  }
}

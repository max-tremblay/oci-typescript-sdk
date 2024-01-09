/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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

export interface DrgAttachmentNetworkDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the network attached to the DRG.
   *
   */
  "id"?: string;

  "type": string;
}

export namespace DrgAttachmentNetworkDetails {
  export function getJsonObj(obj: DrgAttachmentNetworkDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VCN":
          return model.VcnDrgAttachmentNetworkDetails.getJsonObj(
            <model.VcnDrgAttachmentNetworkDetails>(<object>jsonObj),
            true
          );
        case "LOOPBACK":
          return model.LoopBackDrgAttachmentNetworkDetails.getJsonObj(
            <model.LoopBackDrgAttachmentNetworkDetails>(<object>jsonObj),
            true
          );
        case "IPSEC_TUNNEL":
          return model.IpsecTunnelDrgAttachmentNetworkDetails.getJsonObj(
            <model.IpsecTunnelDrgAttachmentNetworkDetails>(<object>jsonObj),
            true
          );
        case "VIRTUAL_CIRCUIT":
          return model.VirtualCircuitDrgAttachmentNetworkDetails.getJsonObj(
            <model.VirtualCircuitDrgAttachmentNetworkDetails>(<object>jsonObj),
            true
          );
        case "REMOTE_PEERING_CONNECTION":
          return model.RemotePeeringConnectionDrgAttachmentNetworkDetails.getJsonObj(
            <model.RemotePeeringConnectionDrgAttachmentNetworkDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrgAttachmentNetworkDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VCN":
          return model.VcnDrgAttachmentNetworkDetails.getDeserializedJsonObj(
            <model.VcnDrgAttachmentNetworkDetails>(<object>jsonObj),
            true
          );
        case "LOOPBACK":
          return model.LoopBackDrgAttachmentNetworkDetails.getDeserializedJsonObj(
            <model.LoopBackDrgAttachmentNetworkDetails>(<object>jsonObj),
            true
          );
        case "IPSEC_TUNNEL":
          return model.IpsecTunnelDrgAttachmentNetworkDetails.getDeserializedJsonObj(
            <model.IpsecTunnelDrgAttachmentNetworkDetails>(<object>jsonObj),
            true
          );
        case "VIRTUAL_CIRCUIT":
          return model.VirtualCircuitDrgAttachmentNetworkDetails.getDeserializedJsonObj(
            <model.VirtualCircuitDrgAttachmentNetworkDetails>(<object>jsonObj),
            true
          );
        case "REMOTE_PEERING_CONNECTION":
          return model.RemotePeeringConnectionDrgAttachmentNetworkDetails.getDeserializedJsonObj(
            <model.RemotePeeringConnectionDrgAttachmentNetworkDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}

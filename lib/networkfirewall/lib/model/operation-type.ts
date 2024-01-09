/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * Possible operation types.
 **/
export enum OperationType {
  CreateNetworkFirewall = "CREATE_NETWORK_FIREWALL",
  UpdateNetworkFirewall = "UPDATE_NETWORK_FIREWALL",
  DeleteNetworkFirewall = "DELETE_NETWORK_FIREWALL",
  MoveNetworkFirewall = "MOVE_NETWORK_FIREWALL",
  CreateNetworkFirewallPolicy = "CREATE_NETWORK_FIREWALL_POLICY",
  UpdateNetworkFirewallPolicy = "UPDATE_NETWORK_FIREWALL_POLICY",
  DeleteNetworkFirewallPolicy = "DELETE_NETWORK_FIREWALL_POLICY",
  MoveNetworkFirewallPolicy = "MOVE_NETWORK_FIREWALL_POLICY",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): OperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationType): OperationType {
    return obj;
  }
}

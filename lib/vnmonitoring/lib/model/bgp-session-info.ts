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

/**
 * Information for establishing a BGP session for the IPSec tunnel.
 */
export interface BgpSessionInfo {
  /**
    * The IP address for the Oracle end of the inside tunnel interface.
* <p>
If the tunnel's `routing` attribute is set to `BGP`
* (see {@link IPSecConnectionTunnel}), this IP address
* is required and used for the tunnel's BGP session.
* <p>
If `routing` is instead set to `STATIC`, this IP address is optional. You can set this IP
* address so you can troubleshoot or monitor the tunnel.
* <p>
The value must be a /30 or /31.
* <p>
Example: `10.0.0.4/31`
* 
    */
  "oracleInterfaceIp"?: string;
  /**
    * The IP address for the CPE end of the inside tunnel interface.
* <p>
If the tunnel's `routing` attribute is set to `BGP`
* (see {@link IPSecConnectionTunnel}), this IP address
* is required and used for the tunnel's BGP session.
* <p>
If `routing` is instead set to `STATIC`, this IP address is optional. You can set this IP
* address so you can troubleshoot or monitor the tunnel.
* <p>
The value must be a /30 or /31.
* <p>
Example: `10.0.0.5/31`
* 
    */
  "customerInterfaceIp"?: string;
  /**
    * The IPv6 address for the Oracle end of the inside tunnel interface. This IP address is optional.
* <p>
If the tunnel's `routing` attribute is set to `BGP`
* (see {@link IPSecConnectionTunnel}), this IP address
* is used for the tunnel's BGP session.
* <p>
If `routing` is instead set to `STATIC`, you can set this IP
* address to troubleshoot or monitor the tunnel.
* <p>
Only subnet masks from /64 up to /127 are allowed.
* <p>
Example: `2001:db8::1/64`
* 
    */
  "oracleInterfaceIpv6"?: string;
  /**
    * The IPv6 address for the CPE end of the inside tunnel interface. This IP address is optional.
* <p>
If the tunnel's `routing` attribute is set to `BGP`
* (see {@link IPSecConnectionTunnel}), this IP address
* is used for the tunnel's BGP session.
* <p>
If `routing` is instead set to `STATIC`, you can set this IP
* address to troubleshoot or monitor the tunnel.
* <p>
Only subnet masks from /64 up to /127 are allowed.
* <p>
Example: `2001:db8::1/64`
* 
    */
  "customerInterfaceIpv6"?: string;
  /**
   * The Oracle BGP ASN.
   *
   */
  "oracleBgpAsn"?: string;
  /**
    * If the tunnel's `routing` attribute is set to `BGP`
* (see {@link IPSecConnectionTunnel}), this ASN
* is required and used for the tunnel's BGP session. This is the ASN of the network on the
* CPE end of the BGP session. Can be a 2-byte or 4-byte ASN. Uses \"asplain\" format.
* <p>
If the tunnel uses static routing, the `customerBgpAsn` must be null.
* <p>
Example: `12345` (2-byte) or `1587232876` (4-byte)
* 
    */
  "customerBgpAsn"?: string;
  /**
   * The state of the BGP session.
   *
   */
  "bgpState"?: BgpSessionInfo.BgpState;
  /**
   * The state of the BGP IPv6 session.
   *
   */
  "bgpIpv6State"?: BgpSessionInfo.BgpIpv6State;
}

export namespace BgpSessionInfo {
  export enum BgpState {
    Up = "UP",
    Down = "DOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum BgpIpv6State {
    Up = "UP",
    Down = "DOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BgpSessionInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BgpSessionInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

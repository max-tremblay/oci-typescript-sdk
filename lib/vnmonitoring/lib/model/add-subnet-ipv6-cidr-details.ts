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
 * Details used when adding an IPv6 CIDR block to a subnet.
 */
export interface AddSubnetIpv6CidrDetails {
  /**
    * This field is not required and should only be specified when adding an IPv6 CIDR
* to a subnet's IPv6 address space.
* See[IPv6 Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/ipv6.htm).
* <p>
Example: `2001:0db8:0123::/64`
* 
    */
  "ipv6CidrBlock": string;
}

export namespace AddSubnetIpv6CidrDetails {
  export function getJsonObj(obj: AddSubnetIpv6CidrDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddSubnetIpv6CidrDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

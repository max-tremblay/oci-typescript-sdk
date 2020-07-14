/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * Contains properties for a VNIC. You use this object when creating the
 * primary VNIC during instance launch or when creating a secondary VNIC.
 * For more information about VNICs, see
 * [Virtual Network Interface Cards (VNICs)](https://docs.cloud.oracle.com/Content/Network/Tasks/managingVNICs.htm).
 *
 */
export interface CreateVnicDetails {
  /**
    * Whether the VNIC should be assigned a public IP address. Defaults to whether
* the subnet is public or private. If not set and the VNIC is being created
* in a private subnet (that is, where `prohibitPublicIpOnVnic` = true in the
* {@link Subnet}), then no public IP address is assigned.
* If not set and the subnet is public (`prohibitPublicIpOnVnic` = false), then
* a public IP address is assigned. If set to true and
* `prohibitPublicIpOnVnic` = true, an error is returned.
* <p>
**Note:** This public IP address is associated with the primary private IP
* on the VNIC. For more information, see
* [IP Addresses](https://docs.cloud.oracle.com/Content/Network/Tasks/managingIPaddresses.htm).
* <p>
**Note:** There's a limit to the number of {@link PublicIp}
* a VNIC or instance can have. If you try to create a secondary VNIC
* with an assigned public IP for an instance that has already
* reached its public IP limit, an error is returned. For information
* about the public IP limits, see
* [Public IP Addresses](https://docs.cloud.oracle.com/Content/Network/Tasks/managingpublicIPs.htm).
* <p>
Example: `false`
* <p>
If you specify a `vlanId`, the `assignPublicIp` is required to be set to false. See
* {@link Vlan}.
* 
    */
  "assignPublicIp"?: boolean;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name for the VNIC. Does not have to be unique.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * The hostname for the VNIC's primary private IP. Used for DNS. The value is the hostname
* portion of the primary private IP's fully qualified domain name (FQDN)
* (for example, `bminstance-1` in FQDN `bminstance-1.subnet123.vcn1.oraclevcn.com`).
* Must be unique across all VNICs in the subnet and comply with
* [RFC 952](https://tools.ietf.org/html/rfc952) and
* [RFC 1123](https://tools.ietf.org/html/rfc1123).
* The value appears in the {@link Vnic} object and also the
* {@link PrivateIp} object returned by
* {@link #listPrivateIps(ListPrivateIpsRequest) listPrivateIps} and
* {@link #getPrivateIp(GetPrivateIpRequest) getPrivateIp}.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm).
* <p>
When launching an instance, use this `hostnameLabel` instead
* of the deprecated `hostnameLabel` in
* {@link #launchInstanceDetails(LaunchInstanceDetailsRequest) launchInstanceDetails}.
* If you provide both, the values must match.
* <p>
Example: `bminstance-1`
* <p>
If you specify a `vlanId`, the `hostnameLabel` cannot be specified. vnics on a Vlan
* can not be assigned a hostname  See {@link Vlan}.
* 
    */
  "hostnameLabel"?: string;
  /**
    * A list of the OCIDs of the network security groups (NSGs) to add the VNIC to. For more
* information about NSGs, see
* {@link NetworkSecurityGroup}.
* <p>
If a `vlanId` is specified, the `nsgIds` cannot be specified. The `vlanId`
* indicates that the VNIC will belong to a VLAN instead of a subnet. With VLANs,
* all VNICs in the VLAN belong to the NSGs that are associated with the VLAN.
* See {@link Vlan}.
* 
    */
  "nsgIds"?: Array<string>;
  /**
    * A private IP address of your choice to assign to the VNIC. Must be an
* available IP address within the subnet's CIDR. If you don't specify a
* value, Oracle automatically assigns a private IP address from the subnet.
* This is the VNIC's *primary* private IP address. The value appears in
* the {@link Vnic} object and also the
* {@link PrivateIp} object returned by
* {@link #listPrivateIps(ListPrivateIpsRequest) listPrivateIps} and
* {@link #getPrivateIp(GetPrivateIpRequest) getPrivateIp}.
* <p>

* If you specify a `vlanId`, the `privateIp` cannot be specified.
* See {@link Vlan}.
* <p>
Example: `10.0.3.3`
* 
    */
  "privateIp"?: string;
  /**
    * Whether the source/destination check is disabled on the VNIC.
* Defaults to `false`, which means the check is performed. For information
* about why you would skip the source/destination check, see
* [Using a Private IP as a Route Target](https://docs.cloud.oracle.com/Content/Network/Tasks/managingroutetables.htm#privateip).
* <p>

* If you specify a `vlanId`, the `skipSourceDestCheck` cannot be specified because the
* source/destination check is always disabled for VNICs in a VLAN. See
* {@link Vlan}.
* <p>
Example: `true`
* 
    */
  "skipSourceDestCheck"?: boolean;
  /**
    * The OCID of the subnet to create the VNIC in. When launching an instance,
* use this `subnetId` instead of the deprecated `subnetId` in
* {@link #launchInstanceDetails(LaunchInstanceDetailsRequest) launchInstanceDetails}.
* At least one of them is required; if you provide both, the values must match.
* <p>
If you are an Oracle Cloud VMware Solution customer and creating a secondary
* VNIC in a VLAN instead of a subnet, provide a `vlanId` instead of a `subnetId`.
* If you provide both a `vlanId` and `subnetId`, the request fails.
* 
    */
  "subnetId"?: string;
  /**
    * Provide this attribute only if you are an Oracle Cloud VMware Solution
* customer and creating a secondary VNIC in a VLAN. The value is the OCID of the VLAN.
* See {@link Vlan}.
* <p>
Provide a `vlanId` instead of a `subnetId`. If you provide both a
* `vlanId` and `subnetId`, the request fails.
* 
    */
  "vlanId"?: string;
}

export namespace CreateVnicDetails {
  export function getJsonObj(obj: CreateVnicDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

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
 * DHCP option for specifying a search domain name for DNS queries. For more information, see
 * [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm).
 *
 */
export interface DhcpSearchDomainOption extends model.DhcpOption {
  /**
    * A single search domain name according to [RFC 952](https://tools.ietf.org/html/rfc952)
* and [RFC 1123](https://tools.ietf.org/html/rfc1123). During a DNS query,
* the OS will append this search domain name to the value being queried.
* <p>
If you set {@link DhcpDnsOption} to `VcnLocalPlusInternet`,
* and you assign a DNS label to the VCN during creation, the search domain name in the
* VCN's default set of DHCP options is automatically set to the VCN domain
* (for example, `vcn1.oraclevcn.com`).
* <p>
If you don't want to use a search domain name, omit this option from the
* set of DHCP options. Do not include this option with an empty list
* of search domain names, or with an empty string as the value for any search
* domain name.
* 
    */
  "searchDomainNames": Array<string>;

  "type": string;
}

export namespace DhcpSearchDomainOption {
  export function getJsonObj(obj: DhcpSearchDomainOption, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DhcpOption.getJsonObj(obj) as DhcpSearchDomainOption)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "SearchDomain";
  export function getDeserializedJsonObj(
    obj: DhcpSearchDomainOption,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DhcpOption.getDeserializedJsonObj(obj) as DhcpSearchDomainOption)),
      ...{}
    };

    return jsonObj;
  }
}

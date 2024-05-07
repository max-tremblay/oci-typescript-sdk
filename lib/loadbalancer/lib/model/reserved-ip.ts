/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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

export interface ReservedIP {
  /**
    * Ocid of the Reserved IP/Public Ip created with VCN.
* <p>
Reserved IPs are IPs which already registered using VCN API.
* <p>
Create a reserved Public IP and then while creating the load balancer pass the ocid of the reserved IP in this
* field reservedIp to attach the Ip to Load balancer. Load balancer will be configured to listen to traffic on this IP.
* <p>
Reserved IPs will not be deleted when the Load balancer is deleted. They will be unattached from the Load balancer.
* <p>
Example: \"ocid1.publicip.oc1.phx.unique_ID\"
* 
    */
  "id"?: string;
}

export namespace ReservedIP {
  export function getJsonObj(obj: ReservedIP): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReservedIP): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

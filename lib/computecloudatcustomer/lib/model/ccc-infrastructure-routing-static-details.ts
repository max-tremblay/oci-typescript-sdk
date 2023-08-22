/**
 * Compute Cloud@Customer API
 * Use the Compute Cloud@Customer API to manage Compute Cloud@Customer Infrastructure deployments
and scheduled upgrades. For more information see 
[Compute Cloud@Customer documentation](/iaas/Content/compute-cloud-at-customer/home.htm).

 * OpenAPI spec version: 20221208
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Static routing information for a rack.
 */
export interface CccInfrastructureRoutingStaticDetails {
  /**
   * The virtual local area network (VLAN) identifier used to connect to the uplink
   * (only access mode is supported).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "uplinkVlan"?: number;
  /**
   * The uplink Hot Standby Router Protocol (HSRP) group value for the switch in the
   * Compute Cloud@Customer infrastructure.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "uplinkHsrpGroup"?: number;
}

export namespace CccInfrastructureRoutingStaticDetails {
  export function getJsonObj(obj: CccInfrastructureRoutingStaticDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CccInfrastructureRoutingStaticDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

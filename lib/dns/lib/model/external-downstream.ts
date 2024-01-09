/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
 * External downstream nameserver for the zone.
 * This field is currently not supported when `zoneType` is `SECONDARY` or `scope` is `PRIVATE`.
 *
 */
export interface ExternalDownstream {
  /**
   * The server's IP address (IPv4 or IPv6).
   */
  "address": string;
  /**
   * The server's port. Port value must be a value of 53, otherwise omit
   * the port value.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The OCID of the TSIG key.
   * A TSIG key is used to secure DNS messages (in this case, zone transfers) between two systems that both have the (shared) secret.
   *
   */
  "tsigKeyId"?: string;
}

export namespace ExternalDownstream {
  export function getJsonObj(obj: ExternalDownstream): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalDownstream): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

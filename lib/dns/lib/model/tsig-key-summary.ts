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
 * A TSIG key.
 */
export interface TsigKeySummary {
  /**
   * TSIG key algorithms are encoded as domain names, but most consist of only one
   * non-empty label, which is not required to be explicitly absolute.
   * Applicable algorithms include: hmac-sha1, hmac-sha224, hmac-sha256,
   * hmac-sha512. For more information on these algorithms, see [RFC 4635](https://tools.ietf.org/html/rfc4635#section-2).
   *
   */
  "algorithm": string;
  /**
   * A globally unique domain name identifying the key for a given pair of hosts.
   */
  "name": string;
  /**
   * The OCID of the compartment containing the TSIG key.
   */
  "compartmentId": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>

* **Example:** `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>

* **Example:** `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * The OCID of the resource.
   */
  "id": string;
  /**
   * The canonical absolute URL of the resource.
   */
  "self": string;
  /**
   * The date and time the resource was created, expressed in RFC 3339 timestamp format.
   * <p>
   **Example:** `2016-07-22T17:23:59:60Z`
   *
   */
  "timeCreated": Date;
  /**
   * The current state of the resource.
   */
  "lifecycleState": TsigKeySummary.LifecycleState;
}

export namespace TsigKeySummary {
  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Failed = "FAILED",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TsigKeySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TsigKeySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

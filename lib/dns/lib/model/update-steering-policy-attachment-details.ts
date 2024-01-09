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
* The body for updating a steering policy attachment.
* <p>

* **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface UpdateSteeringPolicyAttachmentDetails {
  /**
   * A user-friendly name for the steering policy attachment.
   * Does not have to be unique and can be changed.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
}

export namespace UpdateSteeringPolicyAttachmentDetails {
  export function getJsonObj(obj: UpdateSteeringPolicyAttachmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSteeringPolicyAttachmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

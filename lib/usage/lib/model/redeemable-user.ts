/**
 * UsageApi API
 * A description of the UsageApi API.
 * OpenAPI spec version: 20190111
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The Email object for redeemable user.
 */
export interface RedeemableUser {
  /**
   * The Email Id for redeemable user.
   */
  "emailId": string;
}

export namespace RedeemableUser {
  export function getJsonObj(obj: RedeemableUser): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RedeemableUser): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

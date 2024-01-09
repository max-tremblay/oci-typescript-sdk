/**
 * OneSubscription APIs
 * OneSubscription APIs

 * OpenAPI spec version: 20190111
 * Contact: kuaskum_org_ww@oracle.com
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
 * User.
 *
 */
export interface SubscribedServiceUser {
  /**
   * Name.
   *
   */
  "name"?: string;
  /**
   * Username.
   *
   */
  "username"?: string;
  /**
   * First name.
   *
   */
  "firstName"?: string;
  /**
   * Last name.
   *
   */
  "lastName"?: string;
  /**
   * Email.
   *
   */
  "email"?: string;
  /**
   * TCA contact ID.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "tcaContactId"?: number;
  /**
   * TCA customer account site ID.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "tcaCustAccntSiteId"?: number;
  /**
   * TCA party ID.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "tcaPartyId"?: number;
}

export namespace SubscribedServiceUser {
  export function getJsonObj(obj: SubscribedServiceUser): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SubscribedServiceUser): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

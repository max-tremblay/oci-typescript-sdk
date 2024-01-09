/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
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
 * The details of the request to change the compartment of the announcement subscription.
 */
export interface ChangeAnnouncementSubscriptionCompartmentDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment
   * into which you want to move the announcement subscription.
   *
   */
  "compartmentId": string;
}

export namespace ChangeAnnouncementSubscriptionCompartmentDetails {
  export function getJsonObj(obj: ChangeAnnouncementSubscriptionCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: ChangeAnnouncementSubscriptionCompartmentDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

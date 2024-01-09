/**
 * OSP Gateway API
 * This site describes all the Rest endpoints of OSP Gateway.
 * OpenAPI spec version: 20191001
 * Contact: osp_team_oci_cam_ww_grp@oracle.com
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
 * Address details model.
 */
export interface Address {
  /**
   * Address identifier.
   */
  "addressKey"?: string;
  /**
   * Address line 1.
   */
  "line1"?: string;
  /**
   * Address line 2.
   */
  "line2"?: string;
  /**
   * Address line 3.
   */
  "line3"?: string;
  /**
   * Address line 4.
   */
  "line4"?: string;
  /**
   * Street name of the address.
   */
  "streetName"?: string;
  /**
   * Street number of the address.
   */
  "streetNumber"?: string;
  /**
   * Name of the city.
   */
  "city"?: string;
  /**
   * County of the address.
   */
  "county"?: string;
  /**
   * Country of the address.
   */
  "country"?: string;
  /**
   * Province of the address.
   */
  "province"?: string;
  /**
   * Post code of the address.
   */
  "postalCode"?: string;
  /**
   * State of the address.
   */
  "state"?: string;
  /**
   * Contact person email address.
   */
  "emailAddress"?: string;
  /**
   * Name of the customer company.
   */
  "companyName"?: string;
  /**
   * First name of the contact person.
   */
  "firstName"?: string;
  /**
   * Middle name of the contact person.
   */
  "middleName"?: string;
  /**
   * Last name of the contact person.
   */
  "lastName"?: string;
  /**
   * Phone country code of the contact person.
   */
  "phoneCountryCode"?: string;
  /**
   * Phone number of the contact person.
   */
  "phoneNumber"?: string;
  /**
   * Job title of the contact person.
   */
  "jobTitle"?: string;
  /**
   * Department name of the customer company.
   */
  "departmentName"?: string;
  /**
   * Internal number of the customer company.
   */
  "internalNumber"?: string;
  /**
   * Contributor class of the customer company.
   */
  "contributorClass"?: string;
  /**
   * State Inscription.
   */
  "stateInscription"?: string;
  /**
   * Municipal Inscription.
   */
  "municipalInscription"?: string;
}

export namespace Address {
  export function getJsonObj(obj: Address): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Address): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

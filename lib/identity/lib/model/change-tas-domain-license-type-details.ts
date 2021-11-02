/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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
 * Update domain license type
 */
export interface ChangeTasDomainLicenseTypeDetails {
  /**
   * The License type of Domain
   */
  "licenseType"?: string;
}

export namespace ChangeTasDomainLicenseTypeDetails {
  export function getJsonObj(obj: ChangeTasDomainLicenseTypeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChangeTasDomainLicenseTypeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

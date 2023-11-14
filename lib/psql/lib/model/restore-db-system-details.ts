/**
 * PGSQL Control Plane API
 * A description of the PGSQL Control Plane API
 * OpenAPI spec version: 20220915
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
 * Backup details to restore the DB system.
 */
export interface RestoreDbSystemDetails {
  /**
   * DbSystem backup identifier.
   */
  "backupId": string;
  /**
   * The desired AD for 3AD regions. Optional parameter.
   * If not set the AD will be chosen based on the current DB System's AD.
   *
   */
  "ad"?: string;
}

export namespace RestoreDbSystemDetails {
  export function getJsonObj(obj: RestoreDbSystemDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RestoreDbSystemDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

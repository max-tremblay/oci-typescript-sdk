/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * Details of the updated migration asset.
 */
export interface UpdateMigrationAssetDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Replication schedule identifier
   */
  "replicationScheduleId"?: string;
  /**
   * List of migration assets that depends on this asset.
   */
  "dependsOn"?: Array<string>;
}

export namespace UpdateMigrationAssetDetails {
  export function getJsonObj(obj: UpdateMigrationAssetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMigrationAssetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Control Plane API
 * OpenAPI spec version: 20191010
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
 * Patch Details
 */
export interface BlockchainPlatformPatchSummary {
  /**
   * patch id
   */
  "id"?: string;
  /**
   * patch service version
   */
  "serviceVersion"?: string;
  /**
   * A URL for the patch specific documentation
   */
  "patchInfoUrl"?: string;
  /**
   * patch due date for customer initiated patching
   */
  "timePatchDue"?: Date;
}

export namespace BlockchainPlatformPatchSummary {
  export function getJsonObj(obj: BlockchainPlatformPatchSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BlockchainPlatformPatchSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

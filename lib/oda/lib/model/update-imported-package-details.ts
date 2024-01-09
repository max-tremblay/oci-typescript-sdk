/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Payload for updating an imported package
 */
export interface UpdateImportedPackageDetails {
  /**
   * ID of the new package (i.e. version) to import, replacing the old imported package. Leave null if no new package resources are required. The name of the new package must must match the name of the already-imported package.
   */
  "currentPackageId": string;
  /**
   * A list of the updated parameter values to apply to this imported package.
   */
  "parameterValues": { [key: string]: string };
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateImportedPackageDetails {
  export function getJsonObj(obj: UpdateImportedPackageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateImportedPackageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Summary of the Google Cloud Storage Connection.
 *
 */
export interface GoogleCloudStorageConnectionSummary extends model.ConnectionSummary {
  /**
   * The Google Cloud Storage technology type.
   */
  "technologyType": string;

  "connectionType": string;
}

export namespace GoogleCloudStorageConnectionSummary {
  export function getJsonObj(
    obj: GoogleCloudStorageConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getJsonObj(obj) as GoogleCloudStorageConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "GOOGLE_CLOUD_STORAGE";
  export function getDeserializedJsonObj(
    obj: GoogleCloudStorageConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getDeserializedJsonObj(
            obj
          ) as GoogleCloudStorageConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
}

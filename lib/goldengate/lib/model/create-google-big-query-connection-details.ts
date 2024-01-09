/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information about a new Google BigQuery Connection.
 *
 */
export interface CreateGoogleBigQueryConnectionDetails extends model.CreateConnectionDetails {
  /**
   * The Google BigQuery technology type.
   */
  "technologyType": string;
  /**
   * The base64 encoded content of the service account key file containing
   * the credentials required to use Google BigQuery.
   *
   */
  "serviceAccountKeyFile": string;

  "connectionType": string;
}

export namespace CreateGoogleBigQueryConnectionDetails {
  export function getJsonObj(
    obj: CreateGoogleBigQueryConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getJsonObj(obj) as CreateGoogleBigQueryConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "GOOGLE_BIGQUERY";
  export function getDeserializedJsonObj(
    obj: CreateGoogleBigQueryConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateGoogleBigQueryConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}

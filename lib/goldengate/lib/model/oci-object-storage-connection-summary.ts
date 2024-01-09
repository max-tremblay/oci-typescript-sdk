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
 * Summary of the OCI Object Storage Connection.
 *
 */
export interface OciObjectStorageConnectionSummary extends model.ConnectionSummary {
  /**
   * The OCI Object Storage technology type.
   */
  "technologyType": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the related OCI tenancy.
   *
   */
  "tenancyId"?: string;
  /**
   * The name of the region. e.g.: us-ashburn-1
   *
   */
  "region"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the OCI user who will access the Object Storage.
   * The user must have write access to the bucket they want to connect to.
   *
   */
  "userId": string;

  "connectionType": string;
}

export namespace OciObjectStorageConnectionSummary {
  export function getJsonObj(
    obj: OciObjectStorageConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getJsonObj(obj) as OciObjectStorageConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "OCI_OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: OciObjectStorageConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getDeserializedJsonObj(
            obj
          ) as OciObjectStorageConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
}

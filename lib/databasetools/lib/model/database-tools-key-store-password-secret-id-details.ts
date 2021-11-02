/**
 * Database Tools
 * Database Tools APIs to manage Connections and Private Endpoints.
 * OpenAPI spec version: 20201005
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
 * The key store password.
 */
export interface DatabaseToolsKeyStorePasswordSecretIdDetails
  extends model.DatabaseToolsKeyStorePasswordDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the secret containing the key store password.
   */
  "secretId"?: string;

  "valueType": string;
}

export namespace DatabaseToolsKeyStorePasswordSecretIdDetails {
  export function getJsonObj(
    obj: DatabaseToolsKeyStorePasswordSecretIdDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsKeyStorePasswordDetails.getJsonObj(
            obj
          ) as DatabaseToolsKeyStorePasswordSecretIdDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const valueType = "SECRETID";
  export function getDeserializedJsonObj(
    obj: DatabaseToolsKeyStorePasswordSecretIdDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsKeyStorePasswordDetails.getDeserializedJsonObj(
            obj
          ) as DatabaseToolsKeyStorePasswordSecretIdDetails)),
      ...{}
    };

    return jsonObj;
  }
}

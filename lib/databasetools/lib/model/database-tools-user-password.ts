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
 * The user password.
 */
export interface DatabaseToolsUserPassword {
  "valueType": string;
}

export namespace DatabaseToolsUserPassword {
  export function getJsonObj(obj: DatabaseToolsUserPassword): object {
    const jsonObj = { ...obj, ...{} };

    if ("valueType" in obj && obj.valueType) {
      switch (obj.valueType) {
        case "SECRETID":
          return model.DatabaseToolsUserPasswordSecretId.getJsonObj(
            <model.DatabaseToolsUserPasswordSecretId>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.valueType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsUserPassword): object {
    const jsonObj = { ...obj, ...{} };

    if ("valueType" in obj && obj.valueType) {
      switch (obj.valueType) {
        case "SECRETID":
          return model.DatabaseToolsUserPasswordSecretId.getDeserializedJsonObj(
            <model.DatabaseToolsUserPasswordSecretId>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.valueType);
      }
    }
    return jsonObj;
  }
}

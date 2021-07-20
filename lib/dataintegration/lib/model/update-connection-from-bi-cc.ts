/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The details to update an Oracle Database data asset connection.
 */
export interface UpdateConnectionFromBICC extends model.UpdateConnectionDetails {
  /**
   * The user name for the connection.
   */
  "username"?: string;
  "passwordSecret"?: model.SensitiveAttribute;
  "defaultExternalStorage"?: model.ExternalStorage;

  "modelType": string;
}

export namespace UpdateConnectionFromBICC {
  export function getJsonObj(obj: UpdateConnectionFromBICC, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(obj) as UpdateConnectionFromBICC)),
      ...{
        "passwordSecret": obj.passwordSecret
          ? model.SensitiveAttribute.getJsonObj(obj.passwordSecret)
          : undefined,
        "defaultExternalStorage": obj.defaultExternalStorage
          ? model.ExternalStorage.getJsonObj(obj.defaultExternalStorage)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "BICC_CONNECTION";
  export function getDeserializedJsonObj(
    obj: UpdateConnectionFromBICC,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(obj) as UpdateConnectionFromBICC)),
      ...{
        "passwordSecret": obj.passwordSecret
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.passwordSecret)
          : undefined,
        "defaultExternalStorage": obj.defaultExternalStorage
          ? model.ExternalStorage.getDeserializedJsonObj(obj.defaultExternalStorage)
          : undefined
      }
    };

    return jsonObj;
  }
}

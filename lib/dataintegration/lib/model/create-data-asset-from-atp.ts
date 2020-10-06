/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details for the Autonomous Transaction Processing data asset type.
 */
export interface CreateDataAssetFromAtp extends model.CreateDataAssetDetails {
  /**
   * The Autonomous Transaction Processing instance service name.
   */
  "serviceName"?: string;
  /**
   * The Autonomous Transaction Processing driver class.
   */
  "driverClass"?: string;
  /**
   * The credential file content from an Autonomous Transaction Processing wallet.
   */
  "credentialFileContent"?: string;
  "defaultConnection"?: model.CreateConnectionFromAtp;

  "modelType": string;
}

export namespace CreateDataAssetFromAtp {
  export function getJsonObj(obj: CreateDataAssetFromAtp, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataAssetDetails.getJsonObj(obj) as CreateDataAssetFromAtp)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.CreateConnectionFromAtp.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_ATP_DATA_ASSET";
}

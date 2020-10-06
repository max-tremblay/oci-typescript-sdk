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
 * Details for the MYSQL data asset type.
 */
export interface CreateDataAssetFromMySQL extends model.CreateDataAssetDetails {
  /**
   * The generic JDBC host name.
   */
  "host"?: string;
  /**
   * The generic JDBC port number.
   */
  "port"?: string;
  /**
   * The generic JDBC service name for the database.
   */
  "serviceName"?: string;
  "defaultConnection"?: model.CreateConnectionFromMySQL;

  "modelType": string;
}

export namespace CreateDataAssetFromMySQL {
  export function getJsonObj(obj: CreateDataAssetFromMySQL, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataAssetDetails.getJsonObj(obj) as CreateDataAssetFromMySQL)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.CreateConnectionFromMySQL.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "MYSQL_DATA_ASSET";
}

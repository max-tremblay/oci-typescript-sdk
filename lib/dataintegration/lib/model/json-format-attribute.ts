/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The JSON file format attribute.
 */
export interface JsonFormatAttribute extends model.AbstractFormatAttribute {
  /**
   * The encoding for the file.
   */
  "encoding"?: string;
  /**
   * Sample JSON with all fields of JSON schema specified in it for the JSON data files used in Data Flow, Data Loader or Data Preview and should be specified in Base64 encoded format. Maximum size is 2 MB.
   */
  "sampleEntityData"?: string;

  "modelType": string;
}

export namespace JsonFormatAttribute {
  export function getJsonObj(obj: JsonFormatAttribute, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractFormatAttribute.getJsonObj(obj) as JsonFormatAttribute)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "JSON_FORMAT";
  export function getDeserializedJsonObj(
    obj: JsonFormatAttribute,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractFormatAttribute.getDeserializedJsonObj(obj) as JsonFormatAttribute)),
      ...{}
    };

    return jsonObj;
  }
}

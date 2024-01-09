/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * A column of a table.
 */
export interface Column {
  /**
   * The column name.
   */
  "name"?: string;
  /**
   * The column type.
   */
  "type"?: string;
  /**
   * The column nullable flag.
   */
  "isNullable"?: boolean;
  /**
   * The column default value.
   */
  "defaultValue"?: string;
  /**
   * True if the STRING column was declared AS UUID.
   */
  "isAsUuid"?: boolean;
  /**
   * True if the STRING AS UUID column is also GENERATED BY DEFAULT.
   *
   */
  "isGenerated"?: boolean;
}

export namespace Column {
  export function getJsonObj(obj: Column): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Column): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

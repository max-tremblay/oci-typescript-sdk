/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about the join operator. The join operator links data from multiple inbound sources.
 */
export interface Join extends model.PushDownOperation {
  /**
   * The join condition.
   */
  "condition": string;
  /**
   * The type of join.
   */
  "policy": Join.Policy;

  "modelType": string;
}

export namespace Join {
  export enum Policy {
    InnerJoin = "INNER_JOIN",
    LeftJoin = "LEFT_JOIN",
    RightJoin = "RIGHT_JOIN",
    FullJoin = "FULL_JOIN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Join, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.PushDownOperation.getJsonObj(obj) as Join)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "JOIN";
  export function getDeserializedJsonObj(obj: Join, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.PushDownOperation.getDeserializedJsonObj(obj) as Join)),
      ...{}
    };

    return jsonObj;
  }
}

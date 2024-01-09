/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
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
 * The time field value.
 */
export interface ValueTime extends model.FieldValue {
  /**
   * The time field value as yyyy-mm-dd hh-mm-ss.
   */
  "value": Date;

  "valueType": string;
}

export namespace ValueTime {
  export function getJsonObj(obj: ValueTime, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FieldValue.getJsonObj(obj) as ValueTime)),
      ...{}
    };

    return jsonObj;
  }
  export const valueType = "TIME";
  export function getDeserializedJsonObj(obj: ValueTime, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FieldValue.getDeserializedJsonObj(obj) as ValueTime)),
      ...{}
    };

    return jsonObj;
  }
}

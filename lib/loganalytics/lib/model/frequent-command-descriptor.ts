/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Command descriptor for querylanguage FREQUENT command.
 *
 */
export interface FrequentCommandDescriptor extends model.AbstractCommandDescriptor {
  "name": string;
}

export namespace FrequentCommandDescriptor {
  export function getJsonObj(obj: FrequentCommandDescriptor, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getJsonObj(obj) as FrequentCommandDescriptor)),
      ...{}
    };

    return jsonObj;
  }
  export const name = "FREQUENT";
  export function getDeserializedJsonObj(
    obj: FrequentCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getDeserializedJsonObj(
            obj
          ) as FrequentCommandDescriptor)),
      ...{}
    };

    return jsonObj;
  }
}

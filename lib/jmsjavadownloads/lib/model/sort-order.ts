/**
 * Java Management Service Download API
 * The APIs for the <a href="https://docs.oracle.com/en-us/iaas/jms/doc/java-download.html">Java Download</a> feature of Java Management Service.
 * OpenAPI spec version: 20230601
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
 * Sort orders.
 **/
export enum SortOrder {
  Asc = "ASC",
  Desc = "DESC",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace SortOrder {
  export function getJsonObj(obj: SortOrder): SortOrder {
    return obj;
  }
  export function getDeserializedJsonObj(obj: SortOrder): SortOrder {
    return obj;
  }
}

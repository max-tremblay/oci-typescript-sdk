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
 * LookupField
 */
export interface LookupField {
  /**
   * The common field name.
   */
  "commonFieldName"?: string;
  /**
   * The default match value.
   */
  "defaultMatchValue"?: string;
  /**
   * The field display name.
   */
  "displayName"?: string;
  /**
   * A flag indicating whether or not the lookup field is a common field.
   *
   */
  "isCommonField"?: boolean;
  /**
   * The match operator.
   */
  "matchOperator"?: string;
  /**
   * The field name.
   */
  "name"?: string;
  /**
   * THe field position. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "position"?: number;
}

export namespace LookupField {
  export function getJsonObj(obj: LookupField): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LookupField): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

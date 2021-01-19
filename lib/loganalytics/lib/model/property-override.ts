/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
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
 * Property overrides at the scope of objects.
 * For example, if you want to use logSourceName as 'xyz' for all objects that conatins string 'abc/' then
 * define matchType as 'contains', matchValue as 'abc/', propertyName as 'logSourceName' and propertyValue as 'xyz'.
 *
 */
export interface PropertyOverride {
  /**
   * Match Type. Accepted values are: contains.
   *
   */
  "matchType"?: string;
  /**
   * Match Value.
   */
  "matchValue"?: string;
  /**
   * Property to override. Accepted values are: logSourceName, charEncoding.
   *
   */
  "propertyName"?: string;
  /**
   * Value of the property.
   */
  "propertyValue"?: string;
}

export namespace PropertyOverride {
  export function getJsonObj(obj: PropertyOverride): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

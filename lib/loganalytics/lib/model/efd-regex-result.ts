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
 * EfdRegexResult
 */
export interface EfdRegexResult {
  /**
   * The base field name.
   */
  "baseFieldName"?: string;
  /**
   * the unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "id"?: number;
  "matchResult"?: model.RegexMatchResult;
  /**
   * The parsed field count. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parsedFieldCount"?: number;
  /**
   * The parsed fields.
   */
  "parsedFields"?: { [key: string]: string };
  /**
   * The regular expression.
   */
  "regex"?: string;
  /**
   * The status.
   */
  "status"?: string;
  /**
   * The Status description.
   */
  "statusDescription"?: string;
  /**
   * A flag indicating whether or not the regular expression is valid.
   *
   */
  "isValidRegexSyntax"?: boolean;
  /**
   * The list of violations (if any).
   */
  "violations"?: Array<model.Violation>;
}

export namespace EfdRegexResult {
  export function getJsonObj(obj: EfdRegexResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "matchResult": obj.matchResult
          ? model.RegexMatchResult.getJsonObj(obj.matchResult)
          : undefined,

        "violations": obj.violations
          ? obj.violations.map(item => {
              return model.Violation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EfdRegexResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "matchResult": obj.matchResult
          ? model.RegexMatchResult.getDeserializedJsonObj(obj.matchResult)
          : undefined,

        "violations": obj.violations
          ? obj.violations.map(item => {
              return model.Violation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

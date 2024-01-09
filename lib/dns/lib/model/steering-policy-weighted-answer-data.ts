/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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

export interface SteeringPolicyWeightedAnswerData {
  /**
   * An expression that is used to select a set of answers that match a condition. For example, answers with matching pool properties.
   *
   */
  "answerCondition"?: string;
  /**
   * The weight assigned to the set of selected answers. Answers with a higher weight will be served
   * more frequently. Answers can be given a value between `0` and `255`.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "value": number;
}

export namespace SteeringPolicyWeightedAnswerData {
  export function getJsonObj(obj: SteeringPolicyWeightedAnswerData): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SteeringPolicyWeightedAnswerData): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

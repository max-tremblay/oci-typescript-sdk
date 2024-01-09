/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * Model level text classification metrics
 */
export interface TextClassificationModelMetrics {
  /**
   * The fraction of the labels that were correctly recognised . Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "accuracy": number;
  /**
   * F1-score, is a measure of a model\u2019s accuracy on a dataset Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "microF1": number;
  /**
   * Precision refers to the number of true positives divided by the total number of positive predictions (i.e., the number of true positives plus the number of false positives) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "microPrecision": number;
  /**
   * Measures the model's ability to predict actual positive classes. It is the ratio between the predicted true positives and what was actually tagged. The recall metric reveals how many of the predicted classes are correct. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "microRecall": number;
  /**
   * F1-score, is a measure of a model\u2019s accuracy on a dataset Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "macroF1": number;
  /**
   * Precision refers to the number of true positives divided by the total number of positive predictions (i.e., the number of true positives plus the number of false positives) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "macroPrecision": number;
  /**
   * Measures the model's ability to predict actual positive classes. It is the ratio between the predicted true positives and what was actually tagged. The recall metric reveals how many of the predicted classes are correct. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "macroRecall": number;
  /**
   * F1-score, is a measure of a model\u2019s accuracy on a dataset Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "weightedF1"?: number;
  /**
   * Precision refers to the number of true positives divided by the total number of positive predictions (i.e., the number of true positives plus the number of false positives) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "weightedPrecision"?: number;
  /**
   * Measures the model's ability to predict actual positive classes. It is the ratio between the predicted true positives and what was actually tagged. The recall metric reveals how many of the predicted classes are correct. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "weightedRecall"?: number;
}

export namespace TextClassificationModelMetrics {
  export function getJsonObj(obj: TextClassificationModelMetrics): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TextClassificationModelMetrics): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

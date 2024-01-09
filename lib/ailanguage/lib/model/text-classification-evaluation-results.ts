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
 * Text Classification model testing and evaluation results
 */
export interface TextClassificationEvaluationResults extends model.EvaluationResults {
  "metrics"?: model.TextClassificationModelMetrics;
  /**
   * List of text classification metrics
   */
  "classMetrics"?: Array<model.ClassMetrics>;
  /**
   * class level confusion matrix
   */
  "confusionMatrix"?: { [key: string]: model.ConfusionMatrixDetails };
  /**
   * labels
   */
  "labels"?: Array<string>;

  "modelType": string;
}

export namespace TextClassificationEvaluationResults {
  export function getJsonObj(
    obj: TextClassificationEvaluationResults,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.EvaluationResults.getJsonObj(obj) as TextClassificationEvaluationResults)),
      ...{
        "metrics": obj.metrics
          ? model.TextClassificationModelMetrics.getJsonObj(obj.metrics)
          : undefined,
        "classMetrics": obj.classMetrics
          ? obj.classMetrics.map(item => {
              return model.ClassMetrics.getJsonObj(item);
            })
          : undefined,
        "confusionMatrix": obj.confusionMatrix
          ? common.mapContainer(obj.confusionMatrix, model.ConfusionMatrixDetails.getJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "TEXT_CLASSIFICATION";
  export function getDeserializedJsonObj(
    obj: TextClassificationEvaluationResults,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.EvaluationResults.getDeserializedJsonObj(
            obj
          ) as TextClassificationEvaluationResults)),
      ...{
        "metrics": obj.metrics
          ? model.TextClassificationModelMetrics.getDeserializedJsonObj(obj.metrics)
          : undefined,
        "classMetrics": obj.classMetrics
          ? obj.classMetrics.map(item => {
              return model.ClassMetrics.getDeserializedJsonObj(item);
            })
          : undefined,
        "confusionMatrix": obj.confusionMatrix
          ? common.mapContainer(
              obj.confusionMatrix,
              model.ConfusionMatrixDetails.getDeserializedJsonObj
            )
          : undefined
      }
    };

    return jsonObj;
  }
}

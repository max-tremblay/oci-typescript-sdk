/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Base type for how fields are projected. There are many different mechanisms for doing this such as by a name pattern, datatype and so on. See the `modelType` property for the types.
 */
export interface ProjectionRule {
  /**
   * The key of the object.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Specifies whether the rule uses a java regex syntax.
   */
  "isJavaRegexSyntax"?: boolean;
  "configValues"?: model.ConfigValues;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * A user defined description for the object.
   */
  "description"?: string;

  "modelType": string;
}

export namespace ProjectionRule {
  export function getJsonObj(obj: ProjectionRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "configValues": obj.configValues
          ? model.ConfigValues.getJsonObj(obj.configValues)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "RENAME_RULE":
          return model.RenameRule.getJsonObj(<model.RenameRule>(<object>jsonObj), true);
        case "TYPE_LIST_RULE":
          return model.TypeListRule.getJsonObj(<model.TypeListRule>(<object>jsonObj), true);
        case "TYPED_NAME_PATTERN_RULE":
          return model.TypedNamePatternRule.getJsonObj(
            <model.TypedNamePatternRule>(<object>jsonObj),
            true
          );
        case "NAME_PATTERN_RULE":
          return model.NamePatternRule.getJsonObj(<model.NamePatternRule>(<object>jsonObj), true);
        case "GROUPED_NAME_PATTERN_RULE":
          return model.GroupedNamePatternRule.getJsonObj(
            <model.GroupedNamePatternRule>(<object>jsonObj),
            true
          );
        case "NAME_LIST_RULE":
          return model.NameListRule.getJsonObj(<model.NameListRule>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProjectionRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "configValues": obj.configValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.configValues)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "RENAME_RULE":
          return model.RenameRule.getDeserializedJsonObj(<model.RenameRule>(<object>jsonObj), true);
        case "TYPE_LIST_RULE":
          return model.TypeListRule.getDeserializedJsonObj(
            <model.TypeListRule>(<object>jsonObj),
            true
          );
        case "TYPED_NAME_PATTERN_RULE":
          return model.TypedNamePatternRule.getDeserializedJsonObj(
            <model.TypedNamePatternRule>(<object>jsonObj),
            true
          );
        case "NAME_PATTERN_RULE":
          return model.NamePatternRule.getDeserializedJsonObj(
            <model.NamePatternRule>(<object>jsonObj),
            true
          );
        case "GROUPED_NAME_PATTERN_RULE":
          return model.GroupedNamePatternRule.getDeserializedJsonObj(
            <model.GroupedNamePatternRule>(<object>jsonObj),
            true
          );
        case "NAME_LIST_RULE":
          return model.NameListRule.getDeserializedJsonObj(
            <model.NameListRule>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}

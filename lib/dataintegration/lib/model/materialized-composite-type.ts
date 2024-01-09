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
 * A `MaterializedCompositeType` represents a type that is composed of a list of sub-types, for example an `Address` type.   The sub-types can be simple `DataType` or other `CompositeType` objects. Typically, a `CompositeType` may represent an arbitrarily deep hierarchy of types.
 */
export interface MaterializedCompositeType extends model.BaseType {
  /**
   * An array of elements.
   */
  "elements"?: Array<string>;
  /**
   * An array of path names corresponding to the elements.  The path names are used when referring to the field in an expression.
   */
  "pathNames"?: Array<string>;
  "configDefinition"?: model.ConfigDefinition;

  "modelType": string;
}

export namespace MaterializedCompositeType {
  export function getJsonObj(obj: MaterializedCompositeType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getJsonObj(obj) as MaterializedCompositeType)),
      ...{
        "configDefinition": obj.configDefinition
          ? model.ConfigDefinition.getJsonObj(obj.configDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "MATERIALIZED_COMPOSITE_TYPE";
  export function getDeserializedJsonObj(
    obj: MaterializedCompositeType,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BaseType.getDeserializedJsonObj(obj) as MaterializedCompositeType)),
      ...{
        "configDefinition": obj.configDefinition
          ? model.ConfigDefinition.getDeserializedJsonObj(obj.configDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
}

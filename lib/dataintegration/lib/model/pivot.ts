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
 * Pivot operator has one input and one output. Pivot operator takes group by columns, a pivot key with values and aggregations. Output is the pivoted table.
 */
export interface Pivot extends model.Operator {
  "groupByColumns"?: model.DynamicProxyField;
  "materializedGroupByColumns"?: model.MaterializedDynamicField;
  "pivotKeys"?: model.PivotKeys;

  "modelType": string;
}

export namespace Pivot {
  export function getJsonObj(obj: Pivot, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getJsonObj(obj) as Pivot)),
      ...{
        "groupByColumns": obj.groupByColumns
          ? model.DynamicProxyField.getJsonObj(obj.groupByColumns)
          : undefined,
        "materializedGroupByColumns": obj.materializedGroupByColumns
          ? model.MaterializedDynamicField.getJsonObj(obj.materializedGroupByColumns)
          : undefined,
        "pivotKeys": obj.pivotKeys ? model.PivotKeys.getJsonObj(obj.pivotKeys) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "PIVOT_OPERATOR";
  export function getDeserializedJsonObj(obj: Pivot, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getDeserializedJsonObj(obj) as Pivot)),
      ...{
        "groupByColumns": obj.groupByColumns
          ? model.DynamicProxyField.getDeserializedJsonObj(obj.groupByColumns)
          : undefined,
        "materializedGroupByColumns": obj.materializedGroupByColumns
          ? model.MaterializedDynamicField.getDeserializedJsonObj(obj.materializedGroupByColumns)
          : undefined,
        "pivotKeys": obj.pivotKeys
          ? model.PivotKeys.getDeserializedJsonObj(obj.pivotKeys)
          : undefined
      }
    };

    return jsonObj;
  }
}

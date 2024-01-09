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
 * A wrapper for a typed object.
 */
export interface TypedObjectWrapper {
  "typedObject"?:
    | model.OutputPort
    | model.DynamicInputField
    | model.AbstractField
    | model.InputField
    | model.Shape
    | model.InputPort
    | model.ConditionalOutputPort
    | model.DecisionOutputPort
    | model.MaterializedDynamicField
    | model.ProxyField
    | model.DynamicProxyField
    | model.ShapeField
    | model.InputProxyField
    | model.Parameter
    | model.PivotField
    | model.OutputField
    | model.MacroField
    | model.DerivedField
    | model.TypedExpression
    | model.FlowPort;
}

export namespace TypedObjectWrapper {
  export function getJsonObj(obj: TypedObjectWrapper): object {
    const jsonObj = {
      ...obj,
      ...{
        "typedObject": obj.typedObject ? model.TypedObject.getJsonObj(obj.typedObject) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TypedObjectWrapper): object {
    const jsonObj = {
      ...obj,
      ...{
        "typedObject": obj.typedObject
          ? model.TypedObject.getDeserializedJsonObj(obj.typedObject)
          : undefined
      }
    };

    return jsonObj;
  }
}

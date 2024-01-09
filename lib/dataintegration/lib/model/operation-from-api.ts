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
 * The API operation object.
 */
export interface OperationFromApi extends model.Operation {
  /**
   * The operation key, used to identiying this metadata object within the dataflow.
   */
  "key"?: string;
  /**
   * The model version of the object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  "shape"?: model.Shape;
  /**
   * The operation name. This value is unique.
   */
  "name": string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The external key for the object.
   */
  "externalKey"?: string;
  /**
   * The resource name.
   */
  "resourceName": string;
  /**
   * The status of an object that can be set to value 1 for shallow reference across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  "operationAttributes"?: model.GenericRestApiAttributes;

  "modelType": string;
}

export namespace OperationFromApi {
  export function getJsonObj(obj: OperationFromApi, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operation.getJsonObj(obj) as OperationFromApi)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "shape": obj.shape ? model.Shape.getJsonObj(obj.shape) : undefined,

        "operationAttributes": obj.operationAttributes
          ? model.GenericRestApiAttributes.getJsonObj(obj.operationAttributes)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "API";
  export function getDeserializedJsonObj(obj: OperationFromApi, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Operation.getDeserializedJsonObj(obj) as OperationFromApi)),
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,
        "shape": obj.shape ? model.Shape.getDeserializedJsonObj(obj.shape) : undefined,

        "operationAttributes": obj.operationAttributes
          ? model.GenericRestApiAttributes.getDeserializedJsonObj(obj.operationAttributes)
          : undefined
      }
    };

    return jsonObj;
  }
}

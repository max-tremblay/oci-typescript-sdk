/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about the OCI Dataflow task.
 */
export interface CreateTaskFromOCIDataflowTask extends model.CreateTaskDetails {
  "dataflowApplication"?: model.DataflowApplication;
  "driverShapeDetails"?: model.ShapeDetails;
  "executorShapeDetails"?: model.ShapeDetails;

  "modelType": string;
}

export namespace CreateTaskFromOCIDataflowTask {
  export function getJsonObj(
    obj: CreateTaskFromOCIDataflowTask,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateTaskDetails.getJsonObj(obj) as CreateTaskFromOCIDataflowTask)),
      ...{
        "dataflowApplication": obj.dataflowApplication
          ? model.DataflowApplication.getJsonObj(obj.dataflowApplication)
          : undefined,
        "driverShapeDetails": obj.driverShapeDetails
          ? model.ShapeDetails.getJsonObj(obj.driverShapeDetails)
          : undefined,
        "executorShapeDetails": obj.executorShapeDetails
          ? model.ShapeDetails.getJsonObj(obj.executorShapeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "OCI_DATAFLOW_TASK";
  export function getDeserializedJsonObj(
    obj: CreateTaskFromOCIDataflowTask,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateTaskDetails.getDeserializedJsonObj(obj) as CreateTaskFromOCIDataflowTask)),
      ...{
        "dataflowApplication": obj.dataflowApplication
          ? model.DataflowApplication.getDeserializedJsonObj(obj.dataflowApplication)
          : undefined,
        "driverShapeDetails": obj.driverShapeDetails
          ? model.ShapeDetails.getDeserializedJsonObj(obj.driverShapeDetails)
          : undefined,
        "executorShapeDetails": obj.executorShapeDetails
          ? model.ShapeDetails.getDeserializedJsonObj(obj.executorShapeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}

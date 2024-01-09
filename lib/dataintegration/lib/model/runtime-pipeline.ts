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
 * Runtime pipeline model which holds the runtime metadata of the task executed.
 */
export interface RuntimePipeline {
  "pipeline"?: model.Pipeline;
  /**
   * A list of RuntimeOperators attached to the RuntimePipeline.
   */
  "runtimeOperators"?: Array<model.RuntimeOperator>;
  /**
   * The parent RuntimePipeline's RuntimeOperator key.
   */
  "parentRuntimeOperatorKey"?: string;
}

export namespace RuntimePipeline {
  export function getJsonObj(obj: RuntimePipeline): object {
    const jsonObj = {
      ...obj,
      ...{
        "pipeline": obj.pipeline ? model.Pipeline.getJsonObj(obj.pipeline) : undefined,
        "runtimeOperators": obj.runtimeOperators
          ? obj.runtimeOperators.map(item => {
              return model.RuntimeOperator.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RuntimePipeline): object {
    const jsonObj = {
      ...obj,
      ...{
        "pipeline": obj.pipeline ? model.Pipeline.getDeserializedJsonObj(obj.pipeline) : undefined,
        "runtimeOperators": obj.runtimeOperators
          ? obj.runtimeOperators.map(item => {
              return model.RuntimeOperator.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

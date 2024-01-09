/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
 * Defines the configuration of the path analysis result.
 *
 */
export interface PathAnalysisWorkRequestResult extends model.WorkRequestResult {
  /**
   * List of various paths from source node to destination node
   * for a given `PathAnalysisQuery`.
   *
   */
  "paths": Array<model.Path>;
  /**
   * Time the `PathAnalysisResult` was generated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;

  "resultType": string;
}

export namespace PathAnalysisWorkRequestResult {
  export function getJsonObj(
    obj: PathAnalysisWorkRequestResult,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WorkRequestResult.getJsonObj(obj) as PathAnalysisWorkRequestResult)),
      ...{
        "paths": obj.paths
          ? obj.paths.map(item => {
              return model.Path.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const resultType = "PATH_ANALYSIS";
  export function getDeserializedJsonObj(
    obj: PathAnalysisWorkRequestResult,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WorkRequestResult.getDeserializedJsonObj(obj) as PathAnalysisWorkRequestResult)),
      ...{
        "paths": obj.paths
          ? obj.paths.map(item => {
              return model.Path.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

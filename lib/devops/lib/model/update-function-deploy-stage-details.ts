/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Specifies the Function stage.
 */
export interface UpdateFunctionDeployStageDetails extends model.UpdateDeployStageDetails {
  /**
   * Function environment OCID.
   */
  "functionDeployEnvironmentId"?: string;
  /**
   * A Docker image artifact OCID.
   */
  "dockerImageDeployArtifactId"?: string;
  /**
   * User provided key and value pair configuration, which is assigned through constants or parameter.
   */
  "config"?: { [key: string]: string };
  /**
   * Maximum usable memory for the Function (in MB). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxMemoryInMBs"?: number;
  /**
   * Timeout for execution of the Function. Value in seconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "functionTimeoutInSeconds"?: number;

  "deployStageType": string;
}

export namespace UpdateFunctionDeployStageDetails {
  export function getJsonObj(
    obj: UpdateFunctionDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDeployStageDetails.getJsonObj(obj) as UpdateFunctionDeployStageDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const deployStageType = "DEPLOY_FUNCTION";
  export function getDeserializedJsonObj(
    obj: UpdateFunctionDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDeployStageDetails.getDeserializedJsonObj(
            obj
          ) as UpdateFunctionDeployStageDetails)),
      ...{}
    };

    return jsonObj;
  }
}

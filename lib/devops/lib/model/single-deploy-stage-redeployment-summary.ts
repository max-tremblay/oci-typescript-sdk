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
 * Summary of a single stage redeployment.
 */
export interface SingleDeployStageRedeploymentSummary extends model.DeploymentSummary {
  /**
   * Specifies the OCID of the previous deployment to be redeployed.
   */
  "previousDeploymentId"?: string;
  /**
   * Specifies the OCID of the stage to be redeployed.
   */
  "deployStageId": string;

  "deploymentType": string;
}

export namespace SingleDeployStageRedeploymentSummary {
  export function getJsonObj(
    obj: SingleDeployStageRedeploymentSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeploymentSummary.getJsonObj(obj) as SingleDeployStageRedeploymentSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const deploymentType = "SINGLE_STAGE_REDEPLOYMENT";
  export function getDeserializedJsonObj(
    obj: SingleDeployStageRedeploymentSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeploymentSummary.getDeserializedJsonObj(
            obj
          ) as SingleDeployStageRedeploymentSummary)),
      ...{}
    };

    return jsonObj;
  }
}

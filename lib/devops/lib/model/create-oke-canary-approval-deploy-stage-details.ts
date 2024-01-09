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
 * Specifies the Container Engine for Kubernetes (OKE) cluster canary deployment approval stage.
 */
export interface CreateOkeCanaryApprovalDeployStageDetails extends model.CreateDeployStageDetails {
  /**
   * The OCID of an upstream OKE canary deployment traffic shift stage in this pipeline.
   */
  "okeCanaryTrafficShiftDeployStageId": string;
  "approvalPolicy": model.CountBasedApprovalPolicy;

  "deployStageType": string;
}

export namespace CreateOkeCanaryApprovalDeployStageDetails {
  export function getJsonObj(
    obj: CreateOkeCanaryApprovalDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDeployStageDetails.getJsonObj(
            obj
          ) as CreateOkeCanaryApprovalDeployStageDetails)),
      ...{
        "approvalPolicy": obj.approvalPolicy
          ? model.ApprovalPolicy.getJsonObj(obj.approvalPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "OKE_CANARY_APPROVAL";
  export function getDeserializedJsonObj(
    obj: CreateOkeCanaryApprovalDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDeployStageDetails.getDeserializedJsonObj(
            obj
          ) as CreateOkeCanaryApprovalDeployStageDetails)),
      ...{
        "approvalPolicy": obj.approvalPolicy
          ? model.ApprovalPolicy.getDeserializedJsonObj(obj.approvalPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}

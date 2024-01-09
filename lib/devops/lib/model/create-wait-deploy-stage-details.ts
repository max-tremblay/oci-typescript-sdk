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
 * Specifies the Wait stage. User can specify a criteria for wait time or give an absolute duration.
 */
export interface CreateWaitDeployStageDetails extends model.CreateDeployStageDetails {
  "waitCriteria": model.AbsoluteWaitCriteria;

  "deployStageType": string;
}

export namespace CreateWaitDeployStageDetails {
  export function getJsonObj(obj: CreateWaitDeployStageDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDeployStageDetails.getJsonObj(obj) as CreateWaitDeployStageDetails)),
      ...{
        "waitCriteria": obj.waitCriteria
          ? model.WaitCriteria.getJsonObj(obj.waitCriteria)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "WAIT";
  export function getDeserializedJsonObj(
    obj: CreateWaitDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDeployStageDetails.getDeserializedJsonObj(
            obj
          ) as CreateWaitDeployStageDetails)),
      ...{
        "waitCriteria": obj.waitCriteria
          ? model.WaitCriteria.getDeserializedJsonObj(obj.waitCriteria)
          : undefined
      }
    };

    return jsonObj;
  }
}

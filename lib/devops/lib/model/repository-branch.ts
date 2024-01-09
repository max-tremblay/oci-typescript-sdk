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
 * Branch related information.
 */
export interface RepositoryBranch extends model.RepositoryRef {
  /**
   * Commit ID pointed to by the new branch.
   */
  "commitId": string;

  "refType": string;
}

export namespace RepositoryBranch {
  export function getJsonObj(obj: RepositoryBranch, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.RepositoryRef.getJsonObj(obj) as RepositoryBranch)),
      ...{}
    };

    return jsonObj;
  }
  export const refType = "BRANCH";
  export function getDeserializedJsonObj(obj: RepositoryBranch, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RepositoryRef.getDeserializedJsonObj(obj) as RepositoryBranch)),
      ...{}
    };

    return jsonObj;
  }
}

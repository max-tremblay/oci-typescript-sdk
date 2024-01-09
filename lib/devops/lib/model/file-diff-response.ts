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
 * Response object for showing differences for a file between two commits.
 */
export interface FileDiffResponse {
  /**
   * The path on the base version to the changed object.
   */
  "oldPath"?: string;
  /**
   * The path on the target version to the changed object.
   */
  "newPath"?: string;
  /**
   * The ID of the changed object on the base version.
   */
  "oldId"?: string;
  /**
   * The ID of the changed object on the target version.
   */
  "newId"?: string;
  /**
   * Indicates whether the changed file contains conflicts.
   */
  "areConflictsInFile"?: boolean;
  /**
   * Indicates whether the file is large.
   */
  "isLarge"?: boolean;
  /**
   * Indicates whether the file is binary.
   */
  "isBinary"?: boolean;
  /**
   * List of changed section in the file.
   */
  "changes": Array<model.DiffChunk>;
}

export namespace FileDiffResponse {
  export function getJsonObj(obj: FileDiffResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "changes": obj.changes
          ? obj.changes.map(item => {
              return model.DiffChunk.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FileDiffResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "changes": obj.changes
          ? obj.changes.map(item => {
              return model.DiffChunk.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

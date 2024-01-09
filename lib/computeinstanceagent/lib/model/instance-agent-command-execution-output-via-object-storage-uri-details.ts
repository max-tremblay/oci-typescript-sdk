/**
 * Oracle Cloud Agent API
 * API for the Oracle Cloud Agent software running on compute instances. Oracle Cloud Agent
is a lightweight process that monitors and manages compute instances.

 * OpenAPI spec version: 20180530
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
 * The execution output from a command when saved to an Object Storage URL.
 */
export interface InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails
  extends model.InstanceAgentCommandExecutionOutputContent {
  /**
   * The Object Storage URL or pre-authenticated request (PAR) for the command output.
   */
  "outputUri": string;

  "outputType": string;
}

export namespace InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails {
  export function getJsonObj(
    obj: InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceAgentCommandExecutionOutputContent.getJsonObj(
            obj
          ) as InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const outputType = "OBJECT_STORAGE_URI";
  export function getDeserializedJsonObj(
    obj: InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceAgentCommandExecutionOutputContent.getDeserializedJsonObj(
            obj
          ) as InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails)),
      ...{}
    };

    return jsonObj;
  }
}

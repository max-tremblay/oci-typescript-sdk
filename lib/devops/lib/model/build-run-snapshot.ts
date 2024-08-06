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
 * Snapshot of a build run. Contains information including pipelineId, commitId.
 */
export interface BuildRunSnapshot {
  /**
   * The OCID of the build pipeline where the build was triggered.
   */
  "buildPipelineId": string;
  /**
   * The display name of the build run.
   */
  "displayName"?: string;
  /**
   * The commit id which the build was triggered from.
   */
  "commitId": string;
  /**
   * The OCID of the build run.
   */
  "buildRunId": string;
  /**
   * The current status of the build run.
   */
  "lifecycleState": BuildRunSnapshot.LifecycleState;
  /**
   * A message describing the current state in more detail.
   */
  "lifecycleDetails": string;
  /**
   * The time the build run was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The time the build run was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
}

export namespace BuildRunSnapshot {
  export enum LifecycleState {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Canceling = "CANCELING",
    Canceled = "CANCELED"
  }

  export function getJsonObj(obj: BuildRunSnapshot): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BuildRunSnapshot): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

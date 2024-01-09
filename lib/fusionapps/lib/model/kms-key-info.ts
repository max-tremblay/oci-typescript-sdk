/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * kmsKeyInfo
 */
export interface KmsKeyInfo {
  /**
   * current BYOK keyId facp is using
   */
  "activeKeyId"?: string;
  /**
   * current key version facp is using
   */
  "activeKeyVersion"?: string;
  /**
   * scheduled keyId to be updated
   */
  "scheduledKeyId"?: string;
  /**
   * scheduled key version to be updated.
   */
  "scheduledKeyVersion"?: string;
  /**
   * current key lifeCycleState
   */
  "currentKeyLifecycleState"?: string;
  /**
   * scheduled key lifeCycle state to be updated.
   */
  "scheduledLifecycleState"?: string;
  /**
   * the scheduled key status
   */
  "scheduledKeyStatus"?: KmsKeyInfo.ScheduledKeyStatus;
}

export namespace KmsKeyInfo {
  export enum ScheduledKeyStatus {
    Scheduling = "SCHEDULING",
    Updating = "UPDATING",
    Failed = "FAILED",
    None = "NONE"
  }

  export function getJsonObj(obj: KmsKeyInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: KmsKeyInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

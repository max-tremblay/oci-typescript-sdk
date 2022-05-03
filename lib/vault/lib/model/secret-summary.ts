/**
 * Vault Secret Management API
 * Use the Secret Management API to manage secrets and secret versions. For more information, see [Managing Secrets](/Content/KeyManagement/Tasks/managingsecrets.htm).
 * OpenAPI spec version: 20180608
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details of the secret, excluding the contents of the secret.
 */
export interface SecretSummary {
  /**
   * The OCID of the compartment that contains the secret.
   */
  "compartmentId": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A brief description of the secret.
   */
  "description"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the master encryption key that is used to encrypt the secret. You must specify a symmetric key to encrypt the secret during import to the vault. You cannot encrypt secrets with asymmetric keys. Furthermore, the key must exist in the vault that you specify.
   *
   */
  "keyId"?: string;
  /**
   * The OCID of the secret.
   */
  "id": string;
  /**
   * Additional information about the secret's current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The current lifecycle state of the secret.
   */
  "lifecycleState": SecretSummary.LifecycleState;
  /**
   * The name of the secret.
   */
  "secretName": string;
  /**
   * A property indicating when the secret was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * An optional property indicating when the current secret version will expire, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfCurrentVersionExpiry"?: Date;
  /**
   * An optional property indicating when to delete the secret, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfDeletion"?: Date;
  /**
   * The OCID of the Vault in which the secret exists
   */
  "vaultId": string;
}

export namespace SecretSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    SchedulingDeletion = "SCHEDULING_DELETION",
    PendingDeletion = "PENDING_DELETION",
    CancellingDeletion = "CANCELLING_DELETION",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SecretSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecretSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

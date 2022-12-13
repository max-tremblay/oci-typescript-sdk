/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Repositories containing the source code to build and deploy.
 */
export interface Repository {
  /**
   * The OCID of the repository. This value is unique and immutable.
   */
  "id": string;
  /**
   * Unique name of a repository. This value is mutable.
   */
  "name"?: string;
  /**
   * The OCID of the repository's compartment.
   */
  "compartmentId": string;
  /**
   * Tenancy unique namespace.
   */
  "namespace"?: string;
  /**
   * The OCID of the DevOps project containing the repository.
   */
  "projectId": string;
  /**
   * Unique project name in a namespace.
   */
  "projectName"?: string;
  /**
   * SSH URL that you use to git clone, pull and push.
   */
  "sshUrl"?: string;
  /**
   * HTTP URL that you use to git clone, pull and push.
   */
  "httpUrl"?: string;
  /**
   * Details of the repository. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * The default branch of the repository.
   */
  "defaultBranch"?: string;
  /**
   * Type of repository:
   * MIRRORED - Repository created by mirroring an existing repository.
   * HOSTED - Repository created and hosted using OCI DevOps code repository.
   *
   */
  "repositoryType"?: Repository.RepositoryType;
  "mirrorRepositoryConfig"?: model.MirrorRepositoryConfig;
  /**
   * The time the repository was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The time the repository was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the repository.
   */
  "lifecycleState"?: Repository.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecyleDetails"?: string;
  /**
   * The count of the branches present in the repository. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "branchCount"?: number;
  /**
   * The count of the commits present in the repository. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "commitCount"?: number;
  /**
   * The size of the repository in bytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInBytes"?: number;
  /**
   * Trigger build events supported for this repository:
   * PUSH - Build is triggered when a push event occurs.
   * COMMIT_UPDATES - Build is triggered when new commits are mirrored into a repository.
   *
   */
  "triggerBuildEvents"?: Array<Repository.TriggerBuildEvents>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Repository {
  export enum RepositoryType {
    Mirrored = "MIRRORED",
    Hosted = "HOSTED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleted = "DELETED",
    Deleting = "DELETING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TriggerBuildEvents {
    Push = "PUSH",
    CommitUpdates = "COMMIT_UPDATES",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Repository): object {
    const jsonObj = {
      ...obj,
      ...{
        "mirrorRepositoryConfig": obj.mirrorRepositoryConfig
          ? model.MirrorRepositoryConfig.getJsonObj(obj.mirrorRepositoryConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Repository): object {
    const jsonObj = {
      ...obj,
      ...{
        "mirrorRepositoryConfig": obj.mirrorRepositoryConfig
          ? model.MirrorRepositoryConfig.getDeserializedJsonObj(obj.mirrorRepositoryConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}

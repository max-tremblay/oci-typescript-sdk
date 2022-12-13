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
 * The properties that define a connection to external repositories.
 */
export interface Connection {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Optional description about the connection.
   */
  "description"?: string;
  /**
   * Connection display name, which can be renamed and is not necessarily unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of the compartment containing the connection.
   */
  "compartmentId": string;
  /**
   * The OCID of the DevOps project.
   */
  "projectId": string;
  /**
   * The time the connection was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The time the connection was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * A detailed message describing the current state. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The current state of the connection.
   */
  "lifecycleState"?: Connection.LifecycleState;
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

  "connectionType": string;
}

export namespace Connection {
  export enum LifecycleState {
    Active = "ACTIVE",
    Deleting = "DELETING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Connection): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "BITBUCKET_SERVER_ACCESS_TOKEN":
          return model.BitbucketServerAccessTokenConnection.getJsonObj(
            <model.BitbucketServerAccessTokenConnection>(<object>jsonObj),
            true
          );
        case "GITLAB_ACCESS_TOKEN":
          return model.GitlabAccessTokenConnection.getJsonObj(
            <model.GitlabAccessTokenConnection>(<object>jsonObj),
            true
          );
        case "GITHUB_ACCESS_TOKEN":
          return model.GithubAccessTokenConnection.getJsonObj(
            <model.GithubAccessTokenConnection>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD_APP_PASSWORD":
          return model.BitbucketCloudAppPasswordConnection.getJsonObj(
            <model.BitbucketCloudAppPasswordConnection>(<object>jsonObj),
            true
          );
        case "GITLAB_SERVER_ACCESS_TOKEN":
          return model.GitlabServerAccessTokenConnection.getJsonObj(
            <model.GitlabServerAccessTokenConnection>(<object>jsonObj),
            true
          );
        case "VBS_ACCESS_TOKEN":
          return model.VbsAccessTokenConnection.getJsonObj(
            <model.VbsAccessTokenConnection>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Connection): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "BITBUCKET_SERVER_ACCESS_TOKEN":
          return model.BitbucketServerAccessTokenConnection.getDeserializedJsonObj(
            <model.BitbucketServerAccessTokenConnection>(<object>jsonObj),
            true
          );
        case "GITLAB_ACCESS_TOKEN":
          return model.GitlabAccessTokenConnection.getDeserializedJsonObj(
            <model.GitlabAccessTokenConnection>(<object>jsonObj),
            true
          );
        case "GITHUB_ACCESS_TOKEN":
          return model.GithubAccessTokenConnection.getDeserializedJsonObj(
            <model.GithubAccessTokenConnection>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD_APP_PASSWORD":
          return model.BitbucketCloudAppPasswordConnection.getDeserializedJsonObj(
            <model.BitbucketCloudAppPasswordConnection>(<object>jsonObj),
            true
          );
        case "GITLAB_SERVER_ACCESS_TOKEN":
          return model.GitlabServerAccessTokenConnection.getDeserializedJsonObj(
            <model.GitlabServerAccessTokenConnection>(<object>jsonObj),
            true
          );
        case "VBS_ACCESS_TOKEN":
          return model.VbsAccessTokenConnection.getDeserializedJsonObj(
            <model.VbsAccessTokenConnection>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
}

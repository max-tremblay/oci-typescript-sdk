/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
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
 * The model for an Oracle Cloud Infrastructure Marketplace artifact.
 *
 */
export interface UpdateArtifactDetails {
  /**
   * The unique identifier for the compartment.
   */
  "compartmentId"?: string;
  /**
   * The display name for the artifact.
   */
  "displayName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "artifactType": string;
}

export namespace UpdateArtifactDetails {
  export function getJsonObj(obj: UpdateArtifactDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "artifactType" in obj && obj.artifactType) {
      switch (obj.artifactType) {
        case "HELM_CHART":
          return model.UpdateKubernetesImageArtifactDetails.getJsonObj(
            <model.UpdateKubernetesImageArtifactDetails>(<object>jsonObj),
            true
          );
        case "CONTAINER_IMAGE":
          return model.UpdateContainerImageArtifactDetails.getJsonObj(
            <model.UpdateContainerImageArtifactDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.artifactType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateArtifactDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "artifactType" in obj && obj.artifactType) {
      switch (obj.artifactType) {
        case "HELM_CHART":
          return model.UpdateKubernetesImageArtifactDetails.getDeserializedJsonObj(
            <model.UpdateKubernetesImageArtifactDetails>(<object>jsonObj),
            true
          );
        case "CONTAINER_IMAGE":
          return model.UpdateContainerImageArtifactDetails.getDeserializedJsonObj(
            <model.UpdateContainerImageArtifactDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.artifactType}`);
      }
    }
    return jsonObj;
  }
}

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
 * Specifies source of an artifact.
 */
export interface DeployArtifactSource {
  "deployArtifactSourceType": string;
}

export namespace DeployArtifactSource {
  export function getJsonObj(obj: DeployArtifactSource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "deployArtifactSourceType" in obj && obj.deployArtifactSourceType) {
      switch (obj.deployArtifactSourceType) {
        case "GENERIC_ARTIFACT":
          return model.GenericDeployArtifactSource.getJsonObj(
            <model.GenericDeployArtifactSource>(<object>jsonObj),
            true
          );
        case "HELM_CHART":
          return model.HelmRepositoryDeployArtifactSource.getJsonObj(
            <model.HelmRepositoryDeployArtifactSource>(<object>jsonObj),
            true
          );
        case "OCIR":
          return model.OcirDeployArtifactSource.getJsonObj(
            <model.OcirDeployArtifactSource>(<object>jsonObj),
            true
          );
        case "INLINE":
          return model.InlineDeployArtifactSource.getJsonObj(
            <model.InlineDeployArtifactSource>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.deployArtifactSourceType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeployArtifactSource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "deployArtifactSourceType" in obj && obj.deployArtifactSourceType) {
      switch (obj.deployArtifactSourceType) {
        case "GENERIC_ARTIFACT":
          return model.GenericDeployArtifactSource.getDeserializedJsonObj(
            <model.GenericDeployArtifactSource>(<object>jsonObj),
            true
          );
        case "HELM_CHART":
          return model.HelmRepositoryDeployArtifactSource.getDeserializedJsonObj(
            <model.HelmRepositoryDeployArtifactSource>(<object>jsonObj),
            true
          );
        case "OCIR":
          return model.OcirDeployArtifactSource.getDeserializedJsonObj(
            <model.OcirDeployArtifactSource>(<object>jsonObj),
            true
          );
        case "INLINE":
          return model.InlineDeployArtifactSource.getDeserializedJsonObj(
            <model.InlineDeployArtifactSource>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.deployArtifactSourceType}`);
      }
    }
    return jsonObj;
  }
}

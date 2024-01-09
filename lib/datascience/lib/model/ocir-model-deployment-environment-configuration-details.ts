/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The environment configuration details object for OCI Registry
 */
export interface OcirModelDeploymentEnvironmentConfigurationDetails
  extends model.ModelDeploymentEnvironmentConfigurationDetails {
  /**
   * The full path to the Oracle Container Repository (OCIR) registry, image, and tag in a canonical format.
   * Acceptable format:
   * `<region>.ocir.io/<registry>/<image>:<tag>`
   * `<region>.ocir.io/<registry>/<image>:<tag>@digest`
   *
   */
  "image": string;
  /**
   * The digest of the container image. For example,
   * `sha256:881303a6b2738834d795a32b4a98eb0e5e3d1cad590a712d1e04f9b2fa90a030`
   *
   */
  "imageDigest"?: string;
  /**
   * The container image run [CMD](https://docs.docker.com/engine/reference/builder/#cmd) as a list of strings.
   * Use `CMD` as arguments to the `ENTRYPOINT` or the only command to run in the absence of an `ENTRYPOINT`.
   * The combined size of `CMD` and `ENTRYPOINT` must be less than 2048 bytes.
   *
   */
  "cmd"?: Array<string>;
  /**
   * The container image run [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint) as a list of strings.
   * Accept the `CMD` as extra arguments.
   * The combined size of `CMD` and `ENTRYPOINT` must be less than 2048 bytes.
   * More information on how `CMD` and `ENTRYPOINT` interact are [here](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact).
   *
   */
  "entrypoint"?: Array<string>;
  /**
   * The port on which the web server serving the inference is running.
   * The port can be anything between `1024` and `65535`. The following ports cannot be used `24224`, `8446`, `8447`.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "serverPort"?: number;
  /**
   * The port on which the container [HEALTHCHECK](https://docs.docker.com/engine/reference/builder/#healthcheck) would listen.
   * The port can be anything between `1024` and `65535`. The following ports cannot be used `24224`, `8446`, `8447`.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "healthCheckPort"?: number;
  /**
   * Environment variables to set for the web server container.
   * The size of envVars must be less than 2048 bytes.
   * Key should be under 32 characters.
   * Key should contain only letters, digits and underscore (_)
   * Key should start with a letter.
   * Key should have at least 2 characters.
   * Key should not end with underscore eg. `TEST_`
   * Key if added cannot be empty. Value can be empty.
   * No specific size limits on individual Values. But overall environment variables is limited to 2048 bytes.
   * Key can't be reserved Model Deployment environment variables.
   *
   */
  "environmentVariables"?: { [key: string]: string };

  "environmentConfigurationType": string;
}

export namespace OcirModelDeploymentEnvironmentConfigurationDetails {
  export function getJsonObj(
    obj: OcirModelDeploymentEnvironmentConfigurationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ModelDeploymentEnvironmentConfigurationDetails.getJsonObj(
            obj
          ) as OcirModelDeploymentEnvironmentConfigurationDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const environmentConfigurationType = "OCIR_CONTAINER";
  export function getDeserializedJsonObj(
    obj: OcirModelDeploymentEnvironmentConfigurationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ModelDeploymentEnvironmentConfigurationDetails.getDeserializedJsonObj(
            obj
          ) as OcirModelDeploymentEnvironmentConfigurationDetails)),
      ...{}
    };

    return jsonObj;
  }
}

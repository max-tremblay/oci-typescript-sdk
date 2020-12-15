/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details for updating a configuration source provider of the type `GITLAB_ACCESS_TOKEN`.
 * This type corresponds to a configuration source provider in GitLab that is authenticated with a personal access token.
 *
 */
export interface UpdateGitlabAccessTokenConfigurationSourceProviderDetails
  extends model.UpdateConfigurationSourceProviderDetails {
  /**
   * The Git service endpoint.
   * Example: `https://gitlab.com`
   *
   */
  "apiEndpoint"?: string;
  /**
   * The personal access token to be configured on the GitLab repository.
   */
  "accessToken"?: string;

  "configSourceProviderType": string;
}

export namespace UpdateGitlabAccessTokenConfigurationSourceProviderDetails {
  export function getJsonObj(
    obj: UpdateGitlabAccessTokenConfigurationSourceProviderDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConfigurationSourceProviderDetails.getJsonObj(
            obj
          ) as UpdateGitlabAccessTokenConfigurationSourceProviderDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceProviderType = "GITLAB_ACCESS_TOKEN";
}

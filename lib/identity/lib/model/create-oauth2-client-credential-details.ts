/**
 * Identity and Access Management Service API
 * Use the Identity and Access Management Service API to manage users, groups, identity domains, compartments, policies, tagging, and limits. For information about managing users, groups, compartments, and policies, see [Identity and Access Management (without identity domains)](/iaas/Content/Identity/Concepts/overview.htm). For information about tagging and service limits, see [Tagging](/iaas/Content/Tagging/Concepts/taggingoverview.htm) and [Service Limits](/iaas/Content/General/Concepts/servicelimits.htm). For information about creating, modifying, and deleting identity domains, see [Identity and Access Management (with identity domains)](/iaas/Content/Identity/home.htm).
 * OpenAPI spec version: 20160918
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

export interface CreateOAuth2ClientCredentialDetails {
  /**
   * Name of the oauth credential to help user differentiate them.
   */
  "name": string;
  /**
   * Description of the oauth credential to help user differentiate them.
   */
  "description": string;
  /**
   * Allowed scopes for the given oauth credential.
   */
  "scopes": Array<model.FullyQualifiedScope>;
}

export namespace CreateOAuth2ClientCredentialDetails {
  export function getJsonObj(obj: CreateOAuth2ClientCredentialDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "scopes": obj.scopes
          ? obj.scopes.map(item => {
              return model.FullyQualifiedScope.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateOAuth2ClientCredentialDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "scopes": obj.scopes
          ? obj.scopes.map(item => {
              return model.FullyQualifiedScope.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

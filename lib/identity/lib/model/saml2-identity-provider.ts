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

/**
 * A special type of {@link IdentityProvider} that
 * supports the SAML 2.0 protocol. For more information, see
 * [Identity Providers and Federation](https://docs.cloud.oracle.com/Content/Identity/Concepts/federation.htm).
 *
 */
export interface Saml2IdentityProvider extends model.IdentityProvider {
  /**
   * The URL for retrieving the identity provider's metadata, which
   * contains information required for federating.
   *
   */
  "metadataUrl": string;
  /**
   * The XML that contains the information required for federating Identity with SAML2 Identity Provider.
   *
   */
  "metadata"?: string;
  /**
   * The identity provider's signing certificate used by the IAM Service
   * to validate the SAML2 token.
   *
   */
  "signingCertificate": string;
  /**
   * The URL to redirect federated users to for authentication with the
   * identity provider.
   *
   */
  "redirectUrl": string;
  /**
   * Extra name value pairs associated with this identity provider.
   * Example: `{\"clientId\": \"app_sf3kdjf3\"}`
   *
   */
  "freeformAttributes"?: { [key: string]: string };

  "protocol": string;
}

export namespace Saml2IdentityProvider {
  export function getJsonObj(obj: Saml2IdentityProvider, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.IdentityProvider.getJsonObj(obj) as Saml2IdentityProvider)),
      ...{}
    };

    return jsonObj;
  }
  export const protocol = "SAML2";
  export function getDeserializedJsonObj(
    obj: Saml2IdentityProvider,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.IdentityProvider.getDeserializedJsonObj(obj) as Saml2IdentityProvider)),
      ...{}
    };

    return jsonObj;
  }
}

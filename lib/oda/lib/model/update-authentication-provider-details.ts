/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Properties to update an Authentication Provider.
 */
export interface UpdateAuthenticationProviderDetails {
  /**
   * The IDPs URL for requesting access tokens.
   */
  "tokenEndpointUrl"?: string;
  /**
   * The IDPs URL for the page that users authenticate with by entering the user name and password.
   */
  "authorizationEndpointUrl"?: string;
  /**
   * A shortened version of the authorization URL, which you can get from a URL shortener service (one that allows
   * you to send query parameters).  You might need this because the generated authorization-code-request URL
   * could be too long for SMS and older smart phones.
   *
   */
  "shortAuthorizationCodeRequestUrl"?: string;
  /**
   * If you want to revoke all the refresh tokens and access tokens of the logged-in user from a dialog flow, then
   * you need the IDP's revoke refresh token URL. If you provide this URL, then you can use the System.OAuth2ResetTokens
   * component to revoke the user's tokens for this service.
   *
   */
  "revokeTokenEndpointUrl"?: string;
  /**
   * The client ID for the IDP application (OAuth Client) that was registered as described in Identity Provider Registration.
   * With Microsoft identity platform, use the application ID.
   *
   */
  "clientId"?: string;
  /**
   * The client secret for the IDP application (OAuth Client) that was registered as described in Identity Provider
   * Registration. With Microsoft identity platform, use the application secret.
   *
   */
  "clientSecret"?: string;
  /**
   * A space-separated list of the scopes that must be included when Digital Assistant requests an access token from
   * the provider. Include all the scopes that are required to access the resources. If refresh tokens are enabled,
   * include the scope that\u2019s necessary to get the refresh token (typically offline_access).
   *
   */
  "scopes"?: string;
  /**
   * The access-token profile claim to use to identify the user.
   */
  "subjectClaim"?: string;
  /**
   * The number of days to keep the refresh token in the Digital Assistant cache. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "refreshTokenRetentionPeriodInDays"?: number;
  /**
   * The OAuth Redirect URL.
   */
  "redirectUrl"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateAuthenticationProviderDetails {
  export function getJsonObj(obj: UpdateAuthenticationProviderDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateAuthenticationProviderDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

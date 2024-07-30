/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm).
Use this pattern to construct endpoints for identity domains: `https://<domainURL>/admin/v1/`. See [Finding an Identity Domain URL](https://docs.oracle.com/en-us/iaas/Content/Identity/api-getstarted/locate-identity-domain-url.htm) to locate the domain URL you need.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
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
 * Settings related to the bypass code, such as bypass code length, bypass code expiry, max active bypass codes, and so on
 * <p>
 **SCIM++ Properties:**
 *  - idcsSearchable: false
 *  - multiValued: false
 *  - mutability: readWrite
 *  - required: true
 *  - returned: default
 *  - type: complex
 *  - uniqueness: none
 */
export interface AuthenticationFactorSettingsBypassCodeSettings {
  /**
   * If true, indicates that self-service bypass code generation is enabled
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "selfServiceGenerationEnabled": boolean;
  /**
   * If true, indicates that help desk bypass code generation is enabled
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "helpDeskGenerationEnabled": boolean;
  /**
   * Exact length of the bypass code to be generated
   * <p>
   **SCIM++ Properties:**
   *  - idcsMaxValue: 20
   *  - idcsMinValue: 8
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "length": number;
  /**
   * The maximum number of bypass codes that can be issued to any user
   * <p>
   **SCIM++ Properties:**
   *  - idcsMaxValue: 6
   *  - idcsMinValue: 1
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxActive": number;
  /**
   * Expiry (in minutes) of any bypass code that is generated by the help desk
   * <p>
   **SCIM++ Properties:**
   *  - idcsMaxValue: 9999999
   *  - idcsMinValue: 1
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "helpDeskCodeExpiryInMins": number;
  /**
   * The maximum number of times that any bypass code that is generated by the help desk can be used
   * <p>
   **SCIM++ Properties:**
   *  - idcsMaxValue: 999
   *  - idcsMinValue: 1
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "helpDeskMaxUsage": number;
}

export namespace AuthenticationFactorSettingsBypassCodeSettings {
  export function getJsonObj(obj: AuthenticationFactorSettingsBypassCodeSettings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: AuthenticationFactorSettingsBypassCodeSettings
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

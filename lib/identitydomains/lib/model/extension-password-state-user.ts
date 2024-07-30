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
 * This extension defines attributes used to manage account passwords within a Service Provider. The extension is typically applied to a User resource, but MAY be applied to other resources that use passwords.
 */
export interface ExtensionPasswordStateUser {
  /**
   * A DateTime that specifies the date and time when the current password was set
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: dateTime
   *  - uniqueness: none
   */
  "lastSuccessfulSetDate"?: string;
  /**
   * Indicates that the current password MAY NOT be changed and all other password expiry settings SHALL be ignored
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: boolean
   *  - uniqueness: none
   */
  "cantChange"?: boolean;
  /**
   * Indicates that the password expiry policy will not be applied for the current Resource
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: boolean
   *  - uniqueness: none
   */
  "cantExpire"?: boolean;
  /**
   * Indicates that the subject password value MUST change on next login. If not changed, typically the account is locked. The value may be set indirectly when the subject's current password expires or directly set by an administrator.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: boolean
   *  - uniqueness: none
   */
  "mustChange"?: boolean;
  /**
   * Indicates that the password has expired
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: boolean
   *  - uniqueness: none
   */
  "expired"?: boolean;
  /**
   * A DateTime that specifies the date and time when last successful password validation was set
   * <p>
   **Added In:** 2011192329
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: dateTime
   *  - uniqueness: none
   */
  "lastSuccessfulValidationDate"?: string;
  /**
   * A DateTime that specifies the date and time when last failed password validation was set
   * <p>
   **Added In:** 2011192329
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: dateTime
   *  - uniqueness: none
   */
  "lastFailedValidationDate"?: string;
  "applicablePasswordPolicy"?: model.UserExtApplicablePasswordPolicy;
}

export namespace ExtensionPasswordStateUser {
  export function getJsonObj(obj: ExtensionPasswordStateUser): object {
    const jsonObj = {
      ...obj,
      ...{
        "applicablePasswordPolicy": obj.applicablePasswordPolicy
          ? model.UserExtApplicablePasswordPolicy.getJsonObj(obj.applicablePasswordPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExtensionPasswordStateUser): object {
    const jsonObj = {
      ...obj,
      ...{
        "applicablePasswordPolicy": obj.applicablePasswordPolicy
          ? model.UserExtApplicablePasswordPolicy.getDeserializedJsonObj(
              obj.applicablePasswordPolicy
            )
          : undefined
      }
    };

    return jsonObj;
  }
}

/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
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
 * Accounts assigned to this User. Each value of this attribute refers to an app-specific identity that is owned by this User. Therefore, this attribute is a convenience that allows one to see on each User the Apps to which that User has access.
 * <p>
 **SCIM++ Properties:**
 *  - idcsPii: true
 *  - idcsSearchable: true
 *  - multiValued: true
 *  - mutability: readOnly
 *  - required: false
 *  - returned: request
 *  - type: complex
 *  - uniqueness: none
 */
export interface UserExtAccounts {
  /**
   * The Id of the Account assigned to the User.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "value"?: string;
  /**
   * The URI of the Account assigned to the User.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: reference
   *  - uniqueness: none
   */
  "ref"?: string;
  /**
   * The ID of the App to which this Account gives access.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "appId"?: string;
  /**
   * Name of the account assigned to the User.
   * <p>
   **Added In:** 17.4.6
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "name"?: string;
  /**
   * Status of the account
   * <p>
   **Added In:** 17.4.6
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "active"?: boolean;
}

export namespace UserExtAccounts {
  export function getJsonObj(obj: UserExtAccounts): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<UserExtAccounts>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UserExtAccounts): object {
    const jsonObj = {
      ...obj,
      ...{
        "ref": (obj as any)["$ref"]
      }
    };

    delete (jsonObj as any)["$ref"];

    return jsonObj;
  }
}

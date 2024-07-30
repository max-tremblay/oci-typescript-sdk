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
 * Sign-on Policy.
 * <p>
 **Deprecated Since: 17.3.4**
 * <p>
 **SCIM++ Properties:**
 *  - idcsSearchable: true
 *  - multiValued: false
 *  - mutability: readWrite
 *  - required: false
 *  - returned: default
 *  - type: complex
 */
export interface AppSignonPolicy {
  /**
   * Identifier of the Policy.
   * <p>
   **Deprecated Since: 17.3.4**
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "value": string;
  /**
   * URI of the policy.
   * <p>
   **Deprecated Since: 17.3.4**
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
}

export namespace AppSignonPolicy {
  export function getJsonObj(obj: AppSignonPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<AppSignonPolicy>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppSignonPolicy): object {
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

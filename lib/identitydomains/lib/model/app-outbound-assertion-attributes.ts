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
 * Use to construct the outgoing SAML attributes
 * <p>
 **Added In:** 18.2.6
 * <p>
 **SCIM++ Properties:**
 *  - caseExact: false
 *  - idcsCompositeKey: [value]
 *  - idcsSearchable: true
 *  - multiValued: false
 *  - mutability: readOnly
 *  - required: false
 *  - returned: default
 *  - type: complex
 *  - uniqueness: none
 */
export interface AppOutboundAssertionAttributes {
  /**
   * Mapped Attribute identifier
   * <p>
   **Added In:** 18.2.6
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - mutability: readOnly
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "value": string;
  /**
   * Mapped Attribute URI
   * <p>
   **Added In:** 18.2.6
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: reference
   *  - uniqueness: none
   */
  "ref"?: string;
  /**
   * Mapped Attribute Direction
   * <p>
   **Added In:** 18.2.6
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "direction"?: string;
}

export namespace AppOutboundAssertionAttributes {
  export function getJsonObj(obj: AppOutboundAssertionAttributes): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<AppOutboundAssertionAttributes>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppOutboundAssertionAttributes): object {
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

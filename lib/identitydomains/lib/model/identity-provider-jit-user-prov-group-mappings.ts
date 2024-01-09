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
 * The list of mappings between the Identity Domain Group and the IDP group.
 */
export interface IdentityProviderJitUserProvGroupMappings {
  /**
   * Domain Group
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - idcsSearchable: true
   *  - type: string
   */
  "value": string;
  /**
   * Group URI
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: true
   *  - returned: default
   *  - type: reference
   */
  "ref": string;
  /**
   * IDP Group Name
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - type: string
   */
  "idpGroup": string;
}

export namespace IdentityProviderJitUserProvGroupMappings {
  export function getJsonObj(obj: IdentityProviderJitUserProvGroupMappings): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<IdentityProviderJitUserProvGroupMappings>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IdentityProviderJitUserProvGroupMappings): object {
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

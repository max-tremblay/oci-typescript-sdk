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
 * App attributes editable by subject
 */
export interface AppEditableAttributes {
  /**
   * Name of the attribute. The attribute name will be qualified by schema name if any extension schema defines the attribute. The attribute name will not be qualified by schema name if the base schema defines the attribute.
   * <p>
   **Added In:** 18.2.6
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "name": string;
}

export namespace AppEditableAttributes {
  export function getJsonObj(obj: AppEditableAttributes): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppEditableAttributes): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

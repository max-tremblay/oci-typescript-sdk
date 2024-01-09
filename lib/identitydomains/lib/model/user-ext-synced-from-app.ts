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
 * Managed App or an Identity Source from where the user is synced. If enabled, this Managed App or Identity Source can be used for performing delegated authentication.
 * <p>
 **Added In:** 18.2.6
 * <p>
 **SCIM++ Properties:**
 *  - idcsCompositeKey: [value]
 *  - idcsSearchable: true
 *  - multiValued: false
 *  - mutability: readOnly
 *  - required: false
 *  - returned: default
 *  - type: complex
 *  - uniqueness: none
 */
export interface UserExtSyncedFromApp {
  /**
   * App identifier
   * <p>
   **Added In:** 18.2.6
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
   * A label that indicates whether this is an App or IdentitySource.
   * <p>
   **Added In:** 18.2.6
   * <p>
   **SCIM++ Properties:**
   *  - idcsDefaultValue: IdentitySource
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "type": UserExtSyncedFromApp.Type;
  /**
   * App URI
   * <p>
   **Added In:** 18.2.6
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
   * App Display Name
   * <p>
   **Added In:** 18.2.6
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
  "display"?: string;
}

export namespace UserExtSyncedFromApp {
  export enum Type {
    IdentitySource = "IdentitySource",
    App = "App",
    IdentityProvider = "IdentityProvider",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: UserExtSyncedFromApp): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<UserExtSyncedFromApp>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UserExtSyncedFromApp): object {
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

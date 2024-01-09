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
 * A list of kerberos realm users for an Oracle Identity Cloud Service User
 * <p>
 **SCIM++ Properties:**
 *  - idcsCompositeKey: [value]
 *  - multiValued: true
 *  - mutability: readWrite
 *  - required: false
 *  - returned: request
 *  - type: complex
 *  - uniqueness: none
 */
export interface UserExtRealmUsers {
  /**
   * id of the KerberosRealmUser associated with the Oracle Identity Cloud Service User.
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
   * The URI of the corresponding KerberosRealmUser resource associated with the Oracle Identity Cloud Service User.
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
   * Principal Name of the KerberosRealmUser associated with the Oracle Identity Cloud Service User.
   * <p>
   **SCIM++ Properties:**
   *  - idcsPii: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "principalName"?: string;
  /**
   * Realm Name for the KerberosRealmUser associated with the Oracle Identity Cloud Service User.
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
  "realmName"?: string;
}

export namespace UserExtRealmUsers {
  export function getJsonObj(obj: UserExtRealmUsers): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<UserExtRealmUsers>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UserExtRealmUsers): object {
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

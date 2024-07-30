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
 * DBCS instance-level schema-names. Each schema-name is specific to a DB Instance.
 * <p>
 **Added In:** 18.2.4
 * <p>
 **SCIM++ Properties:**
 *  - idcsCompositeKey: [dbInstanceId, schemaName]
 *  - idcsSearchable: true
 *  - multiValued: true
 *  - mutability: readOnly
 *  - required: false
 *  - returned: request
 *  - type: complex
 */
export interface GroupExtInstanceLevelSchemaNames {
  /**
   * App Id of DBCS App instance
   * <p>
   **Added In:** 18.2.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "dbInstanceId": string;
  /**
   * The DBCS schema-name granted to this Group for the DB instance that 'dbInstanceId' specifies.
   * <p>
   **Added In:** 18.2.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "schemaName": string;
}

export namespace GroupExtInstanceLevelSchemaNames {
  export function getJsonObj(obj: GroupExtInstanceLevelSchemaNames): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GroupExtInstanceLevelSchemaNames): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

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
 * The entitlement or privilege that is being granted
 * <p>
 **SCIM++ Properties:**
 *  - idcsCsvAttributeNameMappings: [[columnHeaderName:Entitlement Value, csvColumnForResolvingResourceType:Entitlement Name, mapsTo:entitlement.attributeValue, referencedResourceTypeUniqueAttributeNameMappings:[[mapsFromColumnName:Entitlement Value, resourceTypeAttributeName:displayName], [mapsFromColumnName:App Name, resourceTypeAttributeName:app.display]], resolveValueUsingResourceType:[[resolveBy:AppRole, valueToBeResolved:appRoles]]], [columnHeaderName:Entitlement Name, defaultValue:appRoles, mapsTo:entitlement.attributeName]]
 *  - idcsSearchable: true
 *  - multiValued: false
 *  - mutability: immutable
 *  - required: false
 *  - returned: default
 *  - type: complex
 */
export interface GrantEntitlement {
  /**
   * The name of the attribute whose value (specified by attributeValue) confers privilege within the service-instance (specified by app).
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "attributeName": string;
  /**
   * The value of the attribute (specified by attributeName) that confers privilege within the service-instance (specified by app).  If attributeName is 'appRoles', then attributeValue is the ID of the AppRole.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsCsvAttributeName: Display Name
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "attributeValue": string;
}

export namespace GrantEntitlement {
  export function getJsonObj(obj: GrantEntitlement): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GrantEntitlement): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

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
 * User's instant messaging addresses
 */
export interface UserIms {
  /**
   * User's instant messaging address
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
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
   * A human-readable name, primarily used for display purposes
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "display"?: string;
  /**
   * A label that indicates the attribute's function--for example, 'aim', 'gtalk', or 'mobile'
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "type": UserIms.Type;
  /**
   * A Boolean value that indicates the 'primary' or preferred attribute value for this attribute--for example, the preferred messenger or primary messenger. The primary attribute value 'true' MUST appear no more than once.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "primary"?: boolean;
}

export namespace UserIms {
  export enum Type {
    Aim = "aim",
    Gtalk = "gtalk",
    Icq = "icq",
    Xmpp = "xmpp",
    Msn = "msn",
    Skype = "skype",
    Qq = "qq",
    Yahoo = "yahoo",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: UserIms): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UserIms): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

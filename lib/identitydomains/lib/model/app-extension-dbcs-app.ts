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
 * This extension provides attributes for database service facet of an App
 */
export interface AppExtensionDbcsApp {
  /**
   * The name of the Enterprise Domain that contains any number of DBInstances. If specified, the value must be unique.  A non-null value indicates that App represents a DBDomain. A value of null indicates that the App represents an DB-instance.
   * <p>
   **Added In:** 18.2.2
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: server
   */
  "domainName"?: string;
  "domainApp"?: model.AppDomainApp;
}

export namespace AppExtensionDbcsApp {
  export function getJsonObj(obj: AppExtensionDbcsApp): object {
    const jsonObj = {
      ...obj,
      ...{
        "domainApp": obj.domainApp ? model.AppDomainApp.getJsonObj(obj.domainApp) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppExtensionDbcsApp): object {
    const jsonObj = {
      ...obj,
      ...{
        "domainApp": obj.domainApp
          ? model.AppDomainApp.getDeserializedJsonObj(obj.domainApp)
          : undefined
      }
    };

    return jsonObj;
  }
}

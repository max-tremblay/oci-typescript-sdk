/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * A software package available for install on a managed instance.
 */
export interface AvailablePackageSummary extends model.PackageSummary {
  "packageClassification": string;
}

export namespace AvailablePackageSummary {
  export function getJsonObj(obj: AvailablePackageSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PackageSummary.getJsonObj(obj) as AvailablePackageSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const packageClassification = "AVAILABLE";
  export function getDeserializedJsonObj(
    obj: AvailablePackageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PackageSummary.getDeserializedJsonObj(obj) as AvailablePackageSummary)),
      ...{}
    };

    return jsonObj;
  }
}

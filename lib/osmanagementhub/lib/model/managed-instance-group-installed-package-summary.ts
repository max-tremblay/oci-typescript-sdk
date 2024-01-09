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
 * Summary information pertaining to an installed package on a managed instance group.
 */
export interface ManagedInstanceGroupInstalledPackageSummary {
  /**
   * The name of the package that is installed on the managed instance group.
   *
   */
  "name": string;
  /**
   * The architecture of the package that is installed on the managed instance group.
   *
   */
  "architecture": string;
}

export namespace ManagedInstanceGroupInstalledPackageSummary {
  export function getJsonObj(obj: ManagedInstanceGroupInstalledPackageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagedInstanceGroupInstalledPackageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

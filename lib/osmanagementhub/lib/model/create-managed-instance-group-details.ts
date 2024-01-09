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
 * The information about new managed instance group.
 */
export interface CreateManagedInstanceGroupDetails {
  /**
   * A user-friendly name for the managed instance group. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * Details about the managed instance group.
   */
  "description"?: string;
  /**
   * The OCID of the tenancy containing the managed instance group.
   */
  "compartmentId": string;
  /**
   * The operating system type of the managed instance(s) that this managed instance group will contain.
   *
   */
  "osFamily": model.OsFamily;
  /**
   * The CPU architecture type of the managed instance(s) that this managed instance group will contain.
   *
   */
  "archType": model.ArchType;
  /**
   * The software source vendor name.
   */
  "vendorName": model.VendorName;
  /**
   * The list of software source OCIDs available to the managed instances in the managed instance group.
   */
  "softwareSourceIds": Array<string>;
  /**
   * The list of managed instance OCIDs to be added to the managed instance group.
   */
  "managedInstanceIds"?: Array<string>;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateManagedInstanceGroupDetails {
  export function getJsonObj(obj: CreateManagedInstanceGroupDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateManagedInstanceGroupDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

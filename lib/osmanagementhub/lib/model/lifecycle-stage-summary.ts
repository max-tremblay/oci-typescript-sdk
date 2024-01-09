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
 * Defines the lifecycle stage summary.
 */
export interface LifecycleStageSummary {
  /**
   * The lifecycle stage OCID that is immutable on creation.
   */
  "id"?: string;
  /**
   * The OCID of the tenancy containing the lifecycle stage.
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The OCID of the lifecycle environment for the lifecycle stage.
   */
  "lifecycleEnvironmentId"?: string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "lifecycleEnvironmentDisplayName"?: string;
  /**
   * User specified rank for the lifecycle stage.
   * Rank determines the hierarchy of the lifecycle stages for a given lifecycle environment.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "rank": number;
  /**
   * The operating system type of the target instances.
   */
  "osFamily"?: model.OsFamily;
  /**
   * The CPU architecture of the target instances.
   */
  "archType"?: model.ArchType;
  /**
   * The software source vendor name.
   */
  "vendorName"?: model.VendorName;
  /**
   * The number of managed instances attached to the lifecycle stage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "managedInstances"?: number;
  "softwareSourceId"?: model.SoftwareSourceDetails;
  /**
   * The time the lifecycle stage was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the lifecycle stage was last modified. An RFC3339 formatted datetime string.
   */
  "timeModified"?: Date;
  /**
   * The current state of the lifecycle environment.
   */
  "lifecycleState"?: string;
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
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace LifecycleStageSummary {
  export function getJsonObj(obj: LifecycleStageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "softwareSourceId": obj.softwareSourceId
          ? model.SoftwareSourceDetails.getJsonObj(obj.softwareSourceId)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LifecycleStageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "softwareSourceId": obj.softwareSourceId
          ? model.SoftwareSourceDetails.getDeserializedJsonObj(obj.softwareSourceId)
          : undefined
      }
    };

    return jsonObj;
  }
}

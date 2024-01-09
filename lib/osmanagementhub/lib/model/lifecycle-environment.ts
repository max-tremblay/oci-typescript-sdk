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
 * Contains versioned software source content and lifecycle stages for a managed instance.
 */
export interface LifecycleEnvironment {
  /**
   * The OCID of the resource that is immutable on creation.
   */
  "id": string;
  /**
   * The OCID of the tenancy containing the lifecycle environment.
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * User specified information about the lifecycle environment.
   */
  "description"?: string;
  /**
   * User specified list of lifecycle stages to be created for the lifecycle environment.
   */
  "stages": Array<model.LifecycleStage>;
  /**
   * The list of managed instance OCIDs specified in the lifecycle stage.
   */
  "managedInstanceIds"?: Array<model.ManagedInstanceDetails>;
  /**
   * The current state of the lifecycle environment.
   */
  "lifecycleState": LifecycleEnvironment.LifecycleState;
  /**
   * The operating system type of the target instances.
   */
  "osFamily": model.OsFamily;
  /**
   * The CPU architecture of the target instances.
   */
  "archType": model.ArchType;
  /**
   * The software source vendor name.
   */
  "vendorName": model.VendorName;
  /**
   * The time the lifecycle environment was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time the lifecycle environment was last modified. An RFC3339 formatted datetime string.
   */
  "timeModified"?: Date;
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

export namespace LifecycleEnvironment {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LifecycleEnvironment): object {
    const jsonObj = {
      ...obj,
      ...{
        "stages": obj.stages
          ? obj.stages.map(item => {
              return model.LifecycleStage.getJsonObj(item);
            })
          : undefined,
        "managedInstanceIds": obj.managedInstanceIds
          ? obj.managedInstanceIds.map(item => {
              return model.ManagedInstanceDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LifecycleEnvironment): object {
    const jsonObj = {
      ...obj,
      ...{
        "stages": obj.stages
          ? obj.stages.map(item => {
              return model.LifecycleStage.getDeserializedJsonObj(item);
            })
          : undefined,
        "managedInstanceIds": obj.managedInstanceIds
          ? obj.managedInstanceIds.map(item => {
              return model.ManagedInstanceDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

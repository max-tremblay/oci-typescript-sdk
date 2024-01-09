/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Node details associated with a network.
 */
export interface NodeDetails {
  /**
   * The node host name.
   */
  "hostname": string;
  /**
   * The node IP address.
   */
  "ip": string;
  /**
   * The node virtual IP (VIP) host name.
   */
  "vipHostname"?: string;
  /**
   * The node virtual IP (VIP) address.
   */
  "vip"?: string;
  /**
   * The current state of the VM cluster network nodes.
   * CREATING - The resource is being created
   * REQUIRES_VALIDATION - The resource is created and may not be usable until it is validated.
   * VALIDATING - The resource is being validated and not available to use.
   * VALIDATED - The resource is validated and is available for consumption by VM cluster.
   * VALIDATION_FAILED - The resource validation has failed and might require user input to be corrected.
   * UPDATING - The resource is being updated and not available to use.
   * ALLOCATED - The resource is currently being used by VM cluster.
   * TERMINATING - The resource is being deleted and not available to use.
   * TERMINATED - The resource is deleted and unavailable.
   * FAILED - The resource is in a failed state due to validation or other errors.
   *
   */
  "lifecycleState"?: NodeDetails.LifecycleState;
  /**
   * The Db server associated with the node.
   */
  "dbServerId"?: string;
}

export namespace NodeDetails {
  export enum LifecycleState {
    Creating = "CREATING",
    RequiresValidation = "REQUIRES_VALIDATION",
    Validating = "VALIDATING",
    Validated = "VALIDATED",
    ValidationFailed = "VALIDATION_FAILED",
    Updating = "UPDATING",
    Allocated = "ALLOCATED",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: NodeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NodeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

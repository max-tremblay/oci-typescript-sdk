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
 * Details of the VM cluster network. Applies to Exadata Cloud@Customer instances only.
 *
 */
export interface VmClusterNetworkSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VM cluster network.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
   */
  "exadataInfrastructureId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the associated VM Cluster.
   */
  "vmClusterId"?: string;
  /**
   * The user-friendly name for the VM cluster network. The name does not need to be unique.
   */
  "displayName"?: string;
  /**
   * The SCAN details.
   */
  "scans"?: Array<model.ScanDetails>;
  /**
   * The list of DNS server IP addresses. Maximum of 3 allowed.
   */
  "dns"?: Array<string>;
  /**
   * The list of NTP server IP addresses. Maximum of 3 allowed.
   */
  "ntp"?: Array<string>;
  /**
   * Details of the client and backup networks.
   */
  "vmNetworks"?: Array<model.VmNetworkDetails>;
  /**
   * The SCAN details for DR network
   */
  "drScans"?: Array<model.DrScanDetails>;
  /**
   * The current state of the VM cluster network.
   * CREATING - The resource is being created
   * REQUIRES_VALIDATION - The resource is created and may not be usable until it is validated.
   * VALIDATING - The resource is being validated and not available to use.
   * VALIDATED - The resource is validated and is available for consumption by VM cluster.
   * VALIDATION_FAILED - The resource validation has failed and might require user input to be corrected.
   * UPDATING - The resource is being updated and not available to use.
   * ALLOCATED - The resource is is currently being used by VM cluster.
   * TERMINATING - The resource is being deleted and not available to use.
   * TERMINATED - The resource is deleted and unavailable.
   * FAILED - The resource is in a failed state due to validation or other errors.
   * NEEDS_ATTENTION - The resource is in needs attention state as some of it's child nodes are not validated
   *                   and unusable by VM cluster.
   *
   */
  "lifecycleState"?: VmClusterNetworkSummary.LifecycleState;
  /**
   * The date and time when the VM cluster network was created.
   */
  "timeCreated"?: Date;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace VmClusterNetworkSummary {
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
    NeedsAttention = "NEEDS_ATTENTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VmClusterNetworkSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "scans": obj.scans
          ? obj.scans.map(item => {
              return model.ScanDetails.getJsonObj(item);
            })
          : undefined,

        "vmNetworks": obj.vmNetworks
          ? obj.vmNetworks.map(item => {
              return model.VmNetworkDetails.getJsonObj(item);
            })
          : undefined,
        "drScans": obj.drScans
          ? obj.drScans.map(item => {
              return model.DrScanDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VmClusterNetworkSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "scans": obj.scans
          ? obj.scans.map(item => {
              return model.ScanDetails.getDeserializedJsonObj(item);
            })
          : undefined,

        "vmNetworks": obj.vmNetworks
          ? obj.vmNetworks.map(item => {
              return model.VmNetworkDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "drScans": obj.drScans
          ? obj.drScans.map(item => {
              return model.DrScanDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

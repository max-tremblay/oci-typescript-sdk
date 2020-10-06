/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details for the create Exadata Cloud@Customer VM cluster operation.
 *
 */
export interface CreateVmClusterDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The user-friendly name for the VM cluster. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
   */
  "exadataInfrastructureId": string;
  /**
   * The number of CPU cores to enable for the VM cluster.
   */
  "cpuCoreCount": number;
  /**
   * The memory to be allocated in GBs.
   */
  "memorySizeInGBs"?: number;
  /**
   * The local node storage to be allocated in GBs.
   */
  "dbNodeStorageSizeInGBs"?: number;
  /**
   * The data disk group size to be allocated in TBs.
   */
  "dataStorageSizeInTBs"?: number;
  /**
   * The public key portion of one or more key pairs used for SSH access to the VM cluster.
   */
  "sshPublicKeys": Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VM cluster network.
   */
  "vmClusterNetworkId": string;
  /**
   * The Oracle license model that applies to the VM cluster. The default is BRING_YOUR_OWN_LICENSE.
   *
   */
  "licenseModel"?: CreateVmClusterDetails.LicenseModel;
  /**
   * If true, the sparse disk group is configured for the VM cluster. If false, the sparse disk group is not created.
   *
   */
  "isSparseDiskgroupEnabled"?: boolean;
  /**
   * If true, database backup on local Exadata storage is configured for the VM cluster. If false, database backup on local Exadata storage is not available in the VM cluster.
   *
   */
  "isLocalBackupEnabled"?: boolean;
  /**
   * The time zone to use for the VM cluster. For details, see [DB System Time Zones](https://docs.cloud.oracle.com/Content/Database/References/timezones.htm).
   */
  "timeZone"?: string;
  /**
   * The Oracle Grid Infrastructure software version for the VM cluster.
   */
  "giVersion": string;
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

export namespace CreateVmClusterDetails {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(obj: CreateVmClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

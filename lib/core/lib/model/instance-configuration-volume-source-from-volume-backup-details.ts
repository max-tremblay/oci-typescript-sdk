/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Specifies the volume backup.
 */
export interface InstanceConfigurationVolumeSourceFromVolumeBackupDetails
  extends model.InstanceConfigurationVolumeSourceDetails {
  /**
   * The OCID of the volume backup.
   */
  "id"?: string;

  "type": string;
}

export namespace InstanceConfigurationVolumeSourceFromVolumeBackupDetails {
  export function getJsonObj(
    obj: InstanceConfigurationVolumeSourceFromVolumeBackupDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationVolumeSourceDetails.getJsonObj(
            obj
          ) as InstanceConfigurationVolumeSourceFromVolumeBackupDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "volumeBackup";
  export function getDeserializedJsonObj(
    obj: InstanceConfigurationVolumeSourceFromVolumeBackupDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationVolumeSourceDetails.getDeserializedJsonObj(
            obj
          ) as InstanceConfigurationVolumeSourceFromVolumeBackupDetails)),
      ...{}
    };

    return jsonObj;
  }
}

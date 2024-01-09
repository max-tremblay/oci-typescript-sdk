/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
 * The details of the vault that you want to create.
 */
export interface CreateVaultDetails {
  /**
   * The OCID of the compartment where you want to create this vault.
   */
  "compartmentId": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name for the vault. It does not have to be unique, and it is changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  "externalKeyManagerMetadata"?: model.ExternalKeyManagerMetadata;
  /**
   * The type of vault to create. Each type of vault stores the key with different degrees of isolation and has different options and pricing.
   *
   */
  "vaultType": CreateVaultDetails.VaultType;
}

export namespace CreateVaultDetails {
  export enum VaultType {
    VirtualPrivate = "VIRTUAL_PRIVATE",
    Default = "DEFAULT",
    External = "EXTERNAL"
  }

  export function getJsonObj(obj: CreateVaultDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "externalKeyManagerMetadata": obj.externalKeyManagerMetadata
          ? model.ExternalKeyManagerMetadata.getJsonObj(obj.externalKeyManagerMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateVaultDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "externalKeyManagerMetadata": obj.externalKeyManagerMetadata
          ? model.ExternalKeyManagerMetadata.getDeserializedJsonObj(obj.externalKeyManagerMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
}

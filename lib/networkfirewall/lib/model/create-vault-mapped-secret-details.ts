/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * The request details to be created in the Vault Mapped Secret for the policy.
 */
export interface CreateVaultMappedSecretDetails extends model.CreateMappedSecretDetails {
  /**
   * OCID for the Vault Secret to be used.
   */
  "vaultSecretId": string;
  /**
   * Version number of the secret to be used. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "versionNumber": number;

  "source": string;
}

export namespace CreateVaultMappedSecretDetails {
  export function getJsonObj(
    obj: CreateVaultMappedSecretDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateMappedSecretDetails.getJsonObj(obj) as CreateVaultMappedSecretDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const source = "OCI_VAULT";
  export function getDeserializedJsonObj(
    obj: CreateVaultMappedSecretDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateMappedSecretDetails.getDeserializedJsonObj(
            obj
          ) as CreateVaultMappedSecretDetails)),
      ...{}
    };

    return jsonObj;
  }
}

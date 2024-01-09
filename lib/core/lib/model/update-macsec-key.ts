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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * An object defining the OCID of the Secret held in Vault that represent the MACsec key.
 */
export interface UpdateMacsecKey {
  /**
   * Secret [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) containing the Connectivity Association Key Name (CKN) of this MACsec key.
   *
   */
  "connectivityAssociationNameSecretId": string;
  /**
   * The secret version of the connectivity association name secret in Vault. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "connectivityAssociationNameSecretVersion": number;
  /**
   * Secret [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) containing the Connectivity Association Key (CAK) of this MACsec key.
   *
   */
  "connectivityAssociationKeySecretId": string;
  /**
   * The secret version of the connectivityAssociationKey secret in Vault. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "connectivityAssociationKeySecretVersion": number;
}

export namespace UpdateMacsecKey {
  export function getJsonObj(obj: UpdateMacsecKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMacsecKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

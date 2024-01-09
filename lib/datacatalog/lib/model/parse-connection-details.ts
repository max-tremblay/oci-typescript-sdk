/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Parse connections from the connection metadata and Oracle wallet file.
 * An error will be returned if more than one of connectionPayload, walletSecretId or walletSecretName are present in the request.
 *
 */
export interface ParseConnectionDetails {
  "connectionDetail"?: model.Connection;
  /**
   * The information used to parse the connection from the wallet file payload.
   */
  "connectionPayload"?: string;
  /**
   * OCID of the OCI Vault secret holding the Oracle wallet to parse.
   */
  "walletSecretId"?: string;
  /**
   * Name of the OCI Vault secret holding the Oracle wallet to parse.
   */
  "walletSecretName"?: string;
}

export namespace ParseConnectionDetails {
  export function getJsonObj(obj: ParseConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "connectionDetail": obj.connectionDetail
          ? model.Connection.getJsonObj(obj.connectionDetail)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ParseConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "connectionDetail": obj.connectionDetail
          ? model.Connection.getDeserializedJsonObj(obj.connectionDetail)
          : undefined
      }
    };

    return jsonObj;
  }
}

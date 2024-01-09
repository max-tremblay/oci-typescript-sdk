/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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
 * Type of encryption cipher suite to use for the MACsec connection.
 **/
export enum MacsecEncryptionCipher {
  Aes128Gcm = "AES128_GCM",
  Aes128GcmXpn = "AES128_GCM_XPN",
  Aes256Gcm = "AES256_GCM",
  Aes256GcmXpn = "AES256_GCM_XPN",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace MacsecEncryptionCipher {
  export function getJsonObj(obj: MacsecEncryptionCipher): MacsecEncryptionCipher {
    return obj;
  }
  export function getDeserializedJsonObj(obj: MacsecEncryptionCipher): MacsecEncryptionCipher {
    return obj;
  }
}

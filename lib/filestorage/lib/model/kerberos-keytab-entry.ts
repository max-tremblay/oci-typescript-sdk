/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Details of each keytab entry read from the keytab file.
 *
 */
export interface KerberosKeytabEntry {
  /**
   * Keytab principal.
   */
  "principal": string;
  /**
   * Encryption type with with keytab was generated.
   * Secure: aes128-cts-hmac-sha256-128
   * Secure: aes256-cts-hmac-sha384-192
   * Less Secure: aes128-cts-hmac-sha1-96
   * Less Secure: aes256-cts-hmac-sha1-96
   *
   */
  "encryptionType": KerberosKeytabEntry.EncryptionType;
  /**
   * Kerberos KVNO (key version number) for key in keytab entry. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "keyVersionNumber": number;
}

export namespace KerberosKeytabEntry {
  export enum EncryptionType {
    Aes128CtsHmacSha256128 = "AES128_CTS_HMAC_SHA256_128",
    Aes256CtsHmacSha384192 = "AES256_CTS_HMAC_SHA384_192",
    Aes128CtsHmacSha196 = "AES128_CTS_HMAC_SHA1_96",
    Aes256CtsHmacSha196 = "AES256_CTS_HMAC_SHA1_96",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: KerberosKeytabEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: KerberosKeytabEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

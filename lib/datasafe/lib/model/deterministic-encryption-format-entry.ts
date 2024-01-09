/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
* The Deterministic Encryption masking format encrypts column data using a cryptographic 
* key and Advanced Encryption Standard (AES 128). It can be used to encrypt character and 
* number columns. It can encrypt ASCII data without any input (except seed value), but it 
* needs a regular expression to encrypt non-ASCII data.
* <p>
Deterministic Encryption is a format-preserving, deterministic and reversible masking 
* format, which requires a seed value while submitting a masking work request. Passing 
* the same seed value when masking multiple times or masking different databases ensures 
* that the data is masked deterministically. To learn more, check Deterministic Encryption 
* in the Data Safe documentation. 
* 
*/
export interface DeterministicEncryptionFormatEntry extends model.FormatEntry {
  /**
    * The regular expression to be used for masking. For data with characters in the
* ASCII character set, providing a regular expression is optional. However, it 
* is required if the data contains multi-byte characters. If not provided, an 
* error is returned when a multi-byte character is found.
* <p>
In the case of ASCII characters, if a regular expression is not provided, 
* Deterministic Encryption can encrypt variable-length column values while 
* preserving their original format.
* <p>
If a regular expression is provided, the column values in all the rows must match 
* the regular expression. Deterministic Encryption supports a subset of the regular 
* expression language. It supports encryption of fixed-length strings, and does not 
* support * or + syntax of regular expressions. The encrypted values also match the 
* regular expression, which helps to ensure that the original format is preserved. 
* If an original value does not match the regular expression, Deterministic Encryption 
* might not produce a one-to-one mapping. All non-confirming values are mapped to a 
* single encrypted value, thereby producing a many-to-one mapping. 
* 
    */
  "regularExpression"?: string;

  "type": string;
}

export namespace DeterministicEncryptionFormatEntry {
  export function getJsonObj(
    obj: DeterministicEncryptionFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getJsonObj(obj) as DeterministicEncryptionFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "DETERMINISTIC_ENCRYPTION";
  export function getDeserializedJsonObj(
    obj: DeterministicEncryptionFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getDeserializedJsonObj(obj) as DeterministicEncryptionFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
}

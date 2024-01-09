/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
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
 * Type of enclosure the node is shipped in.
 **/
export enum EnclosureType {
  Ruggadized = "RUGGADIZED",
  NonRuggadized = "NON_RUGGADIZED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace EnclosureType {
  export function getJsonObj(obj: EnclosureType): EnclosureType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: EnclosureType): EnclosureType {
    return obj;
  }
}

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
 * Configuration details for IKE phase one (ISAKMP) configuration parameters.
 */
export interface PhaseOneConfigDetails {
  /**
   * Indicates whether custom configuration is enabled for phase one options.
   */
  "isCustomPhaseOneConfig"?: boolean;
  /**
   * The custom authentication algorithm proposed during phase one tunnel negotiation.
   *
   */
  "authenticationAlgorithm"?: PhaseOneConfigDetails.AuthenticationAlgorithm;
  /**
   * The custom encryption algorithm proposed during phase one tunnel negotiation.
   *
   */
  "encryptionAlgorithm"?: PhaseOneConfigDetails.EncryptionAlgorithm;
  /**
   * The custom Diffie-Hellman group proposed during phase one tunnel negotiation.
   *
   */
  "diffieHelmanGroup"?: PhaseOneConfigDetails.DiffieHelmanGroup;
  /**
   * Internet key association (IKE) session key lifetime in seconds for IPSec phase one. The default is 28800 which is equivalent to 8 hours.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lifetimeInSeconds"?: number;
}

export namespace PhaseOneConfigDetails {
  export enum AuthenticationAlgorithm {
    Sha2384 = "SHA2_384",
    Sha2256 = "SHA2_256",
    Sha196 = "SHA1_96"
  }

  export enum EncryptionAlgorithm {
    Aes256Cbc = "AES_256_CBC",
    Aes192Cbc = "AES_192_CBC",
    Aes128Cbc = "AES_128_CBC"
  }

  export enum DiffieHelmanGroup {
    Group2 = "GROUP2",
    Group5 = "GROUP5",
    Group14 = "GROUP14",
    Group19 = "GROUP19",
    Group20 = "GROUP20",
    Group24 = "GROUP24"
  }

  export function getJsonObj(obj: PhaseOneConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PhaseOneConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

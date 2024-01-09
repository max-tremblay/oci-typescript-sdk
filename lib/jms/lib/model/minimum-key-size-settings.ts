/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * test
 */
export interface MinimumKeySizeSettings {
  /**
   * Updates the minimum key size for the specified encryption algorithm.
   * The JDK property jdk.tls.disabledAlgorithms will be updated with the following supported actions:
   * - Changing minimum key length for Diffie-Hellman
   *
   */
  "tls"?: Array<model.KeySizeAlgorithm>;
  /**
   * Updates the minimum key size for the specified encryption algorithm.
   * The JDK property jdk.jar.disabledAlgorithms will be updated with the following supported actions:
   * - Changing minimum key length for RSA signed jars
   * - Changing minimum key length for EC
   * - Changing minimum key length for DSA
   *
   */
  "jar"?: Array<model.KeySizeAlgorithm>;
  /**
   * Updates the minimum key size for the specified encryption algorithm.
   * The JDK property jdk.certpath.disabledAlgorithms will be updated with the following supported actions:
   * - Changing minimum key length for RSA signed jars
   * - Changing minimum key length for EC
   * - Changing minimum key length for DSA
   *
   */
  "certpath"?: Array<model.KeySizeAlgorithm>;
}

export namespace MinimumKeySizeSettings {
  export function getJsonObj(obj: MinimumKeySizeSettings): object {
    const jsonObj = {
      ...obj,
      ...{
        "tls": obj.tls
          ? obj.tls.map(item => {
              return model.KeySizeAlgorithm.getJsonObj(item);
            })
          : undefined,
        "jar": obj.jar
          ? obj.jar.map(item => {
              return model.KeySizeAlgorithm.getJsonObj(item);
            })
          : undefined,
        "certpath": obj.certpath
          ? obj.certpath.map(item => {
              return model.KeySizeAlgorithm.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MinimumKeySizeSettings): object {
    const jsonObj = {
      ...obj,
      ...{
        "tls": obj.tls
          ? obj.tls.map(item => {
              return model.KeySizeAlgorithm.getDeserializedJsonObj(item);
            })
          : undefined,
        "jar": obj.jar
          ? obj.jar.map(item => {
              return model.KeySizeAlgorithm.getDeserializedJsonObj(item);
            })
          : undefined,
        "certpath": obj.certpath
          ? obj.certpath.map(item => {
              return model.KeySizeAlgorithm.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

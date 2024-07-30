/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
 * Entity Object Reference
 */
export interface Entity {
  /**
   * Entity value
   */
  "entityValue": string;
  /**
   * List of pronunciations (minimum 1, maximum 255)
   */
  "pronunciations"?: Array<model.Pronunciation>;
  /**
   * Entity weight Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "weight"?: number;
}

export namespace Entity {
  export function getJsonObj(obj: Entity): object {
    const jsonObj = {
      ...obj,
      ...{
        "pronunciations": obj.pronunciations
          ? obj.pronunciations.map(item => {
              return model.Pronunciation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Entity): object {
    const jsonObj = {
      ...obj,
      ...{
        "pronunciations": obj.pronunciations
          ? obj.pronunciations.map(item => {
              return model.Pronunciation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

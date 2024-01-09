/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * Result of entities detect call.
 */
export interface DetectLanguageEntitiesResult {
  /**
   * List of detected entities.
   */
  "entities": Array<model.Entity>;
}

export namespace DetectLanguageEntitiesResult {
  export function getJsonObj(obj: DetectLanguageEntitiesResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "entities": obj.entities
          ? obj.entities.map(item => {
              return model.Entity.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DetectLanguageEntitiesResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "entities": obj.entities
          ? obj.entities.map(item => {
              return model.Entity.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

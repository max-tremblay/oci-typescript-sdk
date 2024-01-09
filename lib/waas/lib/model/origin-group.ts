/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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

export interface OriginGroup {
  /**
   * The list of objects containing origin references and additional properties.
   */
  "origins"?: Array<model.OriginGroupOrigins>;
}

export namespace OriginGroup {
  export function getJsonObj(obj: OriginGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "origins": obj.origins
          ? obj.origins.map(item => {
              return model.OriginGroupOrigins.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OriginGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "origins": obj.origins
          ? obj.origins.map(item => {
              return model.OriginGroupOrigins.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

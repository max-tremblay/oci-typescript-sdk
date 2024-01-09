/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Properties that specify where in Object Storage to export the Digital Assistant to.
 */
export interface ExportDigitalAssistantDetails {
  "target": model.StorageLocation;
}

export namespace ExportDigitalAssistantDetails {
  export function getJsonObj(obj: ExportDigitalAssistantDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "target": obj.target ? model.StorageLocation.getJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExportDigitalAssistantDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "target": obj.target ? model.StorageLocation.getDeserializedJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
}

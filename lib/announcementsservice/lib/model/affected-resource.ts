/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
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
 * The resource affected by the event described in the announcement.
 *
 */
export interface AffectedResource {
  /**
   * The OCID of the affected resource.
   */
  "resourceId": string;
  /**
   * The friendly name of the resource.
   */
  "resourceName": string;
  /**
   * The region where the affected resource exists.
   */
  "region": string;
  /**
   * Additional properties associated with the resource.
   */
  "additionalProperties"?: Array<model.Property>;
}

export namespace AffectedResource {
  export function getJsonObj(obj: AffectedResource): object {
    const jsonObj = {
      ...obj,
      ...{
        "additionalProperties": obj.additionalProperties
          ? obj.additionalProperties.map(item => {
              return model.Property.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AffectedResource): object {
    const jsonObj = {
      ...obj,
      ...{
        "additionalProperties": obj.additionalProperties
          ? obj.additionalProperties.map(item => {
              return model.Property.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

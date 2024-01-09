/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Control Plane API
 * OpenAPI spec version: 20191010
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
 * An Ordering Service Node details
 */
export interface Osn {
  /**
   * OSN identifier
   */
  "osnKey": string;
  /**
   * Availability Domain of OSN
   */
  "ad": string;
  "ocpuAllocationParam"?: model.OcpuAllocationNumberParam;
  /**
   * The current state of the OSN.
   */
  "lifecycleState"?: Osn.LifecycleState;
}

export namespace Osn {
  export enum LifecycleState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Osn): object {
    const jsonObj = {
      ...obj,
      ...{
        "ocpuAllocationParam": obj.ocpuAllocationParam
          ? model.OcpuAllocationNumberParam.getJsonObj(obj.ocpuAllocationParam)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Osn): object {
    const jsonObj = {
      ...obj,
      ...{
        "ocpuAllocationParam": obj.ocpuAllocationParam
          ? model.OcpuAllocationNumberParam.getDeserializedJsonObj(obj.ocpuAllocationParam)
          : undefined
      }
    };

    return jsonObj;
  }
}

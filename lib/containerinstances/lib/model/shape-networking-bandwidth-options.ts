/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * For a flexible shape, the amount of networking bandwidth available for container instances that use this shape.
 *
 */
export interface ShapeNetworkingBandwidthOptions {
  /**
   * The minimum amount of networking bandwidth, in gigabits per second.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minInGbps": number;
  /**
   * The maximum amount of networking bandwidth, in gigabits per second.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxInGbps": number;
  /**
   * The default amount of networking bandwidth per OCPU, in gigabits per second.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "defaultPerOcpuInGbps": number;
}

export namespace ShapeNetworkingBandwidthOptions {
  export function getJsonObj(obj: ShapeNetworkingBandwidthOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ShapeNetworkingBandwidthOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Configuration options for the Measured Boot feature.
 *
 */
export interface ShapeMeasuredBootOptions {
  /**
   * Boolean values that indicate whether the Measured Boot feature can be enabled or disabled.
   *
   */
  "allowedValues"?: Array<boolean>;
  /**
   * Whether the Measured Boot feature is enabled by default.
   *
   */
  "isDefaultEnabled"?: boolean;
}

export namespace ShapeMeasuredBootOptions {
  export function getJsonObj(obj: ShapeMeasuredBootOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ShapeMeasuredBootOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

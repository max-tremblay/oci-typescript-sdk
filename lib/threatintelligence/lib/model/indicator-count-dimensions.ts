/**
 * Threat Intelligence API
 * Use the Threat Intelligence API to search for information about known threat indicators, including suspicious IP addresses, domain names, and other digital fingerprints. Threat Intelligence is a managed database of curated threat intelligence that comes from first party Oracle security insights, open source feeds, and vendor-procured data. For more information, see the [Threat Intelligence documentation](/iaas/Content/threat-intel/home.htm).
 * OpenAPI spec version: 20220901
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
 * The indicator dimension that was counted, such as the indicator type.
 */
export interface IndicatorCountDimensions {
  /**
   * The compartment OCID that contains the indicator type.
   */
  "compartmentId"?: string;
  /**
   * The indicator type that was counted.
   */
  "type"?: model.IndicatorType;
}

export namespace IndicatorCountDimensions {
  export function getJsonObj(obj: IndicatorCountDimensions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IndicatorCountDimensions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

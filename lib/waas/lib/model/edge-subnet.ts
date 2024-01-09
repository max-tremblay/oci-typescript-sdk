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

/**
 * The details about an edge node subnet.
 */
export interface EdgeSubnet {
  /**
   * An edge node subnet. This can include /24 or /8 addresses.
   */
  "cidr"?: string;
  /**
   * The date and time the last change was made to the indicated edge node subnet, expressed in RFC 3339 timestamp format.
   */
  "timeModified"?: Date;
  /**
   * The name of the region containing the indicated subnet.
   */
  "region"?: string;
}

export namespace EdgeSubnet {
  export function getJsonObj(obj: EdgeSubnet): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EdgeSubnet): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

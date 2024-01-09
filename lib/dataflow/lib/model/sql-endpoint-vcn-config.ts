/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * The VCN configuration for VCN network type selection.
 */
export interface SqlEndpointVcnConfig extends model.SqlEndpointNetworkConfiguration {
  /**
   * The VCN OCID.
   */
  "vcnId": string;
  /**
   * The VCN Subnet OCID.
   */
  "subnetId": string;
  /**
   * The host name prefix.
   */
  "hostNamePrefix"?: string;
  /**
   * The OCIDs of Network Security Groups (NSGs).
   */
  "nsgIds"?: Array<string>;
  /**
   * Ip Address of private endpoint
   */
  "privateEndpointIp"?: string;

  "networkType": string;
}

export namespace SqlEndpointVcnConfig {
  export function getJsonObj(obj: SqlEndpointVcnConfig, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SqlEndpointNetworkConfiguration.getJsonObj(obj) as SqlEndpointVcnConfig)),
      ...{}
    };

    return jsonObj;
  }
  export const networkType = "VCN";
  export function getDeserializedJsonObj(
    obj: SqlEndpointVcnConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SqlEndpointNetworkConfiguration.getDeserializedJsonObj(
            obj
          ) as SqlEndpointVcnConfig)),
      ...{}
    };

    return jsonObj;
  }
}

/**
 * Oracle Integration API
 * Oracle Integration API.
 * OpenAPI spec version: 20190131
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
 * Public endpoint configuration details.
 *
 */
export interface PublicEndpointDetails extends model.NetworkEndpointDetails {
  /**
   * Source IP addresses or IP address ranges ingress rules. (ex: \"168.122.59.5\", \"10.20.30.0/26\")
   * An invalid IP or CIDR block will result in a 400 response.
   *
   */
  "allowlistedHttpIps"?: Array<string>;
  /**
   * Virtual Cloud Networks allowed to access this network endpoint.
   *
   */
  "allowlistedHttpVcns"?: Array<model.VirtualCloudNetwork>;
  /**
   * The Integration service's VCN is allow-listed to allow integrations to call back into other integrations
   */
  "isIntegrationVcnAllowlisted"?: boolean;

  "networkEndpointType": string;
}

export namespace PublicEndpointDetails {
  export function getJsonObj(obj: PublicEndpointDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.NetworkEndpointDetails.getJsonObj(obj) as PublicEndpointDetails)),
      ...{
        "allowlistedHttpVcns": obj.allowlistedHttpVcns
          ? obj.allowlistedHttpVcns.map(item => {
              return model.VirtualCloudNetwork.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const networkEndpointType = "PUBLIC";
  export function getDeserializedJsonObj(
    obj: PublicEndpointDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.NetworkEndpointDetails.getDeserializedJsonObj(obj) as PublicEndpointDetails)),
      ...{
        "allowlistedHttpVcns": obj.allowlistedHttpVcns
          ? obj.allowlistedHttpVcns.map(item => {
              return model.VirtualCloudNetwork.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

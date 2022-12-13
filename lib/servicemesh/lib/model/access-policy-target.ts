/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Target of the access policy. This can either be the source or the destination of the traffic.
 */
export interface AccessPolicyTarget {
  "type": string;
}

export namespace AccessPolicyTarget {
  export function getJsonObj(obj: AccessPolicyTarget): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VIRTUAL_SERVICE":
          return model.VirtualServiceAccessPolicyTarget.getJsonObj(
            <model.VirtualServiceAccessPolicyTarget>(<object>jsonObj),
            true
          );
        case "ALL_VIRTUAL_SERVICES":
          return model.AllVirtualServicesAccessPolicyTarget.getJsonObj(
            <model.AllVirtualServicesAccessPolicyTarget>(<object>jsonObj),
            true
          );
        case "EXTERNAL_SERVICE":
          return model.ExternalServiceAccessPolicyTarget.getJsonObj(
            <model.ExternalServiceAccessPolicyTarget>(<object>jsonObj),
            true
          );
        case "INGRESS_GATEWAY":
          return model.IngressGatewayAccessPolicyTarget.getJsonObj(
            <model.IngressGatewayAccessPolicyTarget>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AccessPolicyTarget): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VIRTUAL_SERVICE":
          return model.VirtualServiceAccessPolicyTarget.getDeserializedJsonObj(
            <model.VirtualServiceAccessPolicyTarget>(<object>jsonObj),
            true
          );
        case "ALL_VIRTUAL_SERVICES":
          return model.AllVirtualServicesAccessPolicyTarget.getDeserializedJsonObj(
            <model.AllVirtualServicesAccessPolicyTarget>(<object>jsonObj),
            true
          );
        case "EXTERNAL_SERVICE":
          return model.ExternalServiceAccessPolicyTarget.getDeserializedJsonObj(
            <model.ExternalServiceAccessPolicyTarget>(<object>jsonObj),
            true
          );
        case "INGRESS_GATEWAY":
          return model.IngressGatewayAccessPolicyTarget.getDeserializedJsonObj(
            <model.IngressGatewayAccessPolicyTarget>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}

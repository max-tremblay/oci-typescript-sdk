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
 * Rule for routing incoming Virtual Service traffic with TLS_PASSTHROUGH protocol
 */
export interface TlsPassthroughVirtualServiceTrafficRouteRuleDetails
  extends model.VirtualServiceTrafficRouteRuleDetails {
  "type": string;
}

export namespace TlsPassthroughVirtualServiceTrafficRouteRuleDetails {
  export function getJsonObj(
    obj: TlsPassthroughVirtualServiceTrafficRouteRuleDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.VirtualServiceTrafficRouteRuleDetails.getJsonObj(
            obj
          ) as TlsPassthroughVirtualServiceTrafficRouteRuleDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "TLS_PASSTHROUGH";
  export function getDeserializedJsonObj(
    obj: TlsPassthroughVirtualServiceTrafficRouteRuleDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.VirtualServiceTrafficRouteRuleDetails.getDeserializedJsonObj(
            obj
          ) as TlsPassthroughVirtualServiceTrafficRouteRuleDetails)),
      ...{}
    };

    return jsonObj;
  }
}

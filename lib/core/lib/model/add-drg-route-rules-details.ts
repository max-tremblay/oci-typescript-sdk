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
 * Details used in a request to add static routes to a DRG route table.
 *
 */
export interface AddDrgRouteRulesDetails {
  /**
   * The collection of static rules used to insert routes into the DRG route table.
   *
   */
  "routeRules"?: Array<model.AddDrgRouteRuleDetails>;
}

export namespace AddDrgRouteRulesDetails {
  export function getJsonObj(obj: AddDrgRouteRulesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "routeRules": obj.routeRules
          ? obj.routeRules.map(item => {
              return model.AddDrgRouteRuleDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddDrgRouteRulesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "routeRules": obj.routeRules
          ? obj.routeRules.map(item => {
              return model.AddDrgRouteRuleDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

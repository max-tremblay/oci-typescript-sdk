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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Defines the relationship between Virtual Network topology entities.
 */
export interface TopologyEntityRelationship {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the first entity in the relationship.
   */
  "id1": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the second entity in the relationship.
   */
  "id2": string;

  "type": string;
}

export namespace TopologyEntityRelationship {
  export function getJsonObj(obj: TopologyEntityRelationship): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "ROUTES_TO":
          return model.TopologyRoutesToEntityRelationship.getJsonObj(
            <model.TopologyRoutesToEntityRelationship>(<object>jsonObj),
            true
          );
        case "ASSOCIATED_WITH":
          return model.TopologyAssociatedWithEntityRelationship.getJsonObj(
            <model.TopologyAssociatedWithEntityRelationship>(<object>jsonObj),
            true
          );
        case "CONTAINS":
          return model.TopologyContainsEntityRelationship.getJsonObj(
            <model.TopologyContainsEntityRelationship>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TopologyEntityRelationship): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "ROUTES_TO":
          return model.TopologyRoutesToEntityRelationship.getDeserializedJsonObj(
            <model.TopologyRoutesToEntityRelationship>(<object>jsonObj),
            true
          );
        case "ASSOCIATED_WITH":
          return model.TopologyAssociatedWithEntityRelationship.getDeserializedJsonObj(
            <model.TopologyAssociatedWithEntityRelationship>(<object>jsonObj),
            true
          );
        case "CONTAINS":
          return model.TopologyContainsEntityRelationship.getDeserializedJsonObj(
            <model.TopologyContainsEntityRelationship>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}

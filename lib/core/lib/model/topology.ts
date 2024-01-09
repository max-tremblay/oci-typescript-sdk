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
 * Defines the representation of a virtual network topology.
 */
export interface Topology {
  /**
   * Lists entities comprising the virtual network topology.
   */
  "entities": Array<any>;
  /**
   * Lists relationships between entities in the virtual network topology.
   */
  "relationships": Array<model.TopologyEntityRelationship>;
  /**
   * Lists entities that are limited during ingestion.
   * The values for the items in the list are the entity type names of the limitedEntities.
   * Example: `vcn`
   *
   */
  "limitedEntities": Array<string>;
  /**
   * Records when the virtual network topology was created, in [RFC3339](https://tools.ietf.org/html/rfc3339) format for date and time.
   */
  "timeCreated": Date;

  "type": string;
}

export namespace Topology {
  export function getJsonObj(obj: Topology): object {
    const jsonObj = {
      ...obj,
      ...{
        "relationships": obj.relationships
          ? obj.relationships.map(item => {
              return model.TopologyEntityRelationship.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VCN":
          return model.VcnTopology.getJsonObj(<model.VcnTopology>(<object>jsonObj), true);
        case "NETWORKING":
          return model.NetworkingTopology.getJsonObj(
            <model.NetworkingTopology>(<object>jsonObj),
            true
          );
        case "SUBNET":
          return model.SubnetTopology.getJsonObj(<model.SubnetTopology>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Topology): object {
    const jsonObj = {
      ...obj,
      ...{
        "relationships": obj.relationships
          ? obj.relationships.map(item => {
              return model.TopologyEntityRelationship.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VCN":
          return model.VcnTopology.getDeserializedJsonObj(
            <model.VcnTopology>(<object>jsonObj),
            true
          );
        case "NETWORKING":
          return model.NetworkingTopology.getDeserializedJsonObj(
            <model.NetworkingTopology>(<object>jsonObj),
            true
          );
        case "SUBNET":
          return model.SubnetTopology.getDeserializedJsonObj(
            <model.SubnetTopology>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}

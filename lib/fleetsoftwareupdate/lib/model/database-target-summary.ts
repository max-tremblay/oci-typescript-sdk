/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Details of a Database target member of a Exadata Fleet Update Collection.
 * Stored references of the resource documented in
 *   https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/Database/
 *
 */
export interface DatabaseTargetSummary extends model.TargetDetails {
  /**
   * OCID of the database home.
   *
   */
  "dbHomeId"?: string;
  /**
   * OCID of the related VM Cluster or Cloud VM Cluster.
   *
   */
  "vmClusterId"?: string;
  /**
   * OCID of the related Exadata Infrastructure or Cloud Exadata Infrastructure resource.
   *
   */
  "infrastructureId"?: string;
  /**
   * OCID of the Database sofware image.
   *
   */
  "softwareImageId"?: string;

  "entityType": string;
}

export namespace DatabaseTargetSummary {
  export function getJsonObj(obj: DatabaseTargetSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TargetDetails.getJsonObj(obj) as DatabaseTargetSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const entityType = "DATABASE";
  export function getDeserializedJsonObj(
    obj: DatabaseTargetSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetDetails.getDeserializedJsonObj(obj) as DatabaseTargetSummary)),
      ...{}
    };

    return jsonObj;
  }
}

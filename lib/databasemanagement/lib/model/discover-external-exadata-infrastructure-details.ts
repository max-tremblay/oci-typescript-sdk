/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The connection details and the discovery options for the Exadata discovery.
 */
export interface DiscoverExternalExadataInfrastructureDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The type of discovery.
   */
  "discoveryType": DiscoverExternalExadataInfrastructureDetails.DiscoveryType;
  /**
   * The list of the DB system identifiers.
   */
  "dbSystemIds": Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure. This is applicable for rediscovery only.
   */
  "exadataInfrastructureId"?: string;
}

export namespace DiscoverExternalExadataInfrastructureDetails {
  export enum DiscoveryType {
    New = "NEW",
    Override = "OVERRIDE"
  }

  export function getJsonObj(obj: DiscoverExternalExadataInfrastructureDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: DiscoverExternalExadataInfrastructureDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

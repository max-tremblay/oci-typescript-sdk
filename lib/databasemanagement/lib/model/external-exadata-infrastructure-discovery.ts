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
 * The result of the Exadata infrastructure discovery.
 */
export interface ExternalExadataInfrastructureDiscovery extends model.EntityDiscovered {
  /**
   * The unique key of the discovery request.
   */
  "discoveryKey": string;
  /**
   * The Oracle license model that applies to the database management resources.
   *
   */
  "licenseModel"?: ExternalExadataInfrastructureDiscovery.LicenseModel;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * The size of the Exadata infrastructure.
   */
  "rackSize"?: ExternalExadataInfrastructureDiscovery.RackSize;
  /**
   * The Oracle home path of the Exadata infrastructure.
   */
  "gridHomePath"?: string;
  /**
   * The list of DB systems in the Exadata infrastructure.
   */
  "dbSystems"?: Array<model.ExternalDatabaseSystemDiscoverySummary>;
  "storageGrid"?: model.ExternalStorageGridDiscoverySummary;
  /**
   * The list of storage servers in the Exadata infrastructure.
   */
  "storageServers"?: Array<model.ExternalStorageServerDiscoverySummary>;

  "entityType": string;
}

export namespace ExternalExadataInfrastructureDiscovery {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RackSize {
    Full = "FULL",
    Half = "HALF",
    Quarter = "QUARTER",
    Eighth = "EIGHTH",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: ExternalExadataInfrastructureDiscovery,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.EntityDiscovered.getJsonObj(obj) as ExternalExadataInfrastructureDiscovery)),
      ...{
        "dbSystems": obj.dbSystems
          ? obj.dbSystems.map(item => {
              return model.ExternalDatabaseSystemDiscoverySummary.getJsonObj(item);
            })
          : undefined,
        "storageGrid": obj.storageGrid
          ? model.ExternalStorageGridDiscoverySummary.getJsonObj(obj.storageGrid)
          : undefined,
        "storageServers": obj.storageServers
          ? obj.storageServers.map(item => {
              return model.ExternalStorageServerDiscoverySummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const entityType = "INFRASTRUCTURE_DISCOVER";
  export function getDeserializedJsonObj(
    obj: ExternalExadataInfrastructureDiscovery,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.EntityDiscovered.getDeserializedJsonObj(
            obj
          ) as ExternalExadataInfrastructureDiscovery)),
      ...{
        "dbSystems": obj.dbSystems
          ? obj.dbSystems.map(item => {
              return model.ExternalDatabaseSystemDiscoverySummary.getDeserializedJsonObj(item);
            })
          : undefined,
        "storageGrid": obj.storageGrid
          ? model.ExternalStorageGridDiscoverySummary.getDeserializedJsonObj(obj.storageGrid)
          : undefined,
        "storageServers": obj.storageServers
          ? obj.storageServers.map(item => {
              return model.ExternalStorageServerDiscoverySummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

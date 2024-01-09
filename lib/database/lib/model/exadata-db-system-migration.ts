/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Information about the Exadata DB system migration. The migration is used to move the Exadata Cloud Service instance from the DB system resource model to the new cloud Exadata infrastructure resource model.
 *
 */
export interface ExadataDbSystemMigration {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system.
   */
  "dbSystemId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the cloud VM cluster.
   */
  "cloudVmClusterId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure.
   */
  "cloudExadataInfrastructureId": string;
  /**
   * The details of addtional resources related to the migration.
   */
  "additionalMigrations"?: Array<model.ExadataDbSystemMigrationSummary>;
}

export namespace ExadataDbSystemMigration {
  export function getJsonObj(obj: ExadataDbSystemMigration): object {
    const jsonObj = {
      ...obj,
      ...{
        "additionalMigrations": obj.additionalMigrations
          ? obj.additionalMigrations.map(item => {
              return model.ExadataDbSystemMigrationSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExadataDbSystemMigration): object {
    const jsonObj = {
      ...obj,
      ...{
        "additionalMigrations": obj.additionalMigrations
          ? obj.additionalMigrations.map(item => {
              return model.ExadataDbSystemMigrationSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

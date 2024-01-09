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
* The target Exadata Infrastructure system software version for an infrastructure resource. Applies to Exadata Cloud@Customer and Exadata Cloud instances only.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access,
* see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface InfrastructureTargetVersionSummary {
  /**
   * The history entry of the target system software version for the database server patching operation.
   */
  "targetDbVersionHistoryEntry": Array<string>;
  /**
   * The history entry of the target storage cell system software version for the storage cell patching operation.
   */
  "targetStorageVersionHistoryEntry": Array<string>;
  /**
   * The resource type of the target Exadata infrastructure resource that will receive the system software update.
   */
  "targetResourceType"?: InfrastructureTargetVersionSummary.TargetResourceType;
  /**
   * The OCID of the target Exadata Infrastructure resource that will receive the maintenance update.
   */
  "targetResourceId"?: string;
}

export namespace InfrastructureTargetVersionSummary {
  export enum TargetResourceType {
    ExadataDbSystem = "EXADATA_DB_SYSTEM",
    CloudExadataInfrastructure = "CLOUD_EXADATA_INFRASTRUCTURE",
    ExaccInfrastructure = "EXACC_INFRASTRUCTURE"
  }

  export function getJsonObj(obj: InfrastructureTargetVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InfrastructureTargetVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

/**
 * PGSQL Control Plane API
 * Use the OCI Database with PostgreSQL API to manage resources such as database systems, database nodes, backups, and configurations. 
For information, see the user guide documentation for the [service](/iaas/Content/postgresql/home.htm).

 * OpenAPI spec version: 20220915
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
 * Summary information for a backup.
 */
export interface BackupSummary {
  /**
   * A unique identifier for the backup. Immutable on creation.
   */
  "id": string;
  /**
   * A user-friendly display name for the backup. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that contains the backup.
   */
  "compartmentId": string;
  /**
    * The date and time the backup was created, expressed in
* [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the backup was updated, expressed in
* [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeUpdated"?: Date;
  /**
   * The current state of the backup.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Specifies whether the backup was created manually, taken on schedule defined in the a backup policy, or copied from the remote location.
   */
  "sourceType"?: string;
  /**
   * The size of the backup, in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "backupSize"?: number;
  /**
   * The backup's source database system's [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "dbSystemId"?: string;
  /**
   * Backup retention period in days. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retentionPeriod"?: number;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace BackupSummary {
  export function getJsonObj(obj: BackupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

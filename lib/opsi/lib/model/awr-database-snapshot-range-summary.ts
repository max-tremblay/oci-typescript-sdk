/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * The summary data for a range of AWR snapshots.
 */
export interface AwrDatabaseSnapshotRangeSummary {
  /**
   * The internal ID of the database. The internal ID of the database is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /awrHubs/{awrHubId}/awrDatabases
   *
   */
  "awrSourceDatabaseIdentifier": string;
  /**
   * The name of the database.
   */
  "dbName": string;
  /**
   * The database instance numbers.
   */
  "instanceList"?: Array<number>;
  /**
   * The timestamp of the database startup.
   */
  "timeDbStartup"?: Date;
  /**
   * The start time of the earliest snapshot.
   */
  "timeFirstSnapshotBegin"?: Date;
  /**
   * The end time of the latest snapshot.
   */
  "timeLatestSnapshotEnd"?: Date;
  /**
   * The ID of the earliest snapshot. The snapshot identifier is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /awrHubs/{awrHubId}/awrDatabaseSnapshots
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "firstSnapshotIdentifier"?: number;
  /**
   * The ID of the latest snapshot. The snapshot identifier is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /awrHubs/{awrHubId}/awrDatabaseSnapshots
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "latestSnapshotIdentifier"?: number;
  /**
   * The total number of snapshots. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "snapshotCount"?: number;
  /**
   * The interval time between snapshots (in minutes). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "snapshotIntervalInMin"?: number;
  /**
   * The version of the database.
   */
  "dbVersion"?: string;
  /**
   * The time zone of the snapshot. sample -  snapshotTimezone=+0 00:00:00
   */
  "snapshotTimezone"?: string;
}

export namespace AwrDatabaseSnapshotRangeSummary {
  export function getJsonObj(obj: AwrDatabaseSnapshotRangeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrDatabaseSnapshotRangeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

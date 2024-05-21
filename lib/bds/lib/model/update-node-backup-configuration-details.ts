/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
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
 * The information about the NodeBackupConfiguration that is being updated.
 */
export interface UpdateNodeBackupConfigurationDetails {
  "levelTypeDetails"?: model.NodeTypeLevelDetails | model.NodeLevelDetails;
  /**
   * A user-friendly name. Only ASCII alphanumeric characters with no spaces allowed. The name does not have to be unique, and it may be changed. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The time zone of the execution schedule, in IANA time zone database name format
   */
  "timezone"?: string;
  /**
   * Day/time recurrence (specified following RFC 5545) at which to trigger the backup process. Currently only DAILY, WEEKLY and MONTHLY frequency is supported. Days of the week are specified using BYDAY field. Time of the day is specified using BYHOUR. Other fields are not supported.
   *
   */
  "schedule"?: string;
  /**
   * Number of backup copies to retain. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfBackupsToRetain"?: number;
  /**
   * Incremental backup type includes only the changes since the last backup. Full backup type includes all changes since the volume was created.
   */
  "backupType"?: string;
}

export namespace UpdateNodeBackupConfigurationDetails {
  export function getJsonObj(obj: UpdateNodeBackupConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "levelTypeDetails": obj.levelTypeDetails
          ? model.LevelTypeDetails.getJsonObj(obj.levelTypeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateNodeBackupConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "levelTypeDetails": obj.levelTypeDetails
          ? model.LevelTypeDetails.getDeserializedJsonObj(obj.levelTypeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}

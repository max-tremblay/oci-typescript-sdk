/**
 * PGSQL Control Plane API
 * A description of the PGSQL Control Plane API
 * OpenAPI spec version: 20220915
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Monthly backup policy
 */
export interface MonthlyBackupPolicy extends model.BackupPolicy {
  /**
   * Hour of the day when backup starts.
   */
  "backupStart": string;
  /**
   * Days of the month when backup should start.
   * If the day is greater last day of the current month, then it will be triggered on the last day of the current month
   *
   */
  "daysOfTheMonth": Array<number>;

  "kind": string;
}

export namespace MonthlyBackupPolicy {
  export function getJsonObj(obj: MonthlyBackupPolicy, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BackupPolicy.getJsonObj(obj) as MonthlyBackupPolicy)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "MONTHLY";
  export function getDeserializedJsonObj(
    obj: MonthlyBackupPolicy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BackupPolicy.getDeserializedJsonObj(obj) as MonthlyBackupPolicy)),
      ...{}
    };

    return jsonObj;
  }
}

/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * User-defined service variables set only at DB system initialization. These variables cannot be changed later at runtime.
 */
export interface InitializationVariables {
  /**
    * 
* Represents the MySQL server system variable lower_case_table_names (https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lower_case_table_names).
* <p>
lowerCaseTableNames controls case-sensitivity of tables and schema names and how they are stored in the DB System.
* <p>
Valid values are:
*   - CASE_SENSITIVE - (default) Table and schema name comparisons are case-sensitive and stored as specified. (lower_case_table_names=0)
*   - CASE_INSENSITIVE_LOWERCASE - Table and schema name comparisons are not case-sensitive and stored in lowercase. (lower_case_table_names=1)
* 
    */
  "lowerCaseTableNames"?: InitializationVariables.LowerCaseTableNames;
}

export namespace InitializationVariables {
  export enum LowerCaseTableNames {
    CaseSensitive = "CASE_SENSITIVE",
    CaseInsensitiveLowercase = "CASE_INSENSITIVE_LOWERCASE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InitializationVariables): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InitializationVariables): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

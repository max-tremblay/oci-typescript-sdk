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
 * Drops the selected list of Sql statements from the current Sql tuning set.
 * The basicFilter parameter specifies the Sql predicate to filter the Sql from the Sql tuning set defined on attributes of the SQLSET_ROW.
 * If a valid filter criteria is specified, then, Sql statements matching this filter criteria will be deleted from the current Sql tuning set.
 * If filter criteria is not specified, then, all Sql statements will be deleted from the current Sql tuning set.
 *
 */
export interface DropSqlsInSqlTuningSetDetails {
  "credentialDetails":
    | model.SqlTuningSetAdminPasswordCredentialDetails
    | model.SqlTuningSetAdminSecretCredentialDetails;
  /**
   * Flag to indicate whether to drop the Sql statements or just display the plsql used to drop the Sql statements.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "showSqlOnly"?: number;
  /**
   * The owner of the Sql tuning set.
   */
  "owner"?: string;
  /**
   * The name of the Sql tuning set.
   */
  "name": string;
  /**
   * Specifies the Sql predicate to filter the Sql from the Sql tuning set defined on attributes of the SQLSET_ROW.
   * User could use any combination of the following columns with appropriate values as Sql predicate
   * Refer to the documentation https://docs.oracle.com/en/database/oracle/oracle-database/18/arpls/DBMS_SQLTUNE.html#GUID-1F4AFB03-7B29-46FC-B3F2-CB01EC36326C
   *
   */
  "basicFilter"?: string;
}

export namespace DropSqlsInSqlTuningSetDetails {
  export function getJsonObj(obj: DropSqlsInSqlTuningSetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.SqlTuningSetAdminCredentialDetails.getJsonObj(obj.credentialDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DropSqlsInSqlTuningSetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.SqlTuningSetAdminCredentialDetails.getDeserializedJsonObj(obj.credentialDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}

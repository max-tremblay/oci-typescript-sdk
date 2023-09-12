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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Save current list of Sql statements into another Sql tuning set.
 *
 */
export interface SaveSqlTuningSetAsDetails {
  "credentialDetails":
    | model.SqlTuningSetAdminPasswordCredentialDetails
    | model.SqlTuningSetAdminSecretCredentialDetails;
  /**
   * Flag to indicate whether to save the Sql tuning set or just display the plsql used to save Sql tuning set.
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
   * The name of the destination Sql tuning set.
   */
  "destinationSqlTuningSetName": string;
  /**
   * The description for the destination Sql tuning set.
   */
  "destinationSqlTuningSetDescription"?: string;
  /**
   * Owner of the destination Sql tuning set.
   */
  "destinationSqlTuningSetOwner"?: string;
  /**
   * Specifies whether to create a new Sql tuning set or not.
   * Possible values
   * 1 - Create a new Sql tuning set
   * 0 - Do not create a new Sql tuning set
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "createNew": number;
  /**
   * Specifies the Sql predicate to filter the Sql from the Sql tuning set defined on attributes of the SQLSET_ROW.
   * User could use any combination of the following columns with appropriate values as Sql predicate
   * Refer to the documentation https://docs.oracle.com/en/database/oracle/oracle-database/18/arpls/DBMS_SQLTUNE.html#GUID-1F4AFB03-7B29-46FC-B3F2-CB01EC36326C
   *
   */
  "basicFilter"?: string;
  /**
   * Specifies the plan filter.
   * This parameter enables you to select a single plan when a statement has multiple plans.
   * Refer to the documentation https://docs.oracle.com/en/database/oracle/oracle-database/19/arpls/DBMS_SQLSET.html#GUID-9D995019-91AB-4B1E-9EAF-031050789B21
   *
   */
  "planFilter"?: SaveSqlTuningSetAsDetails.PlanFilter;
  /**
   * Specifies that the filter must include recursive Sql in the Sql tuning set.
   */
  "recursiveSql"?: SaveSqlTuningSetAsDetails.RecursiveSql;
  /**
   * Specifies a filter that picks the top n% according to the supplied ranking measure.
   * Note that this parameter applies only if one ranking measure is supplied.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "resultPercentage"?: number;
  /**
   * The top limit Sql from the filtered source, ranked by the ranking measure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "resultLimit"?: number;
  /**
   * Specifies an ORDER BY clause on the selected Sql. User can specify upto three ranking measures.
   *
   */
  "rankingMeasure1"?: model.RankingMeasure;
  /**
   * Specifies an ORDER BY clause on the selected Sql. User can specify upto three ranking measures.
   *
   */
  "rankingMeasure2"?: model.RankingMeasure;
  /**
   * Specifies an ORDER BY clause on the selected Sql. User can specify upto three ranking measures.
   *
   */
  "rankingMeasure3"?: model.RankingMeasure;
  /**
   * Specifies the list of Sql statement attributes to return in the result.
   * Note that this parameter cannot be made an enum since custom value can take a list of comma separated attribute names.
   * Attribute list can take one of the following values.
   *  TYPICAL - Specifies BASIC plus Sql plan (without row source statistics) and without object reference list (default).
   *  BASIC - Specifies all attributes (such as execution statistics and binds) except the plans. The execution context is always part of the result.
   *  ALL - Specifies all attributes.
   *  CUSTOM - Comma-separated list of the following attribute names.
   *           - EXECUTION_STATISTICS
   *           - BIND_LIST
   *           - OBJECT_LIST
   *           - SQL_PLAN
   *           - SQL_PLAN_STATISTICS
   * Usage examples:
   *   1. \"attributeList\": \"TYPICAL\"
   *   2. \"attributeList\": \"ALL\"
   *   3. \"attributeList\": \"EXECUTION_STATISTICS,OBJECT_LIST,SQL_PLAN\"
   *
   */
  "attributeList"?: string;
  /**
   * Specifies which statements are loaded into the Sql tuning set.
   * The possible values are.
   *   - INSERT (default)
   *     Adds only new statements.
   *   - UPDATE
   *     Updates existing the Sql statements and ignores any new statements.
   *   - MERGE
   *     Inserts new statements and updates the information of the existing ones.
   *
   */
  "loadOption"?: SaveSqlTuningSetAsDetails.LoadOption;
  /**
   * Specifies how existing Sql statements are updated.
   * This parameter is applicable only if load_option is specified with UPDATE or MERGE as an option.
   * Update option can take one of the following values.
   *    REPLACE (default) - Updates the statement using the new statistics, bind list, object list, and so on.
   *    ACCUMULATE - Combines attributes when possible (for example, statistics such as elapsed_time), otherwise replaces the existing values (for example, module and action) with the provided values.
   *    Following Sql statement attributes can be accumulated.
   *        elapsed_time
   *        buffer_gets
   *        direct_writes
   *        disk_reads
   *        row_processed
   *        fetches
   *        executions
   *        end_of_fetch_count
   *        stat_period
   *        active_stat_period
   *
   */
  "updateOption"?: SaveSqlTuningSetAsDetails.UpdateOption;
  /**
   * Specifies when to perform the update.
   * The procedure only performs the update when the specified condition is satisfied.
   * The condition can refer to either the data source or destination.
   * The condition must use the following prefixes to refer to attributes from the source or the destination:
   *   OLD  \u2014 Refers to statement attributes from the SQL tuning set (destination).
   *   NEW  \u2014 Refers to statement attributes from the input statements (source).
   *   NULL \u2014 No updates are performed.
   *
   */
  "updateCondition"?: SaveSqlTuningSetAsDetails.UpdateCondition;
  /**
   * Specifies the list of Sql statement attributes to update during a merge or update.
   * Note that this parameter cannot be made an enum since custom value can take a list of comma separated attribute names.
   * Update attributes can take one of the following values.
   *    NULL (default) - Specifies the content of the input cursor except the execution context. On other terms, it is equivalent to ALL without execution contexts such as module and action.
   *    BASIC - Specifies statistics and binds only.
   *    TYPICAL - Specifies BASIC with Sql plans (without row source statistics) and without an object reference list.
   *    ALL - Specifies all attributes, including the execution context attributes such as module and action.
   *    CUSTOM - List of comma separated attribute names to update
   *        EXECUTION_CONTEXT
   *        EXECUTION_STATISTICS
   *        SQL_BINDS
   *        SQL_PLAN
   *        SQL_PLAN_STATISTICS (similar to SQL_PLAN with added row source statistics)
   * Usage examples:
   *   1. \"updateAttributes\": \"TYPICAL\"
   *   2. \"updateAttributes\": \"BASIC\"
   *   3. \"updateAttributes\": \"EXECUTION_STATISTICS,SQL_PLAN_STATISTICS,SQL_PLAN\"
   *   4. \"updateAttributes\": \"EXECUTION_STATISTICS,SQL_PLAN\"
   *
   */
  "updateAttributes"?: string;
  /**
   * Specifies whether to update attributes when the new value is NULL.
   * If TRUE, then the procedure does not update an attribute when the new value is NULL.
   * That is, do not override with NULL values unless intentional.
   * Possible values - true or false
   *
   */
  "isIgnoreNull"?: boolean;
  /**
   * Specifies whether to commit statements after DML.
   * If a value is provided, then the load commits after each specified number of statements is inserted.
   * If NULL is provided, then the load commits only once, at the end of the operation.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "commitRows"?: number;
}

export namespace SaveSqlTuningSetAsDetails {
  export enum PlanFilter {
    LastGenerated = "LAST_GENERATED",
    FirstGenerated = "FIRST_GENERATED",
    LastLoaded = "LAST_LOADED",
    FirstLoaded = "FIRST_LOADED",
    MaxElapsedTime = "MAX_ELAPSED_TIME",
    MaxBufferGets = "MAX_BUFFER_GETS",
    MaxDiskReads = "MAX_DISK_READS",
    MaxDirectWrites = "MAX_DIRECT_WRITES",
    MaxOptimizerCost = "MAX_OPTIMIZER_COST"
  }

  export enum RecursiveSql {
    HasRecursiveSql = "HAS_RECURSIVE_SQL",
    NoRecursiveSql = "NO_RECURSIVE_SQL"
  }

  export enum LoadOption {
    Insert = "INSERT",
    Update = "UPDATE",
    Merge = "MERGE"
  }

  export enum UpdateOption {
    Replace = "REPLACE",
    Accumulate = "ACCUMULATE"
  }

  export enum UpdateCondition {
    Old = "OLD",
    New = "NEW"
  }

  export function getJsonObj(obj: SaveSqlTuningSetAsDetails): object {
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
  export function getDeserializedJsonObj(obj: SaveSqlTuningSetAsDetails): object {
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

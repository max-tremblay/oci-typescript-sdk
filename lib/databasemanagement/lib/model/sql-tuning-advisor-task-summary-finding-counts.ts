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
 * The number of findings in the SQL Tuning Advisor summary report.
 */
export interface SqlTuningAdvisorTaskSummaryFindingCounts {
  /**
   * The number of distinct SQL statements with recommended SQL profiles. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recommendedSqlProfile": number;
  /**
   * The number of distinct SQL statements with implemented SQL profiles. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "implementedSqlProfile": number;
  /**
   * The number of distinct SQL statements with index recommendations. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "index": number;
  /**
   * The number of distinct SQL statements with restructured SQL recommendations. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "restructure": number;
  /**
   * The number of distinct SQL statements with stale or missing optimizer statistics recommendations. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "statistics": number;
  /**
   * The number of distinct SQL statements with alternative plan recommendations. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "alternatePlan": number;
}

export namespace SqlTuningAdvisorTaskSummaryFindingCounts {
  export function getJsonObj(obj: SqlTuningAdvisorTaskSummaryFindingCounts): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningAdvisorTaskSummaryFindingCounts): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

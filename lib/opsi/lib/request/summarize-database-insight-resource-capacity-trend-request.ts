/**
 *
 *
 * OpenAPI spec version: 20200630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/SummarizeDatabaseInsightResourceCapacityTrend.ts.html |here} to see how to use SummarizeDatabaseInsightResourceCapacityTrendRequest.
 */
export interface SummarizeDatabaseInsightResourceCapacityTrendRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * Filter by resource metric.
   * Supported values are CPU , STORAGE, MEMORY and IO.
   *
   */
  "resourceMetric": string;
  /**
   * Specify time period in ISO 8601 format with respect to current time.
   * Default is last 30 days represented by P30D.
   * If timeInterval is specified, then timeIntervalStart and timeIntervalEnd will be ignored.
   * Examples  P90D (last 90 days), P4W (last 4 weeks), P2M (last 2 months), P1Y (last 12 months), . Maximum value allowed is 25 months prior to current time (P25M).
   *
   */
  "analysisTimeInterval"?: string;
  /**
   * Analysis start time in UTC in ISO 8601 format(inclusive).
   * Example 2019-10-30T00:00:00Z (yyyy-MM-ddThh:mm:ssZ).
   * The minimum allowed value is 2 years prior to the current day.
   * timeIntervalStart and timeIntervalEnd parameters are used together.
   * If analysisTimeInterval is specified, this parameter is ignored.
   *
   */
  "timeIntervalStart"?: Date;
  /**
   * Analysis end time in UTC in ISO 8601 format(exclusive).
   * Example 2019-10-30T00:00:00Z (yyyy-MM-ddThh:mm:ssZ).
   * timeIntervalStart and timeIntervalEnd are used together.
   * If timeIntervalEnd is not specified, current time is used as timeIntervalEnd.
   *
   */
  "timeIntervalEnd"?: Date;
  /**
   * Filter by one or more database type.
   * Possible values are ADW-S, ATP-S, ADW-D, ATP-D, EXTERNAL-PDB, EXTERNAL-NONCDB.
   *
   */
  "databaseType"?: Array<SummarizeDatabaseInsightResourceCapacityTrendRequest.DatabaseType>;
  /**
   * Optional list of database [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the associated DBaaS entity.
   *
   */
  "databaseId"?: Array<string>;
  /**
   * Optional list of database insight resource [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "id"?: Array<string>;
  /**
   * Optional list of exadata insight resource [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "exadataInsightId"?: Array<string>;
  /**
   * Filter by one or more cdb name.
   *
   */
  "cdbName"?: Array<string>;
  /**
   * Filter by utilization level by the following buckets:
   *   - HIGH_UTILIZATION: DBs with utilization greater or equal than 75.
   *   - LOW_UTILIZATION: DBs with utilization lower than 25.
   *   - MEDIUM_HIGH_UTILIZATION: DBs with utilization greater or equal than 50 but lower than 75.
   *   - MEDIUM_LOW_UTILIZATION: DBs with utilization greater or equal than 25 but lower than 50.
   *
   */
  "utilizationLevel"?: SummarizeDatabaseInsightResourceCapacityTrendRequest.UtilizationLevel;
  /**
   * For list pagination. The value of the `opc-next-page` response header from
   * the previous \"List\" call. For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * Sorts using end timestamp , capacity or baseCapacity
   *
   */
  "sortBy"?: SummarizeDatabaseInsightResourceCapacityTrendRequest.SortBy;
  /**
   * Tablespace name for a database
   *
   */
  "tablespaceName"?: string;
  /**
   * Filter by one or more hostname.
   *
   */
  "hostName"?: Array<string>;
  /**
   * Flag to indicate if database instance level metrics should be returned. The flag is ignored when a host name filter is not applied.
   * When a hostname filter is applied this flag will determine whether to return metrics for the instances located on the specified host or for the
   * whole database which contains an instance on this host.
   *
   */
  "isDatabaseInstanceLevelMetrics"?: boolean;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A list of tag filters to apply.  Only resources with a defined tag matching the value will be returned.
   * Each item in the list has the format \"{namespace}.{tagName}.{value}\".  All inputs are case-insensitive.
   * Multiple values for the same key (i.e. same namespace and tag name) are interpreted as \"OR\".
   * Values for different keys (i.e. different namespaces, different tag names, or both) are interpreted as \"AND\".
   *
   */
  "definedTagEquals"?: Array<string>;
  /**
   * A list of tag filters to apply.  Only resources with a freeform tag matching the value will be returned.
   * The key for each tag is \"{tagName}.{value}\".  All inputs are case-insensitive.
   * Multiple values for the same tag name are interpreted as \"OR\".  Values for different tag names are interpreted as \"AND\".
   *
   */
  "freeformTagEquals"?: Array<string>;
  /**
   * A list of tag existence filters to apply.  Only resources for which the specified defined tags exist will be returned.
   * Each item in the list has the format \"{namespace}.{tagName}.true\" (for checking existence of a defined tag)
   * or \"{namespace}.true\".  All inputs are case-insensitive.
   * Currently, only existence (\"true\" at the end) is supported. Absence (\"false\" at the end) is not supported.
   * Multiple values for the same key (i.e. same namespace and tag name) are interpreted as \"OR\".
   * Values for different keys (i.e. different namespaces, different tag names, or both) are interpreted as \"AND\".
   *
   */
  "definedTagExists"?: Array<string>;
  /**
   * A list of tag existence filters to apply.  Only resources for which the specified freeform tags exist the value will be returned.
   * The key for each tag is \"{tagName}.true\".  All inputs are case-insensitive.
   * Currently, only existence (\"true\" at the end) is supported. Absence (\"false\" at the end) is not supported.
   * Multiple values for different tag names are interpreted as \"AND\".
   *
   */
  "freeformTagExists"?: Array<string>;
  /**
   * A flag to search all resources within a given compartment and all sub-compartments.
   *
   */
  "compartmentIdInSubtree"?: boolean;
}

export namespace SummarizeDatabaseInsightResourceCapacityTrendRequest {
  export enum DatabaseType {
    AdwS = "ADW-S",
    AtpS = "ATP-S",
    AdwD = "ADW-D",
    AtpD = "ATP-D",
    ExternalPdb = "EXTERNAL-PDB",
    ExternalNoncdb = "EXTERNAL-NONCDB",
    ComanagedVmCdb = "COMANAGED-VM-CDB",
    ComanagedVmPdb = "COMANAGED-VM-PDB",
    ComanagedVmNoncdb = "COMANAGED-VM-NONCDB",
    ComanagedBmCdb = "COMANAGED-BM-CDB",
    ComanagedBmPdb = "COMANAGED-BM-PDB",
    ComanagedBmNoncdb = "COMANAGED-BM-NONCDB",
    ComanagedExacsCdb = "COMANAGED-EXACS-CDB",
    ComanagedExacsPdb = "COMANAGED-EXACS-PDB",
    ComanagedExacsNoncdb = "COMANAGED-EXACS-NONCDB"
  }

  export enum UtilizationLevel {
    HighUtilization = "HIGH_UTILIZATION",
    LowUtilization = "LOW_UTILIZATION",
    MediumHighUtilization = "MEDIUM_HIGH_UTILIZATION",
    MediumLowUtilization = "MEDIUM_LOW_UTILIZATION"
  }

  export enum SortBy {
    EndTimestamp = "endTimestamp",
    Capacity = "capacity",
    BaseCapacity = "baseCapacity"
  }
}

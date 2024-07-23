/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListAuditEvents.ts.html |here} to see how to use ListAuditEventsRequest.
 */
export interface ListAuditEventsRequest extends common.BaseRequest {
  /**
   * A filter to return only resources that match the specified compartment OCID.
   */
  "compartmentId": string;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
  /**
   * Default is false.
   * When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in the tenancy are returned. Depends on the 'accessLevel' setting.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Valid values are RESTRICTED and ACCESSIBLE. Default is RESTRICTED.
   * Setting this to ACCESSIBLE returns only those compartments for which the
   * user has INSPECT permissions directly or indirectly (permissions can be on a
   * resource in a subcompartment). When set to RESTRICTED permissions are checked and no partial results are displayed.
   *
   */
  "accessLevel"?: ListAuditEventsRequest.AccessLevel;
  /**
   * For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * It is usually retrieved from a previous \"List\" call. For details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The scimQuery query parameter accepts filter expressions that use the syntax described in Section 3.2.2.2
   * of the System for Cross-Domain Identity Management (SCIM) specification, which is available
   * at [RFC3339](https://tools.ietf.org/html/draft-ietf-scim-api-12). In SCIM filtering expressions,
   * text, date, and time values must be enclosed in quotation marks, with date and time values using ISO-8601 format.
   * (Numeric and boolean values should not be quoted.)
   * <p>
   **Example:** (operationTime ge \"2021-06-04T12:00:00.000Z\") and (eventName eq \"LOGON\")
   *
   */
  "scimQuery"?: string;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListAuditEventsRequest.SortOrder;
  /**
   * If this query parameter is specified, the result is sorted by this query parameter value.
   *
   */
  "sortBy"?: ListAuditEventsRequest.SortBy;
}

export namespace ListAuditEventsRequest {
  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    DbUserName = "dbUserName",
    TargetName = "targetName",
    DatabaseType = "databaseType",
    TargetClass = "targetClass",
    AuditEventTime = "auditEventTime",
    TimeCollected = "timeCollected",
    OsUserName = "osUserName",
    Operation = "operation",
    OperationStatus = "operationStatus",
    EventName = "eventName",
    ErrorCode = "errorCode",
    ErrorMessage = "errorMessage",
    ObjectType = "objectType",
    ObjectName = "objectName",
    ObjectOwner = "objectOwner",
    ClientHostname = "clientHostname",
    ClientIp = "clientIp",
    IsAlerted = "isAlerted",
    ActionTaken = "actionTaken",
    ClientProgram = "clientProgram",
    CommandText = "commandText",
    CommandParam = "commandParam",
    ExtendedEventAttributes = "extendedEventAttributes",
    AuditLocation = "auditLocation",
    OsTerminal = "osTerminal",
    ClientId = "clientId",
    AuditPolicies = "auditPolicies",
    AuditType = "auditType"
  }
}

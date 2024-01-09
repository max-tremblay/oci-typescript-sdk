/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
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
 * A discovery job result representing a sensitive column. It can be one of the following three types:
 * NEW: A new sensitive column in the target database that is not in the sensitive data model.
 * DELETED: A column that is present in the sensitive data model but has been deleted from the target database.
 * MODIFIED: A column that is present in the target database as well as the sensitive data model but some of its attributes have been modified.
 *
 */
export interface DiscoveryJobResult {
  /**
   * The unique key that identifies the discovery result.
   */
  "key": string;
  /**
   * The type of the discovery result. It can be one of the following three types:
   * NEW: A new sensitive column in the target database that is not in the sensitive data model.
   * DELETED: A column that is present in the sensitive data model but has been deleted from the target database.
   * MODIFIED: A column that is present in the target database as well as the sensitive data model but some of its attributes have been modified.
   *
   */
  "discoveryType": DiscoveryJobResult.DiscoveryType;
  /**
   * The unique key that identifies the sensitive column represented by the discovery result.
   */
  "sensitiveColumnkey"?: string;
  /**
   * The name of the application. An application is an entity that is identified by a schema and stores sensitive information for that schema. Its value will be same as schemaName, if no value is passed.
   */
  "appName"?: string;
  /**
   * The database schema that contains the sensitive column.
   */
  "schemaName": string;
  /**
   * The database object that contains the sensitive column.
   */
  "objectName": string;
  /**
   * The name of the sensitive column.
   */
  "columnName": string;
  /**
   * The type of the database object that contains the sensitive column.
   */
  "objectType": DiscoveryJobResult.ObjectType;
  /**
   * The data type of the sensitive column.
   */
  "dataType": string;
  /**
   * The OCID of the sensitive type associated with the sensitive column.
   */
  "sensitiveTypeId"?: string;
  /**
   * Unique keys identifying the columns that are parents of the sensitive column. At present, it tracks a single parent only.
   */
  "parentColumnKeys"?: Array<string>;
  /**
   * The type of referential relationship the sensitive column has with its parent. NONE indicates that the sensitive
   * column does not have a parent. DB_DEFINED indicates that the relationship is defined in the database dictionary.
   * APP_DEFINED indicates that the relationship is defined at the application level and not in the database dictionary.
   *
   */
  "relationType": DiscoveryJobResult.RelationType;
  /**
   * The estimated number of data values the column has in the associated database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "estimatedDataValueCount": number;
  /**
   * Original data values collected for the sensitive column from the associated database. Sample data helps review
   * the column and ensure that it actually contains sensitive data. Note that sample data is retrieved by a data
   * discovery job only if the isSampleDataCollectionEnabled attribute is set to true. At present, only one data
   * value is collected per sensitive column.
   *
   */
  "sampleDataValues"?: Array<string>;
  /**
   * Unique keys identifying the columns that are application-level (non-dictionary) children of the sensitive column.
   */
  "appDefinedChildColumnKeys"?: Array<string>;
  /**
   * Unique keys identifying the columns that are database-level (dictionary-defined) children of the sensitive column.
   */
  "dbDefinedChildColumnKeys"?: Array<string>;
  /**
   * Specifies how to process the discovery result. It's set to NONE by default. Use the PatchDiscoveryJobResults operation to update this attribute. You can choose one of the following options:
   * ACCEPT: To accept the discovery result and update the sensitive data model to reflect the changes.
   * REJECT: To reject the discovery result so that it doesn't change the sensitive data model.
   * INVALIDATE: To invalidate a newly discovered column. It adds the column to the sensitive data model but marks it as invalid. It helps track false positives and ensure that they aren't reported by future discovery jobs.
   * After specifying the planned action, you can use the ApplyDiscoveryJobResults operation to automatically process the discovery results.
   *
   */
  "plannedAction": DiscoveryJobResult.PlannedAction;
  /**
   * Indicates whether the discovery result has been processed. You can update this attribute using the PatchDiscoveryJobResults
   * operation to track whether the discovery result has already been processed and applied to the sensitive data model.
   *
   */
  "isResultApplied": boolean;
  /**
   * The OCID of the discovery job.
   */
  "discoveryJobId": string;
  "modifiedAttributes"?: model.ModifiedAttributes;
}

export namespace DiscoveryJobResult {
  export enum DiscoveryType {
    New = "NEW",
    Modified = "MODIFIED",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ObjectType {
    Table = "TABLE",
    EditioningView = "EDITIONING_VIEW",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RelationType {
    None = "NONE",
    AppDefined = "APP_DEFINED",
    DbDefined = "DB_DEFINED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PlannedAction {
    None = "NONE",
    Accept = "ACCEPT",
    Invalidate = "INVALIDATE",
    Reject = "REJECT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DiscoveryJobResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "modifiedAttributes": obj.modifiedAttributes
          ? model.ModifiedAttributes.getJsonObj(obj.modifiedAttributes)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DiscoveryJobResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "modifiedAttributes": obj.modifiedAttributes
          ? model.ModifiedAttributes.getDeserializedJsonObj(obj.modifiedAttributes)
          : undefined
      }
    };

    return jsonObj;
  }
}

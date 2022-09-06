/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * The data entity shape object.
 */
export interface CreateEntityShapeDetails {
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The model version of the object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on the permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name": string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The external key of the object.
   */
  "externalKey"?: string;
  "shape"?: model.Shape;
  /**
   * The shape ID.
   */
  "shapeId"?: string;
  /**
   * The entity type.
   */
  "entityType"?: CreateEntityShapeDetails.EntityType;
  /**
   * Specifies other type label.
   */
  "otherTypeLabel"?: string;
  /**
   * An array of unique keys.
   */
  "uniqueKeys"?: Array<model.UniqueKey>;
  /**
   * An array of foreign keys.
   */
  "foreignKeys"?: Array<model.ForeignKey>;
  /**
   * The resource name.
   */
  "resourceName"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with an upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "types"?: model.TypeLibrary;
  /**
   * Map<String, String> for entity properties
   */
  "entityProperties"?: { [key: string]: string };

  "modelType": string;
}

export namespace CreateEntityShapeDetails {
  export enum EntityType {
    Table = "TABLE",
    View = "VIEW",
    File = "FILE",
    Sql = "SQL",
    DataStore = "DATA_STORE",
    Message = "MESSAGE"
  }

  export function getJsonObj(obj: CreateEntityShapeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "shape": obj.shape ? model.Shape.getJsonObj(obj.shape) : undefined,

        "uniqueKeys": obj.uniqueKeys
          ? obj.uniqueKeys.map(item => {
              return model.UniqueKey.getJsonObj(item);
            })
          : undefined,
        "foreignKeys": obj.foreignKeys
          ? obj.foreignKeys.map(item => {
              return model.ForeignKey.getJsonObj(item);
            })
          : undefined,

        "types": obj.types ? model.TypeLibrary.getJsonObj(obj.types) : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "DATA_STORE_ENTITY":
          return model.CreateEntityShapeFromDataStore.getJsonObj(
            <model.CreateEntityShapeFromDataStore>(<object>jsonObj),
            true
          );
        case "MESSAGE_ENTITY":
          return model.CreateEntityShapeFromMessage.getJsonObj(
            <model.CreateEntityShapeFromMessage>(<object>jsonObj),
            true
          );
        case "TABLE_ENTITY":
          return model.CreateEntityShapeFromTable.getJsonObj(
            <model.CreateEntityShapeFromTable>(<object>jsonObj),
            true
          );
        case "SQL_ENTITY":
          return model.CreateEntityShapeFromSQL.getJsonObj(
            <model.CreateEntityShapeFromSQL>(<object>jsonObj),
            true
          );
        case "FILE_ENTITY":
          return model.CreateEntityShapeFromFile.getJsonObj(
            <model.CreateEntityShapeFromFile>(<object>jsonObj),
            true
          );
        case "VIEW_ENTITY":
          return model.CreateEntityShapeFromView.getJsonObj(
            <model.CreateEntityShapeFromView>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateEntityShapeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "shape": obj.shape ? model.Shape.getDeserializedJsonObj(obj.shape) : undefined,

        "uniqueKeys": obj.uniqueKeys
          ? obj.uniqueKeys.map(item => {
              return model.UniqueKey.getDeserializedJsonObj(item);
            })
          : undefined,
        "foreignKeys": obj.foreignKeys
          ? obj.foreignKeys.map(item => {
              return model.ForeignKey.getDeserializedJsonObj(item);
            })
          : undefined,

        "types": obj.types ? model.TypeLibrary.getDeserializedJsonObj(obj.types) : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "DATA_STORE_ENTITY":
          return model.CreateEntityShapeFromDataStore.getDeserializedJsonObj(
            <model.CreateEntityShapeFromDataStore>(<object>jsonObj),
            true
          );
        case "MESSAGE_ENTITY":
          return model.CreateEntityShapeFromMessage.getDeserializedJsonObj(
            <model.CreateEntityShapeFromMessage>(<object>jsonObj),
            true
          );
        case "TABLE_ENTITY":
          return model.CreateEntityShapeFromTable.getDeserializedJsonObj(
            <model.CreateEntityShapeFromTable>(<object>jsonObj),
            true
          );
        case "SQL_ENTITY":
          return model.CreateEntityShapeFromSQL.getDeserializedJsonObj(
            <model.CreateEntityShapeFromSQL>(<object>jsonObj),
            true
          );
        case "FILE_ENTITY":
          return model.CreateEntityShapeFromFile.getDeserializedJsonObj(
            <model.CreateEntityShapeFromFile>(<object>jsonObj),
            true
          );
        case "VIEW_ENTITY":
          return model.CreateEntityShapeFromView.getDeserializedJsonObj(
            <model.CreateEntityShapeFromView>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}

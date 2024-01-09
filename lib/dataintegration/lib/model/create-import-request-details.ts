/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Details of import object.
 */
export interface CreateImportRequestDetails {
  /**
   * Name of the Object Storage bucket where the object will be imported from.
   */
  "bucketName": string;
  /**
   * Name of the zip file to be imported.
   */
  "fileName": string;
  /**
   * Optional parameter to point to object storage tenancy (if using Object Storage of different tenancy)
   */
  "objectStorageTenancyId"?: string;
  /**
   * Region of the object storage (if using object storage of different region)
   */
  "objectStorageRegion"?: string;
  /**
   * Key of the object inside which all the objects will be imported
   */
  "objectKeyForImport"?: string;
  "importConflictResolution"?: model.ImportConflictResolution;
}

export namespace CreateImportRequestDetails {
  export function getJsonObj(obj: CreateImportRequestDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "importConflictResolution": obj.importConflictResolution
          ? model.ImportConflictResolution.getJsonObj(obj.importConflictResolution)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateImportRequestDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "importConflictResolution": obj.importConflictResolution
          ? model.ImportConflictResolution.getDeserializedJsonObj(obj.importConflictResolution)
          : undefined
      }
    };

    return jsonObj;
  }
}

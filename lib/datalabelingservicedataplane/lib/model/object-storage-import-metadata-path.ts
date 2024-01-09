/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
 * OpenAPI spec version: 20211001
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
 * Object Storage details for import metadata path.
 */
export interface ObjectStorageImportMetadataPath extends model.ImportMetadataPath {
  /**
   * Bucket namespace name
   */
  "namespace": string;
  /**
   * Bucket name
   */
  "bucket": string;
  /**
   * Path for the metadata file.
   */
  "path": string;

  "sourceType": string;
}

export namespace ObjectStorageImportMetadataPath {
  export function getJsonObj(
    obj: ObjectStorageImportMetadataPath,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ImportMetadataPath.getJsonObj(obj) as ObjectStorageImportMetadataPath)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: ObjectStorageImportMetadataPath,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ImportMetadataPath.getDeserializedJsonObj(
            obj
          ) as ObjectStorageImportMetadataPath)),
      ...{}
    };

    return jsonObj;
  }
}

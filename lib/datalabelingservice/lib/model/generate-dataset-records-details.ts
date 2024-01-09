/**
 * Data Labeling Management API
 * Use Data Labeling Management API to create, list, edit & delete datasets.
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
 * Generate Records from the Dataset's source.
 */
export interface GenerateDatasetRecordsDetails {
  /**
   * the maximum number of records to generate. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "limit"?: number;
}

export namespace GenerateDatasetRecordsDetails {
  export function getJsonObj(obj: GenerateDatasetRecordsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GenerateDatasetRecordsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

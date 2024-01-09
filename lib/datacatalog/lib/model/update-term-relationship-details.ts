/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Properties used in term relationship update operations.
 */
export interface UpdateTermRelationshipDetails {
  /**
   * A user-friendly display name. Is changeable. The combination of 'displayName' and 'parentTermKey'
   * must be unique. Avoid entering confidential information. This is the same as 'relationshipType' for 'termRelationship'.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the term relationship usually defined at the time of creation.
   */
  "description"?: string;
}

export namespace UpdateTermRelationshipDetails {
  export function getJsonObj(obj: UpdateTermRelationshipDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateTermRelationshipDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

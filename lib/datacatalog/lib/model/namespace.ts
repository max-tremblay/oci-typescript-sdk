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
 * Namespace Definition
 *
 */
export interface Namespace {
  /**
   * Unique namespace key that is immutable.
   */
  "key": string;
  /**
   * Name of the Namespace
   */
  "displayName"?: string;
  /**
   * Description for the namespace
   */
  "description"?: string;
  /**
   * If this field is defined by service or by a user
   */
  "isServiceDefined"?: boolean;
  /**
   * The current state of the namespace.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The date and time the namespace was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The last time that any change was made to the namespace. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created the namespace.
   */
  "createdById"?: string;
  /**
   * OCID of the user who last modified the namespace.
   */
  "updatedById"?: string;
}

export namespace Namespace {
  export function getJsonObj(obj: Namespace): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Namespace): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

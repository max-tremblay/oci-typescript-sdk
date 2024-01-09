/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Details for a given object id
 */
export interface AddmDbSchemaObjectSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Database insight.
   */
  "id": string;
  /**
   * Object id (from RDBMS) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectIdentifier": number;
  /**
   * Owner of object
   */
  "owner": string;
  /**
   * Name of object
   */
  "objectName": string;
  /**
   * Subobject name; for example, partition name
   */
  "subObjectName"?: string;
  /**
   * Type of the object (such as TABLE, INDEX)
   */
  "objectType": string;
}

export namespace AddmDbSchemaObjectSummary {
  export function getJsonObj(obj: AddmDbSchemaObjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddmDbSchemaObjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

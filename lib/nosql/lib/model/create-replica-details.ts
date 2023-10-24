/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Specifications for the new replica
 */
export interface CreateReplicaDetails {
  /**
   * The OCID of the table's compartment.  Required
   * if the tableNameOrId path parameter is a table name.
   * Optional if tableNameOrId is an OCID.  If tableNameOrId
   * is an OCID, and compartmentId is supplied, the latter
   * must match the identified table's compartmentId.
   *
   */
  "compartmentId"?: string;
  /**
   * Name of the remote region in standard OCI format, i.e. us-ashburn-1
   *
   */
  "region": string;
  /**
   * Maximum sustained read throughput limit for the new replica table.
   * If not specified, the local table's read limit is used.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxReadUnits"?: number;
  /**
   * Maximum sustained write throughput limit for the new replica table.
   * If not specified, the local table's write limit is used.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxWriteUnits"?: number;
}

export namespace CreateReplicaDetails {
  export function getJsonObj(obj: CreateReplicaDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateReplicaDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

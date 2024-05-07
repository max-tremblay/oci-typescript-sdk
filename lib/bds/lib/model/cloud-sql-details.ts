/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
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
 * The information about added Cloud SQL capability
 */
export interface CloudSqlDetails {
  /**
   * Shape of the node
   */
  "shape": string;
  /**
   * The size of block volume in GB that needs to be attached to a given node.
   * All the necessary details needed for attachment are managed by service itself.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "blockVolumeSizeInGBs"?: number;
  /**
   * Boolean flag specifying whether or not Kerberos principals are mapped
   * to database users.
   *
   */
  "isKerberosMappedToDatabaseUsers"?: boolean;
  /**
   * IP address of the Cloud SQL node.
   */
  "ipAddress": string;
  /**
   * Details about the Kerberos principals.
   */
  "kerberosDetails"?: Array<model.KerberosDetails>;
}

export namespace CloudSqlDetails {
  export function getJsonObj(obj: CloudSqlDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "kerberosDetails": obj.kerberosDetails
          ? obj.kerberosDetails.map(item => {
              return model.KerberosDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CloudSqlDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "kerberosDetails": obj.kerberosDetails
          ? obj.kerberosDetails.map(item => {
              return model.KerberosDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information about a new Amazon S3 Connection.
 *
 */
export interface CreateAmazonS3ConnectionDetails extends model.CreateConnectionDetails {
  /**
   * The Amazon S3 technology type.
   */
  "technologyType": string;
  /**
   * Access key ID to access the Amazon S3 bucket.
   * e.g.: \"this-is-not-the-secret\"
   *
   */
  "accessKeyId": string;
  /**
   * Secret access key to access the Amazon S3 bucket.
   * e.g.: \"this-is-not-the-secret\"
   *
   */
  "secretAccessKey": string;

  "connectionType": string;
}

export namespace CreateAmazonS3ConnectionDetails {
  export function getJsonObj(
    obj: CreateAmazonS3ConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getJsonObj(obj) as CreateAmazonS3ConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "AMAZON_S3";
  export function getDeserializedJsonObj(
    obj: CreateAmazonS3ConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateAmazonS3ConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}

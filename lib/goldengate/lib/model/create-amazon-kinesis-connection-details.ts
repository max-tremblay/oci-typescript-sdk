/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information about a new Amazon Kinesis Connection.
 *
 */
export interface CreateAmazonKinesisConnectionDetails extends model.CreateConnectionDetails {
  /**
   * The Amazon Kinesis technology type.
   */
  "technologyType": string;
  /**
   * Access key ID to access the Amazon Kinesis.
   *
   */
  "accessKeyId": string;
  /**
   * Secret access key to access the Amazon Kinesis.
   *
   */
  "secretAccessKey": string;

  "connectionType": string;
}

export namespace CreateAmazonKinesisConnectionDetails {
  export function getJsonObj(
    obj: CreateAmazonKinesisConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getJsonObj(obj) as CreateAmazonKinesisConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "AMAZON_KINESIS";
  export function getDeserializedJsonObj(
    obj: CreateAmazonKinesisConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateAmazonKinesisConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}

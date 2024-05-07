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
 * The API key information.
 */
export interface BdsApiKey {
  /**
   * Identifier of the user's API key.
   */
  "id": string;
  /**
   * The user OCID for which this API key was created.
   */
  "userId": string;
  /**
   * User friendly identifier used to uniquely differentiate between different API keys.
   * Only ASCII alphanumeric characters with no spaces allowed.
   *
   */
  "keyAlias": string;
  /**
   * The name of the region to establish the Object Storage endpoint. Example us-phoenix-1 .
   */
  "defaultRegion": string;
  /**
   * The OCID of your tenancy.
   */
  "tenantId": string;
  /**
   * The fingerprint that corresponds to the public API key requested.
   */
  "fingerprint": string;
  /**
   * The full path and file name of the private key used for authentication. This location will be automatically selected
   * on the BDS local file system.
   *
   */
  "pemfilepath": string;
  /**
   * The time the API key was created, shown as an RFC 3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The state of the key.
   */
  "lifecycleState": BdsApiKey.LifecycleState;
}

export namespace BdsApiKey {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BdsApiKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BdsApiKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

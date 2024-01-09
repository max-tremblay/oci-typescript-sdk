/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Creation details for an Object Storage bucket that contains Terraform configuration files.
 *
 */
export interface CreateObjectStorageConfigSourceDetails extends model.CreateConfigSourceDetails {
  /**
   * The name of the bucket's region.
   * Example: `us-phoenix-1`
   *
   */
  "region": string;
  /**
   * The Object Storage namespace that contains the bucket.
   */
  "namespace": string;
  /**
   * The name of the bucket that contains the Terraform configuration files.
   */
  "bucketName": string;

  "configSourceType": string;
}

export namespace CreateObjectStorageConfigSourceDetails {
  export function getJsonObj(
    obj: CreateObjectStorageConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigSourceDetails.getJsonObj(
            obj
          ) as CreateObjectStorageConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceType = "OBJECT_STORAGE_CONFIG_SOURCE";
  export function getDeserializedJsonObj(
    obj: CreateObjectStorageConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigSourceDetails.getDeserializedJsonObj(
            obj
          ) as CreateObjectStorageConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}

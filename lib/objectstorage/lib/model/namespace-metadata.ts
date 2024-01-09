/**
 * Object Storage Service API
 * Use Object Storage and Archive Storage APIs to manage buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
 * NamespaceMetadata maps a namespace string to defaultS3CompartmentId and defaultSwiftCompartmentId values.
 *
 */
export interface NamespaceMetadata {
  /**
   * The Object Storage namespace to which the metadata belongs.
   */
  "namespace": string;
  /**
   * If the field is set, specifies the default compartment assignment for the Amazon S3 Compatibility API.
   */
  "defaultS3CompartmentId": string;
  /**
   * If the field is set, specifies the default compartment assignment for the Swift API.
   */
  "defaultSwiftCompartmentId": string;
}

export namespace NamespaceMetadata {
  export function getJsonObj(obj: NamespaceMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NamespaceMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

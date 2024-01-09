/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The properties that define a key value pair.
 */
export interface InitialVirtualNodeLabel {
  /**
   * The key of the pair.
   */
  "key"?: string;
  /**
   * The value of the pair.
   */
  "value"?: string;
}

export namespace InitialVirtualNodeLabel {
  export function getJsonObj(obj: InitialVirtualNodeLabel): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InitialVirtualNodeLabel): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

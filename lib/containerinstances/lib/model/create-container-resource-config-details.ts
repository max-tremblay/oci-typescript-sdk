/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * The size and amount of resources available to the container.
 *
 */
export interface CreateContainerResourceConfigDetails {
  /**
    * The maximum amount of CPUs that can be consumed by the container's process.
* <p>
If you do not set a value, then the process
* can use all available CPU resources on the instance.
* <p>
CPU usage is defined in terms of logical CPUs. This means that the maximum possible value on
* an E3 ContainerInstance with 1 OCPU is 2.0.
* <p>
A container with a 2.0 vcpusLimit could consume up to 100% of the CPU resources available on the container instance.
* Values can be fractional. A value of \"1.5\" means that the container
* can consume at most the equivalent of 1 and a half logical CPUs worth of CPU capacity.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "vcpusLimit"?: number;
  /**
    * The maximum amount of memory that can be consumed by the container's
* process.
* <p>
If you do not set a value, then the process
* may use all available memory on the instance.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "memoryLimitInGBs"?: number;
}

export namespace CreateContainerResourceConfigDetails {
  export function getJsonObj(obj: CreateContainerResourceConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateContainerResourceConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

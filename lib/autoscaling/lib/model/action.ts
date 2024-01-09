/**
 * Autoscaling API
 * APIs for dynamically scaling Compute resources to meet application requirements. For more information about
autoscaling, see [Autoscaling](/Content/Compute/Tasks/autoscalinginstancepools.htm). For information about the
Compute service, see [Overview of the Compute Service](/Content/Compute/Concepts/computeoverview.htm).

**Note:** Autoscaling is not available in US Government Cloud tenancies. For more information, see
[Oracle Cloud Infrastructure US Government Cloud](/Content/General/Concepts/govoverview.htm).

 * OpenAPI spec version: 20181001
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
 * The action to take when autoscaling is triggered.
 *
 */
export interface Action {
  /**
   * The type of action to take.
   */
  "type": Action.Type;
  /**
   * To scale out (increase the number of instances), provide a positive value. To scale in (decrease the number of
   * instances), provide a negative value.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "value": number;
}

export namespace Action {
  export enum Type {
    ChangeCountBy = "CHANGE_COUNT_BY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Action): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Action): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

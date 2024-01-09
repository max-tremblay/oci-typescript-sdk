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
 * The result of the connectivity test performed between the GoldenGate deployment and the associated database / service.
 *
 */
export interface TestConnectionAssignmentResult {
  /**
   * Type of the result (i.e. Success, Failure or Timeout).
   *
   */
  "resultType": TestConnectionAssignmentResult.ResultType;
  "error"?: model.TestConnectionAssignmentError;
}

export namespace TestConnectionAssignmentResult {
  export enum ResultType {
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TestConnectionAssignmentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "error": obj.error ? model.TestConnectionAssignmentError.getJsonObj(obj.error) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TestConnectionAssignmentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "error": obj.error
          ? model.TestConnectionAssignmentError.getDeserializedJsonObj(obj.error)
          : undefined
      }
    };

    return jsonObj;
  }
}

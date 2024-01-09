/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
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
 * An asynchronous work request.
 */
export interface WorkRequest {
  /**
   * The type of operation that spawned the work request.
   */
  "operationType": model.OperationType;
  /**
   * The status of current work request.
   */
  "status": model.OperationStatus;
  /**
   * The OCID of the work request.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the work request.
   */
  "compartmentId": string;
  /**
   * The resources that are affected by the work request.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * The percentage complete of the operation tracked by the work request. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time the work request was created, in the format defined by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "timeAccepted": Date;
  /**
   * The date and time the work request transitioned from ACCEPTED to IN_PROGRESS, in the format defined by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "timeStarted"?: Date;
  /**
   * The date and time the work request reached a terminal state, either FAILED or SUCCEEDED, in the format defined by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "timeFinished"?: Date;
}

export namespace WorkRequest {
  export function getJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

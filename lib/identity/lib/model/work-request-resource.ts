/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The resource entity.
 *
 */
export interface WorkRequestResource {
  /**
   * The resource identifier the work request affects.
   */
  "identifier": string;
  /**
   * The resource type the work request is affects.
   */
  "entityType": string;
  /**
   * The way in which this resource was affected by the work tracked by the work request.
   */
  "actionType": WorkRequestResource.ActionType;
  /**
   * The URI path that the user can do a GET on to access the resource metadata.
   */
  "entityUri"?: string;
}

export namespace WorkRequestResource {
  export enum ActionType {
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED",
    Related = "RELATED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

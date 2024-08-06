/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * The principal details
 */
export interface PrincipalDetails {
  /**
   * the OCID of the principal
   */
  "principalId": string;
  /**
   * the name of the principal
   */
  "principalName"?: string;
  /**
   * the type of principal
   */
  "principalType"?: PrincipalDetails.PrincipalType;
  /**
   * The state of the principal, it can be active or inactive or suppressed for emails
   */
  "principalState"?: PrincipalDetails.PrincipalState;
}

export namespace PrincipalDetails {
  export enum PrincipalType {
    Service = "SERVICE",
    User = "USER",
    Instance = "INSTANCE",
    Resource = "RESOURCE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PrincipalState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Suppressed = "SUPPRESSED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PrincipalDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PrincipalDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

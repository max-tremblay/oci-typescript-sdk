/**
 * Identity and Access Management Service API
 * Use the Identity and Access Management Service API to manage users, groups, identity domains, compartments, policies, tagging, and limits. For information about managing users, groups, compartments, and policies, see [Identity and Access Management (without identity domains)](/iaas/Content/Identity/Concepts/overview.htm). For information about tagging and service limits, see [Tagging](/iaas/Content/Tagging/Concepts/taggingoverview.htm) and [Service Limits](/iaas/Content/General/Concepts/servicelimits.htm). For information about creating, modifying, and deleting identity domains, see [Identity and Access Management (with identity domains)](/iaas/Content/Identity/home.htm).
 * OpenAPI spec version: 20160918
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
 * (For tenancies that support identity domains) An IAM work request object that allows users to track the status of asynchronous API requests.
 *
 */
export interface IamWorkRequest {
  /**
   * The OCID of the work request.
   */
  "id": string;
  /**
   * The asynchronous operation tracked by this IAM work request.
   */
  "operationType": IamWorkRequest.OperationType;
  /**
   * The status of the work request.
   */
  "status": IamWorkRequest.Status;
  /**
   * The OCID of the compartment containing this IAM work request.
   */
  "compartmentId"?: string;
  /**
   * The resources this work request affects.
   */
  "resources"?: Array<model.IamWorkRequestResource>;
  /**
   * How much progress the operation has made.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete"?: number;
  /**
   * Date and time the work was accepted, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeAccepted"?: Date;
  /**
   * Date and time the work started, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeStarted"?: Date;
  /**
   * Date and time the work completed, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeFinished"?: Date;
}

export namespace IamWorkRequest {
  export enum OperationType {
    CreateDomain = "CREATE_DOMAIN",
    ReplicateDomainToRegion = "REPLICATE_DOMAIN_TO_REGION",
    UpdateDomain = "UPDATE_DOMAIN",
    ActivateDomain = "ACTIVATE_DOMAIN",
    DeactivateDomain = "DEACTIVATE_DOMAIN",
    DeleteDomain = "DELETE_DOMAIN",
    ChangeCompartmentForDomain = "CHANGE_COMPARTMENT_FOR_DOMAIN",
    ChangeLicenseTypeForDomain = "CHANGE_LICENSE_TYPE_FOR_DOMAIN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IamWorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.IamWorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IamWorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.IamWorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

/**
 * Application Dependency Management API
 * Use the Application Dependency Management API to create knowledge bases and vulnerability audits.  For more information, see [ADM](/Content/application-dependency-management/home.htm).
 * OpenAPI spec version: 20220421
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Possible operation types.
 **/
export enum OperationType {
  CreateRemediationRecipe = "CREATE_REMEDIATION_RECIPE",
  DeleteRemediationRecipe = "DELETE_REMEDIATION_RECIPE",
  MoveRemediationRecipe = "MOVE_REMEDIATION_RECIPE",
  UpdateRemediationRecipe = "UPDATE_REMEDIATION_RECIPE",
  ActivateRemediationRecipe = "ACTIVATE_REMEDIATION_RECIPE",
  DeactivateRemediationRecipe = "DEACTIVATE_REMEDIATION_RECIPE",
  CreateKnowledgeBase = "CREATE_KNOWLEDGE_BASE",
  DeleteKnowledgeBase = "DELETE_KNOWLEDGE_BASE",
  MoveKnowledgeBase = "MOVE_KNOWLEDGE_BASE",
  UpdateKnowledgeBase = "UPDATE_KNOWLEDGE_BASE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): OperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationType): OperationType {
    return obj;
  }
}

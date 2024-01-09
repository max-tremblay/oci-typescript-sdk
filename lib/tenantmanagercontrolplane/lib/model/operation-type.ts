/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20230401
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
 * Possible operation types.
 **/
export enum OperationType {
  CreateSenderInvitation = "CREATE_SENDER_INVITATION",
  AcceptRecipientInvitation = "ACCEPT_RECIPIENT_INVITATION",
  CancelSenderInvitation = "CANCEL_SENDER_INVITATION",
  CompleteOrderActivation = "COMPLETE_ORDER_ACTIVATION",
  ActivateOrderExistingTenancy = "ACTIVATE_ORDER_EXISTING_TENANCY",
  RegisterDomain = "REGISTER_DOMAIN",
  ReleaseDomain = "RELEASE_DOMAIN",
  CreateChildTenancy = "CREATE_CHILD_TENANCY",
  AssignDefaultSubscription = "ASSIGN_DEFAULT_SUBSCRIPTION",
  ManualLinkCreation = "MANUAL_LINK_CREATION",
  TerminateOrganizationTenancy = "TERMINATE_ORGANIZATION_TENANCY",
  UpdateSaasCapability = "UPDATE_SAAS_CAPABILITY",
  SoftTerminateTenancy = "SOFT_TERMINATE_TENANCY",
  HardTerminateTenancy = "HARD_TERMINATE_TENANCY",
  RestoreTenancy = "RESTORE_TENANCY",
  LogTenancyTerminationRequest = "LOG_TENANCY_TERMINATION_REQUEST",
  SelfOptIn = "SELF_OPT_IN",
  SelfOptOut = "SELF_OPT_OUT",

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

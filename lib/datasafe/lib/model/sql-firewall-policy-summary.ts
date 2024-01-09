/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The SQL Firewall policy resource contains the firewall policy metadata for a single user.
 *
 */
export interface SqlFirewallPolicySummary {
  /**
   * The OCID of the SQL Firewall policy.
   */
  "id": string;
  /**
   * The OCID of the compartment containing the SQL Firewall policy.
   */
  "compartmentId": string;
  /**
   * The display name of the SQL Firewall policy.
   */
  "displayName": string;
  /**
   * The description of the SQL Firewall policy.
   */
  "description"?: string;
  /**
   * The OCID of the security policy corresponding to the SQL Firewall policy.
   */
  "securityPolicyId": string;
  /**
   * The database user name.
   */
  "dbUserName": string;
  /**
   * Specifies the level of SQL included for this SQL Firewall policy.
   * USER_ISSUED_SQL - User issued SQL statements only.
   * ALL_SQL - Includes all SQL statements including SQL statement issued inside PL/SQL units.
   *
   */
  "sqlLevel"?: SqlFirewallPolicySummary.SqlLevel;
  /**
   * Specifies whether the SQL Firewall policy is enabled or disabled.
   */
  "status": SqlFirewallPolicySummary.Status;
  /**
   * Specifies the SQL Firewall policy enforcement option.
   */
  "enforcementScope"?: SqlFirewallPolicySummary.EnforcementScope;
  /**
   * Specifies the SQL Firewall action based on detection of SQL Firewall violations.
   */
  "violationAction"?: SqlFirewallPolicySummary.ViolationAction;
  /**
   * Specifies whether a unified audit policy should be enabled for auditing the SQL Firewall policy violations.
   */
  "violationAudit"?: SqlFirewallPolicySummary.ViolationAudit;
  /**
   * The time that the SQL Firewall policy was created, in the format defined by RFC3339.
   */
  "timeCreated": Date;
  /**
   * The date and time the SQL Firewall policy was last updated, in the format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the SQL Firewall policy.
   */
  "lifecycleState": model.SqlFirewallPolicyLifecycleState;
  /**
   * Details about the current state of the SQL Firewall policy in Data Safe.
   */
  "lifecycleDetails"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace SqlFirewallPolicySummary {
  export enum SqlLevel {
    UserIssuedSql = "USER_ISSUED_SQL",
    AllSql = "ALL_SQL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum EnforcementScope {
    EnforceContext = "ENFORCE_CONTEXT",
    EnforceSql = "ENFORCE_SQL",
    EnforceAll = "ENFORCE_ALL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ViolationAction {
    Block = "BLOCK",
    Observe = "OBSERVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ViolationAudit {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SqlFirewallPolicySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlFirewallPolicySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

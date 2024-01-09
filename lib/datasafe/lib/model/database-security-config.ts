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
 * Database Security Configurations resource represents the target database configurations.
 * Included in the Database Security Configurations are the SQL Firewall configurations such as
 * the status of the firewall, the time that the firewall status was last updated, violation log auto purge settings, etc.
 *
 */
export interface DatabaseSecurityConfig {
  /**
   * The OCID of the database security config.
   */
  "id": string;
  /**
   * The OCID of the compartment containing the database security config.
   */
  "compartmentId": string;
  /**
   * The display name of the database security config.
   */
  "displayName": string;
  /**
   * The description of the database security config.
   */
  "description"?: string;
  /**
   * The target OCID corresponding to the database security config.
   */
  "targetId": string;
  /**
   * The last date and time the database security config was refreshed, in the format defined by RFC3339.
   */
  "timeLastRefreshed"?: Date;
  /**
   * The time that the database security config was created, in the format defined by RFC3339.
   */
  "timeCreated": Date;
  /**
   * The date and time the database security configuration was last updated, in the format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the database security config.
   */
  "lifecycleState": model.DatabaseSecurityConfigLifecycleState;
  /**
   * Details about the current state of the database security config in Data Safe.
   */
  "lifecycleDetails"?: string;
  "sqlFirewallConfig"?: model.SqlFirewallConfig;
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
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DatabaseSecurityConfig {
  export function getJsonObj(obj: DatabaseSecurityConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "sqlFirewallConfig": obj.sqlFirewallConfig
          ? model.SqlFirewallConfig.getJsonObj(obj.sqlFirewallConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseSecurityConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "sqlFirewallConfig": obj.sqlFirewallConfig
          ? model.SqlFirewallConfig.getDeserializedJsonObj(obj.sqlFirewallConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}

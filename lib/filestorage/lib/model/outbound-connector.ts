/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Outbound connectors are used to help File Storage communicate with an external server, such as an LDAP server.
 * An outbound connector contains all the information needed to connect, authenticate, and gain authorization to perform the account's required functions.
 *
 */
export interface OutboundConnector {
  /**
    * The availability domain the outbound connector is in. May be unset
* as a blank or NULL value.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that contains the outbound connector.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the outbound connector.
   */
  "id": string;
  /**
   * The current state of this outbound connector.
   */
  "lifecycleState": OutboundConnector.LifecycleState;
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: `My outbound connector`
* 
    */
  "displayName": string;
  /**
    * The date and time the outbound connector was created
* in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair
   *  with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "connectorType": string;
}

export namespace OutboundConnector {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OutboundConnector): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectorType" in obj && obj.connectorType) {
      switch (obj.connectorType) {
        case "LDAPBIND":
          return model.LdapBindAccount.getJsonObj(<model.LdapBindAccount>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectorType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OutboundConnector): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectorType" in obj && obj.connectorType) {
      switch (obj.connectorType) {
        case "LDAPBIND":
          return model.LdapBindAccount.getDeserializedJsonObj(
            <model.LdapBindAccount>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectorType}`);
      }
    }
    return jsonObj;
  }
}

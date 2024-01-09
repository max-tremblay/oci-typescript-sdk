/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details of an external DB system connector.
 */
export interface ExternalDbSystemConnector {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external DB system connector.
   */
  "id": string;
  /**
   * The user-friendly name for the external connector. The name does not have to be unique.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external DB system that the connector is a part of.
   */
  "externalDbSystemId": string;
  /**
   * The status of connectivity to the external DB system component.
   */
  "connectionStatus"?: string;
  /**
   * The error message indicating the reason for connection failure or `null` if
   * the connection was successful.
   *
   */
  "connectionFailureMessage"?: string;
  /**
   * The current lifecycle state of the external DB system connector.
   */
  "lifecycleState": ExternalDbSystemConnector.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the connectionStatus of the external DB system connector was last updated.
   */
  "timeConnectionStatusLastUpdated"?: Date;
  /**
   * The date and time the external DB system connector was created.
   */
  "timeCreated": Date;
  /**
   * The date and time the external DB system connector was last updated.
   */
  "timeUpdated": Date;

  "connectorType": string;
}

export namespace ExternalDbSystemConnector {
  export enum LifecycleState {
    Creating = "CREATING",
    NotConnected = "NOT_CONNECTED",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExternalDbSystemConnector): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectorType" in obj && obj.connectorType) {
      switch (obj.connectorType) {
        case "MACS":
          return model.ExternalDbSystemMacsConnector.getJsonObj(
            <model.ExternalDbSystemMacsConnector>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectorType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalDbSystemConnector): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectorType" in obj && obj.connectorType) {
      switch (obj.connectorType) {
        case "MACS":
          return model.ExternalDbSystemMacsConnector.getDeserializedJsonObj(
            <model.ExternalDbSystemMacsConnector>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectorType}`);
      }
    }
    return jsonObj;
  }
}

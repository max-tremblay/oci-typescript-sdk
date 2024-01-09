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
 * The details of an external cluster instance.
 */
export interface ExternalClusterInstance {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external cluster instance.
   */
  "id": string;
  /**
   * The user-friendly name for the cluster instance. The name does not have to be unique.
   */
  "displayName": string;
  /**
   * The name of the external cluster instance.
   */
  "componentName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external cluster that the cluster instance belongs to.
   */
  "externalClusterId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external DB system that the cluster instance is a part of.
   */
  "externalDbSystemId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external DB node.
   */
  "externalDbNodeId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external connector.
   */
  "externalConnectorId"?: string;
  /**
   * The name of the host on which the cluster instance is running.
   */
  "hostName"?: string;
  /**
   * The role of the cluster node.
   */
  "nodeRole"?: ExternalClusterInstance.NodeRole;
  /**
   * The Oracle base location of Cluster Ready Services (CRS).
   */
  "crsBaseDirectory"?: string;
  /**
   * The Automatic Diagnostic Repository (ADR) home directory for the cluster instance.
   */
  "adrHomeDirectory"?: string;
  /**
   * The current lifecycle state of the external cluster instance.
   */
  "lifecycleState": ExternalClusterInstance.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the external cluster instance was created.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the external cluster instance was last updated.
   */
  "timeUpdated"?: Date;
}

export namespace ExternalClusterInstance {
  export enum NodeRole {
    Hub = "HUB",
    Leaf = "LEAF",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

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

  export function getJsonObj(obj: ExternalClusterInstance): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalClusterInstance): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

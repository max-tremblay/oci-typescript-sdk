/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A DB System is the core logical unit of MySQL Database Service.
 *
 */
export interface DbSystem {
  /**
   * The OCID of the DB System.
   */
  "id": string;
  /**
   * The user-friendly name for the DB System. It does not have to be unique.
   */
  "displayName": string;
  /**
   * User-provided data about the DB System.
   */
  "description"?: string;
  /**
   * The OCID of the compartment the DB System belongs in.
   */
  "compartmentId": string;
  /**
   * The OCID of the subnet the DB System is associated with.
   *
   */
  "subnetId": string;
  /**
   * If the policy is to enable high availability of the instance, by
   * maintaining secondary/failover capacity as necessary.
   *
   */
  "isHighlyAvailable"?: boolean;
  "currentPlacement"?: model.DbSystemPlacement;
  /**
   * DEPRECATED -- please use `isHeatWaveClusterAttached` instead.
   * If the DB System has an Analytics Cluster attached.
   *
   */
  "isAnalyticsClusterAttached"?: boolean;
  "analyticsCluster"?: model.AnalyticsClusterSummary;
  /**
   * If the DB System has a HeatWave Cluster attached.
   *
   */
  "isHeatWaveClusterAttached"?: boolean;
  "heatWaveCluster"?: model.HeatWaveClusterSummary;
  /**
    * The availability domain on which to deploy the Read/Write endpoint. This defines the preferred primary instance.
* <p>
In a failover scenario, the Read/Write endpoint is redirected to one of the other availability domains
* and the MySQL instance in that domain is promoted to the primary instance.
* This redirection does not affect the IP address of the DB System in any way.
* <p>
For a standalone DB System, this defines the availability domain in which the DB System is placed.
* 
    */
  "availabilityDomain"?: string;
  /**
    * The fault domain on which to deploy the Read/Write endpoint. This defines the preferred primary instance.
* <p>
In a failover scenario, the Read/Write endpoint is redirected to one of the other fault domains
* and the MySQL instance in that domain is promoted to the primary instance.
* This redirection does not affect the IP address of the DB System in any way.
* <p>
For a standalone DB System, this defines the fault domain in which the DB System is placed.
* 
    */
  "faultDomain"?: string;
  /**
   * The shape of the primary instances of the DB System. The shape
   * determines resources allocated to a DB System - CPU cores
   * and memory for VM shapes; CPU cores, memory and storage for non-VM
   * (or bare metal) shapes. To get a list of shapes, use (the
   * {@link #listShapes(ListShapesRequest) listShapes} operation.
   *
   */
  "shapeName"?: string;
  /**
   * Name of the MySQL Version in use for the DB System.
   */
  "mysqlVersion": string;
  "backupPolicy"?: model.BackupPolicy;
  "source"?:
    | model.DbSystemSourceFromBackup
    | model.DbSystemSourceFromNone
    | model.DbSystemSourceImportFromUrl;
  /**
   * The OCID of the Configuration to be used for Instances in this DB System.
   */
  "configurationId"?: string;
  /**
   * Initial size of the data volume in GiBs that will be created and attached.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInGBs": number;
  /**
   * The hostname for the primary endpoint of the DB System. Used for DNS.
   * The value is the hostname portion of the primary private IP's fully qualified domain name (FQDN)
   * (for example, \"dbsystem-1\" in FQDN \"dbsystem-1.subnet123.vcn1.oraclevcn.com\").
   * Must be unique across all VNICs in the subnet and comply with RFC 952 and RFC 1123.
   *
   */
  "hostnameLabel"?: string;
  /**
   * The IP address the DB System is configured to listen on. A private
   * IP address of the primary endpoint of the DB System. Must be an
   * available IP address within the subnet's CIDR. This will be a
   * \"dotted-quad\" style IPv4 address.
   *
   */
  "ipAddress"?: string;
  /**
   * The port for primary endpoint of the DB System to listen on. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The network port on which X Plugin listens for TCP/IP connections. This is the X Plugin equivalent of port.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "portX"?: number;
  /**
   * The network endpoints available for this DB System.
   *
   */
  "endpoints"?: Array<model.DbSystemEndpoint>;
  /**
   * A list with a summary of all the Channels attached to the DB System.
   */
  "channels"?: Array<model.ChannelSummary>;
  /**
   * The current state of the DB System.
   */
  "lifecycleState": DbSystem.LifecycleState;
  /**
   * Additional information about the current lifecycleState.
   */
  "lifecycleDetails"?: string;
  "maintenance": model.MaintenanceDetails;
  "deletionPolicy": model.DeletionPolicyDetails;
  /**
   * The date and time the DB System was created.
   */
  "timeCreated": Date;
  /**
   * The time the DB System was last updated.
   */
  "timeUpdated": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Whether to run the DB System with InnoDB Redo Logs and the Double Write Buffer enabled or disabled,
   * and whether to enable or disable syncing of the Binary Logs.
   *
   */
  "crashRecovery"?: model.CrashRecoveryStatus;
}

export namespace DbSystem {
  export enum LifecycleState {
    Creating = "CREATING",
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

  export function getJsonObj(obj: DbSystem): object {
    const jsonObj = {
      ...obj,
      ...{
        "currentPlacement": obj.currentPlacement
          ? model.DbSystemPlacement.getJsonObj(obj.currentPlacement)
          : undefined,

        "analyticsCluster": obj.analyticsCluster
          ? model.AnalyticsClusterSummary.getJsonObj(obj.analyticsCluster)
          : undefined,

        "heatWaveCluster": obj.heatWaveCluster
          ? model.HeatWaveClusterSummary.getJsonObj(obj.heatWaveCluster)
          : undefined,

        "backupPolicy": obj.backupPolicy
          ? model.BackupPolicy.getJsonObj(obj.backupPolicy)
          : undefined,
        "source": obj.source ? model.DbSystemSource.getJsonObj(obj.source) : undefined,

        "endpoints": obj.endpoints
          ? obj.endpoints.map(item => {
              return model.DbSystemEndpoint.getJsonObj(item);
            })
          : undefined,
        "channels": obj.channels
          ? obj.channels.map(item => {
              return model.ChannelSummary.getJsonObj(item);
            })
          : undefined,

        "maintenance": obj.maintenance
          ? model.MaintenanceDetails.getJsonObj(obj.maintenance)
          : undefined,
        "deletionPolicy": obj.deletionPolicy
          ? model.DeletionPolicyDetails.getJsonObj(obj.deletionPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbSystem): object {
    const jsonObj = {
      ...obj,
      ...{
        "currentPlacement": obj.currentPlacement
          ? model.DbSystemPlacement.getDeserializedJsonObj(obj.currentPlacement)
          : undefined,

        "analyticsCluster": obj.analyticsCluster
          ? model.AnalyticsClusterSummary.getDeserializedJsonObj(obj.analyticsCluster)
          : undefined,

        "heatWaveCluster": obj.heatWaveCluster
          ? model.HeatWaveClusterSummary.getDeserializedJsonObj(obj.heatWaveCluster)
          : undefined,

        "backupPolicy": obj.backupPolicy
          ? model.BackupPolicy.getDeserializedJsonObj(obj.backupPolicy)
          : undefined,
        "source": obj.source ? model.DbSystemSource.getDeserializedJsonObj(obj.source) : undefined,

        "endpoints": obj.endpoints
          ? obj.endpoints.map(item => {
              return model.DbSystemEndpoint.getDeserializedJsonObj(item);
            })
          : undefined,
        "channels": obj.channels
          ? obj.channels.map(item => {
              return model.ChannelSummary.getDeserializedJsonObj(item);
            })
          : undefined,

        "maintenance": obj.maintenance
          ? model.MaintenanceDetails.getDeserializedJsonObj(obj.maintenance)
          : undefined,
        "deletionPolicy": obj.deletionPolicy
          ? model.DeletionPolicyDetails.getDeserializedJsonObj(obj.deletionPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}

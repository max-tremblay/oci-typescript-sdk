/**
 * Globally Distributed Database
 * Use the Globally Distributed Database service APIs to create and manage distributed databases.
 * OpenAPI spec version: 20230301
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
 * Details of ATP-D based shard.
 */
export interface DedicatedShardDetails {
  "encryptionKeyDetails"?: model.DedicatedShardOrCatalogEncryptionKeyDetails;
  /**
   * Name of the shard.
   */
  "name": string;
  /**
   * The compute amount available to the underlying autonomous database associated with shard. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "computeCount": number;
  /**
   * The data disk group size to be allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInGbs": number;
  /**
   * Name of the shard-group to which the shard belongs.
   */
  "shardGroup": string;
  /**
   * The time the the shard was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time the shard was last updated. An RFC3339 formatted datetime string
   */
  "timeUpdated": Date;
  /**
   * The time the ssl certificate associated with shard expires. An RFC3339 formatted datetime string
   */
  "timeSslCertificateExpires"?: Date;
  /**
   * Status of shard or catalog or gsm for the sharded database.
   */
  "status": DedicatedShardDetails.Status;
  /**
   * Shard space name.
   */
  "shardSpace"?: string;
  /**
   * Identifier of the underlying supporting resource.
   *
   */
  "supportingResourceId"?: string;
  /**
   * Identifier of the underlying container database.
   *
   */
  "containerDatabaseId"?: string;
  /**
   * Identifier of the underlying container database parent.
   *
   */
  "containerDatabaseParentId"?: string;
  /**
   * Determines the auto-scaling mode.
   */
  "isAutoScalingEnabled": boolean;
  /**
   * Identifier of the primary cloudAutonomousVmCluster for the shard.
   *
   */
  "cloudAutonomousVmClusterId": string;
  /**
   * Identifier of the peer cloudAutonomousVmCluster for the shard.
   *
   */
  "peerCloudAutonomousVmClusterId"?: string;
  /**
   * Additional metadata related to shard's underlying supporting resource.
   */
  "metadata"?: { [key: string]: any };
}

export namespace DedicatedShardDetails {
  export enum Status {
    Failed = "FAILED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Updating = "UPDATING",
    Creating = "CREATING",
    Created = "CREATED",
    ReadyForConfiguration = "READY_FOR_CONFIGURATION",
    Configured = "CONFIGURED",
    NeedsAttention = "NEEDS_ATTENTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DedicatedShardDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "encryptionKeyDetails": obj.encryptionKeyDetails
          ? model.DedicatedShardOrCatalogEncryptionKeyDetails.getJsonObj(obj.encryptionKeyDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DedicatedShardDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "encryptionKeyDetails": obj.encryptionKeyDetails
          ? model.DedicatedShardOrCatalogEncryptionKeyDetails.getDeserializedJsonObj(
              obj.encryptionKeyDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}

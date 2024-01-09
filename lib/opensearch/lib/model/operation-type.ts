/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
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
 * The types of operations that spawn work requests.
 **/
export enum OperationType {
  CreateOpensearchCluster = "CREATE_OPENSEARCH_CLUSTER",
  UpdateOpensearchCluster = "UPDATE_OPENSEARCH_CLUSTER",
  DeleteOpensearchCluster = "DELETE_OPENSEARCH_CLUSTER",
  MoveOpensearchCluster = "MOVE_OPENSEARCH_CLUSTER",
  RestoreOpensearchCluster = "RESTORE_OPENSEARCH_CLUSTER",
  BackupOpensearchCluster = "BACKUP_OPENSEARCH_CLUSTER",
  UpdateOpensearchClusterBackup = "UPDATE_OPENSEARCH_CLUSTER_BACKUP",
  MoveOpensearchClusterBackup = "MOVE_OPENSEARCH_CLUSTER_BACKUP",
  DeleteOpensearchClusterBackup = "DELETE_OPENSEARCH_CLUSTER_BACKUP",
  UpdateOpensearchClusterSecurityConfig = "UPDATE_OPENSEARCH_CLUSTER_SECURITY_CONFIG",

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

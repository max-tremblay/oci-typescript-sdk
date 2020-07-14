/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Plane API
 * OpenAPI spec version: 20191010
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Blockchain Platform Instance Description Preview after Scaling.
 */
export interface ScaledBlockchainPlatformPreview {
  /**
   * unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Platform Instance Display name, can be renamed
   */
  "displayName": string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * Platform Instance Description
   */
  "description"?: string;
  /**
   * Type of compute shape - one of Standard, (Enterprise) Small, Medium, Large or Extra Large
   */
  "computeShape": string;
  /**
   * Storage size in TBs
   */
  "storageSizeInTBs"?: number;
  /**
   * Storage size in TBs post scaling
   */
  "storageSizeInTBsPostScaling"?: number;
  "componentDetails"?: model.BlockchainPlatformComponentDetails;
  "replicas"?: model.ReplicaDetails;
  "componentDetailsPostScaling"?: model.BlockchainPlatformComponentDetails;
  "replicasPostScaling"?: model.ReplicaDetails;
  /**
   * List of OcpuUtilization for all hosts
   */
  "hostOcpuUtilizationInfo"?: Array<model.OcpuUtilizationInfo>;
  /**
   * List of OcpuUtilization for all hosts after scaling
   */
  "hostOcpuUtilizationInfoPostScaling"?: Array<model.OcpuUtilizationInfo>;
  /**
   * Number of new VMs that would be created
   */
  "newVmCount"?: number;
  "meteringPreview"?: model.ScaledPlatformMeteringPreview;
  "scalePayload"?: model.ScaleBlockchainPlatformDetails;
}

export namespace ScaledBlockchainPlatformPreview {
  export function getJsonObj(obj: ScaledBlockchainPlatformPreview): object {
    const jsonObj = {
      ...obj,
      ...{
        "componentDetails": obj.componentDetails
          ? model.BlockchainPlatformComponentDetails.getJsonObj(obj.componentDetails)
          : undefined,
        "replicas": obj.replicas ? model.ReplicaDetails.getJsonObj(obj.replicas) : undefined,
        "componentDetailsPostScaling": obj.componentDetailsPostScaling
          ? model.BlockchainPlatformComponentDetails.getJsonObj(obj.componentDetailsPostScaling)
          : undefined,
        "replicasPostScaling": obj.replicasPostScaling
          ? model.ReplicaDetails.getJsonObj(obj.replicasPostScaling)
          : undefined,
        "hostOcpuUtilizationInfo": obj.hostOcpuUtilizationInfo
          ? obj.hostOcpuUtilizationInfo.map(item => {
              return model.OcpuUtilizationInfo.getJsonObj(item);
            })
          : undefined,
        "hostOcpuUtilizationInfoPostScaling": obj.hostOcpuUtilizationInfoPostScaling
          ? obj.hostOcpuUtilizationInfoPostScaling.map(item => {
              return model.OcpuUtilizationInfo.getJsonObj(item);
            })
          : undefined,

        "meteringPreview": obj.meteringPreview
          ? model.ScaledPlatformMeteringPreview.getJsonObj(obj.meteringPreview)
          : undefined,
        "scalePayload": obj.scalePayload
          ? model.ScaleBlockchainPlatformDetails.getJsonObj(obj.scalePayload)
          : undefined
      }
    };

    return jsonObj;
  }
}

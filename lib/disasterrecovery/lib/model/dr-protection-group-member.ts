/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * The properties of a member in a DR protection group.
 */
export interface DrProtectionGroupMember {
  /**
    * The OCID of the member.
* <p>
Example: `ocid1.instance.oc1..uniqueID`
* 
    */
  "memberId": string;

  "memberType": string;
}

export namespace DrProtectionGroupMember {
  export function getJsonObj(obj: DrProtectionGroupMember): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "memberType" in obj && obj.memberType) {
      switch (obj.memberType) {
        case "VOLUME_GROUP":
          return model.DrProtectionGroupMemberVolumeGroup.getJsonObj(
            <model.DrProtectionGroupMemberVolumeGroup>(<object>jsonObj),
            true
          );
        case "NETWORK_LOAD_BALANCER":
          return model.DrProtectionGroupMemberNetworkLoadBalancer.getJsonObj(
            <model.DrProtectionGroupMemberNetworkLoadBalancer>(<object>jsonObj),
            true
          );
        case "FILE_SYSTEM":
          return model.DrProtectionGroupMemberFileSystem.getJsonObj(
            <model.DrProtectionGroupMemberFileSystem>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_MOVABLE":
          return model.DrProtectionGroupMemberComputeInstanceMovable.getJsonObj(
            <model.DrProtectionGroupMemberComputeInstanceMovable>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.DrProtectionGroupMemberAutonomousDatabase.getJsonObj(
            <model.DrProtectionGroupMemberAutonomousDatabase>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER":
          return model.DrProtectionGroupMemberLoadBalancer.getJsonObj(
            <model.DrProtectionGroupMemberLoadBalancer>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE":
          return model.DrProtectionGroupMemberComputeInstance.getJsonObj(
            <model.DrProtectionGroupMemberComputeInstance>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_NON_MOVABLE":
          return model.DrProtectionGroupMemberComputeInstanceNonMovable.getJsonObj(
            <model.DrProtectionGroupMemberComputeInstanceNonMovable>(<object>jsonObj),
            true
          );
        case "DATABASE":
          return model.DrProtectionGroupMemberDatabase.getJsonObj(
            <model.DrProtectionGroupMemberDatabase>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.memberType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrProtectionGroupMember): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "memberType" in obj && obj.memberType) {
      switch (obj.memberType) {
        case "VOLUME_GROUP":
          return model.DrProtectionGroupMemberVolumeGroup.getDeserializedJsonObj(
            <model.DrProtectionGroupMemberVolumeGroup>(<object>jsonObj),
            true
          );
        case "NETWORK_LOAD_BALANCER":
          return model.DrProtectionGroupMemberNetworkLoadBalancer.getDeserializedJsonObj(
            <model.DrProtectionGroupMemberNetworkLoadBalancer>(<object>jsonObj),
            true
          );
        case "FILE_SYSTEM":
          return model.DrProtectionGroupMemberFileSystem.getDeserializedJsonObj(
            <model.DrProtectionGroupMemberFileSystem>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_MOVABLE":
          return model.DrProtectionGroupMemberComputeInstanceMovable.getDeserializedJsonObj(
            <model.DrProtectionGroupMemberComputeInstanceMovable>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.DrProtectionGroupMemberAutonomousDatabase.getDeserializedJsonObj(
            <model.DrProtectionGroupMemberAutonomousDatabase>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER":
          return model.DrProtectionGroupMemberLoadBalancer.getDeserializedJsonObj(
            <model.DrProtectionGroupMemberLoadBalancer>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE":
          return model.DrProtectionGroupMemberComputeInstance.getDeserializedJsonObj(
            <model.DrProtectionGroupMemberComputeInstance>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_NON_MOVABLE":
          return model.DrProtectionGroupMemberComputeInstanceNonMovable.getDeserializedJsonObj(
            <model.DrProtectionGroupMemberComputeInstanceNonMovable>(<object>jsonObj),
            true
          );
        case "DATABASE":
          return model.DrProtectionGroupMemberDatabase.getDeserializedJsonObj(
            <model.DrProtectionGroupMemberDatabase>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.memberType}`);
      }
    }
    return jsonObj;
  }
}

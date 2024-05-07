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
 * Enumeration of different types of Oracle Cloud Infrastructure (OCI) resources that are members in a DR protection group.
 * - COMPUTE_INSTANCE - Deprecated. A compute instance.
 * - COMPUTE_INSTANCE_MOVABLE - A compute instance that moves across regions or ADs during DR.
 * - COMPUTE_INSTANCE_NON_MOVABLE - A compute instance that does not move across regions or ADs during DR.
 * - VOLUME_GROUP - A volume group.
 * - DATABASE - An Oracle Database instance from Base Database service, or Exadata Database service.
 * - AUTONOMOUS_DATABASE - An Oracle Autonomous Database Serverless.
 * - LOAD_BALANCER - A load balancer.
 * - NETWORK_LOAD_BALANCER - A network load balancer.
 * - FILE_SYSTEM - A file system.
 *
 **/
export enum DrProtectionGroupMemberType {
  ComputeInstance = "COMPUTE_INSTANCE",
  ComputeInstanceMovable = "COMPUTE_INSTANCE_MOVABLE",
  ComputeInstanceNonMovable = "COMPUTE_INSTANCE_NON_MOVABLE",
  VolumeGroup = "VOLUME_GROUP",
  Database = "DATABASE",
  AutonomousDatabase = "AUTONOMOUS_DATABASE",
  LoadBalancer = "LOAD_BALANCER",
  NetworkLoadBalancer = "NETWORK_LOAD_BALANCER",
  FileSystem = "FILE_SYSTEM",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DrProtectionGroupMemberType {
  export function getJsonObj(obj: DrProtectionGroupMemberType): DrProtectionGroupMemberType {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: DrProtectionGroupMemberType
  ): DrProtectionGroupMemberType {
    return obj;
  }
}

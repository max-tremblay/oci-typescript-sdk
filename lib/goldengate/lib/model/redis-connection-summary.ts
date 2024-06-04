/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Summary of the Redis Database Connection.
 *
 */
export interface RedisConnectionSummary extends model.ConnectionSummary {
  /**
   * The Redis technology type.
   */
  "technologyType": string;
  /**
   * Comma separated list of Redis server addresses, specified as host:port entries, where :port is optional.
   * If port is not specified, it defaults to 6379.
   * Used for establishing the initial connection to the Redis cluster.
   * Example: {@code \"server1.example.com:6379,server2.example.com:6379\"}
   *
   */
  "servers": string;
  /**
   * Security protocol for Redis.
   */
  "securityProtocol": string;
  /**
   * Authenticationentication type for the Redis database.
   */
  "authenticationType": string;
  /**
   * The username Oracle GoldenGate uses to connect the associated system of the given technology.
   * This username must already exist and be available by the system/application to be connected to
   * and must conform to the case sensitivty requirments defined in it.
   *
   */
  "username"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Redis cluster.
   *
   */
  "redisClusterId"?: string;

  "connectionType": string;
}

export namespace RedisConnectionSummary {
  export function getJsonObj(obj: RedisConnectionSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getJsonObj(obj) as RedisConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "REDIS";
  export function getDeserializedJsonObj(
    obj: RedisConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getDeserializedJsonObj(obj) as RedisConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
}

/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
 * 
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
 * The information to update a Kafka Connection.
 *
 */
export interface UpdateKafkaConnectionDetails extends model.UpdateConnectionDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the stream pool being referenced.
   *
   */
  "streamPoolId"?: string;
  /**
   * Kafka bootstrap. Equivalent of bootstrap.servers configuration property in Kafka:
   * list of KafkaBootstrapServer objects specified by host/port.
   * Used for establishing the initial connection to the Kafka cluster.
   * Example: `\"server1.example.com:9092,server2.example.com:9092\"`
   *
   */
  "bootstrapServers"?: Array<model.KafkaBootstrapServer>;
  /**
   * Security Type for Kafka.
   *
   */
  "securityProtocol"?: string;
  /**
   * The username Oracle GoldenGate uses to connect the associated RDBMS.  This username must
   * already exist and be available for use by the database.  It must conform to the security
   * requirements implemented by the database including length, case sensitivity, and so on.
   *
   */
  "username"?: string;
  /**
   * The password Oracle GoldenGate uses to connect the associated RDBMS.  It must conform to the
   * specific security requirements implemented by the database including length, case
   * sensitivity, and so on.
   *
   */
  "password"?: string;
  /**
   * The base64 encoded content of the TrustStore file.
   *
   */
  "trustStore"?: string;
  /**
   * The TrustStore password.
   *
   */
  "trustStorePassword"?: string;
  /**
   * The base64 encoded content of the KeyStore file.
   *
   */
  "keyStore"?: string;
  /**
   * The KeyStore password.
   *
   */
  "keyStorePassword"?: string;
  /**
   * The password for the cert inside of the KeyStore.
   * In case it differs from the KeyStore password, it should be provided.
   *
   */
  "sslKeyPassword"?: string;
  /**
   * The base64 encoded content of the consumer.properties file.
   *
   */
  "consumerProperties"?: string;
  /**
   * The base64 encoded content of the producer.properties file.
   *
   */
  "producerProperties"?: string;

  "connectionType": string;
}

export namespace UpdateKafkaConnectionDetails {
  export function getJsonObj(obj: UpdateKafkaConnectionDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(obj) as UpdateKafkaConnectionDetails)),
      ...{
        "bootstrapServers": obj.bootstrapServers
          ? obj.bootstrapServers.map(item => {
              return model.KafkaBootstrapServer.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectionType = "KAFKA";
  export function getDeserializedJsonObj(
    obj: UpdateKafkaConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as UpdateKafkaConnectionDetails)),
      ...{
        "bootstrapServers": obj.bootstrapServers
          ? obj.bootstrapServers.map(item => {
              return model.KafkaBootstrapServer.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

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
 * The information about a new Connection.
 *
 */
export interface CreateConnectionDetails {
  /**
   * An object's Display Name.
   *
   */
  "displayName": string;
  /**
   * Metadata about this specific object.
   *
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment being referenced.
   *
   */
  "compartmentId": string;
  /**
    * A simple key-value pair that is applied without any predefined name, type, or scope. Exists
* for cross-compatibility only.
* <p>
Example: {@code {\"bar-key\": \"value\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Tags defined for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.AddResourceLockDetails>;
  /**
   * Refers to the customer's vault OCID.
   * If provided, it references a vault where GoldenGate can manage secrets. Customers must add policies to permit GoldenGate
   * to manage secrets contained within this vault.
   *
   */
  "vaultId"?: string;
  /**
   * Refers to the customer's master key OCID.
   * If provided, it references a key to manage secrets. Customers must add policies to permit GoldenGate to use this key.
   *
   */
  "keyId"?: string;
  /**
   * An array of Network Security Group OCIDs used to define network access for either Deployments or Connections.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the target subnet of the dedicated connection.
   *
   */
  "subnetId"?: string;
  /**
   * Controls the network traffic direction to the target:
   * SHARED_SERVICE_ENDPOINT: Traffic flows through the Goldengate Service's network to public hosts. Cannot be used for private targets.
   * SHARED_DEPLOYMENT_ENDPOINT: Network traffic flows from the assigned deployment's private endpoint through the deployment's subnet.
   * DEDICATED_ENDPOINT: A dedicated private endpoint is created in the target VCN subnet for the connection. The subnetId is required when DEDICATED_ENDPOINT networking is selected.
   *
   */
  "routingMethod"?: model.RoutingMethod;

  "connectionType": string;
}

export namespace CreateConnectionDetails {
  export function getJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.AddResourceLockDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "POSTGRESQL":
          return model.CreatePostgresqlConnectionDetails.getJsonObj(
            <model.CreatePostgresqlConnectionDetails>(<object>jsonObj),
            true
          );
        case "KAFKA_SCHEMA_REGISTRY":
          return model.CreateKafkaSchemaRegistryConnectionDetails.getJsonObj(
            <model.CreateKafkaSchemaRegistryConnectionDetails>(<object>jsonObj),
            true
          );
        case "MICROSOFT_SQLSERVER":
          return model.CreateMicrosoftSqlserverConnectionDetails.getJsonObj(
            <model.CreateMicrosoftSqlserverConnectionDetails>(<object>jsonObj),
            true
          );
        case "JAVA_MESSAGE_SERVICE":
          return model.CreateJavaMessageServiceConnectionDetails.getJsonObj(
            <model.CreateJavaMessageServiceConnectionDetails>(<object>jsonObj),
            true
          );
        case "GOOGLE_BIGQUERY":
          return model.CreateGoogleBigQueryConnectionDetails.getJsonObj(
            <model.CreateGoogleBigQueryConnectionDetails>(<object>jsonObj),
            true
          );
        case "AMAZON_KINESIS":
          return model.CreateAmazonKinesisConnectionDetails.getJsonObj(
            <model.CreateAmazonKinesisConnectionDetails>(<object>jsonObj),
            true
          );
        case "SNOWFLAKE":
          return model.CreateSnowflakeConnectionDetails.getJsonObj(
            <model.CreateSnowflakeConnectionDetails>(<object>jsonObj),
            true
          );
        case "AZURE_DATA_LAKE_STORAGE":
          return model.CreateAzureDataLakeStorageConnectionDetails.getJsonObj(
            <model.CreateAzureDataLakeStorageConnectionDetails>(<object>jsonObj),
            true
          );
        case "MONGODB":
          return model.CreateMongoDbConnectionDetails.getJsonObj(
            <model.CreateMongoDbConnectionDetails>(<object>jsonObj),
            true
          );
        case "AMAZON_S3":
          return model.CreateAmazonS3ConnectionDetails.getJsonObj(
            <model.CreateAmazonS3ConnectionDetails>(<object>jsonObj),
            true
          );
        case "HDFS":
          return model.CreateHdfsConnectionDetails.getJsonObj(
            <model.CreateHdfsConnectionDetails>(<object>jsonObj),
            true
          );
        case "OCI_OBJECT_STORAGE":
          return model.CreateOciObjectStorageConnectionDetails.getJsonObj(
            <model.CreateOciObjectStorageConnectionDetails>(<object>jsonObj),
            true
          );
        case "DB2":
          return model.CreateDb2ConnectionDetails.getJsonObj(
            <model.CreateDb2ConnectionDetails>(<object>jsonObj),
            true
          );
        case "ELASTICSEARCH":
          return model.CreateElasticsearchConnectionDetails.getJsonObj(
            <model.CreateElasticsearchConnectionDetails>(<object>jsonObj),
            true
          );
        case "AZURE_SYNAPSE_ANALYTICS":
          return model.CreateAzureSynapseConnectionDetails.getJsonObj(
            <model.CreateAzureSynapseConnectionDetails>(<object>jsonObj),
            true
          );
        case "REDIS":
          return model.CreateRedisConnectionDetails.getJsonObj(
            <model.CreateRedisConnectionDetails>(<object>jsonObj),
            true
          );
        case "MYSQL":
          return model.CreateMysqlConnectionDetails.getJsonObj(
            <model.CreateMysqlConnectionDetails>(<object>jsonObj),
            true
          );
        case "GENERIC":
          return model.CreateGenericConnectionDetails.getJsonObj(
            <model.CreateGenericConnectionDetails>(<object>jsonObj),
            true
          );
        case "GOOGLE_CLOUD_STORAGE":
          return model.CreateGoogleCloudStorageConnectionDetails.getJsonObj(
            <model.CreateGoogleCloudStorageConnectionDetails>(<object>jsonObj),
            true
          );
        case "KAFKA":
          return model.CreateKafkaConnectionDetails.getJsonObj(
            <model.CreateKafkaConnectionDetails>(<object>jsonObj),
            true
          );
        case "ORACLE":
          return model.CreateOracleConnectionDetails.getJsonObj(
            <model.CreateOracleConnectionDetails>(<object>jsonObj),
            true
          );
        case "GOLDENGATE":
          return model.CreateGoldenGateConnectionDetails.getJsonObj(
            <model.CreateGoldenGateConnectionDetails>(<object>jsonObj),
            true
          );
        case "AMAZON_REDSHIFT":
          return model.CreateAmazonRedshiftConnectionDetails.getJsonObj(
            <model.CreateAmazonRedshiftConnectionDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_NOSQL":
          return model.CreateOracleNosqlConnectionDetails.getJsonObj(
            <model.CreateOracleNosqlConnectionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.AddResourceLockDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "POSTGRESQL":
          return model.CreatePostgresqlConnectionDetails.getDeserializedJsonObj(
            <model.CreatePostgresqlConnectionDetails>(<object>jsonObj),
            true
          );
        case "KAFKA_SCHEMA_REGISTRY":
          return model.CreateKafkaSchemaRegistryConnectionDetails.getDeserializedJsonObj(
            <model.CreateKafkaSchemaRegistryConnectionDetails>(<object>jsonObj),
            true
          );
        case "MICROSOFT_SQLSERVER":
          return model.CreateMicrosoftSqlserverConnectionDetails.getDeserializedJsonObj(
            <model.CreateMicrosoftSqlserverConnectionDetails>(<object>jsonObj),
            true
          );
        case "JAVA_MESSAGE_SERVICE":
          return model.CreateJavaMessageServiceConnectionDetails.getDeserializedJsonObj(
            <model.CreateJavaMessageServiceConnectionDetails>(<object>jsonObj),
            true
          );
        case "GOOGLE_BIGQUERY":
          return model.CreateGoogleBigQueryConnectionDetails.getDeserializedJsonObj(
            <model.CreateGoogleBigQueryConnectionDetails>(<object>jsonObj),
            true
          );
        case "AMAZON_KINESIS":
          return model.CreateAmazonKinesisConnectionDetails.getDeserializedJsonObj(
            <model.CreateAmazonKinesisConnectionDetails>(<object>jsonObj),
            true
          );
        case "SNOWFLAKE":
          return model.CreateSnowflakeConnectionDetails.getDeserializedJsonObj(
            <model.CreateSnowflakeConnectionDetails>(<object>jsonObj),
            true
          );
        case "AZURE_DATA_LAKE_STORAGE":
          return model.CreateAzureDataLakeStorageConnectionDetails.getDeserializedJsonObj(
            <model.CreateAzureDataLakeStorageConnectionDetails>(<object>jsonObj),
            true
          );
        case "MONGODB":
          return model.CreateMongoDbConnectionDetails.getDeserializedJsonObj(
            <model.CreateMongoDbConnectionDetails>(<object>jsonObj),
            true
          );
        case "AMAZON_S3":
          return model.CreateAmazonS3ConnectionDetails.getDeserializedJsonObj(
            <model.CreateAmazonS3ConnectionDetails>(<object>jsonObj),
            true
          );
        case "HDFS":
          return model.CreateHdfsConnectionDetails.getDeserializedJsonObj(
            <model.CreateHdfsConnectionDetails>(<object>jsonObj),
            true
          );
        case "OCI_OBJECT_STORAGE":
          return model.CreateOciObjectStorageConnectionDetails.getDeserializedJsonObj(
            <model.CreateOciObjectStorageConnectionDetails>(<object>jsonObj),
            true
          );
        case "DB2":
          return model.CreateDb2ConnectionDetails.getDeserializedJsonObj(
            <model.CreateDb2ConnectionDetails>(<object>jsonObj),
            true
          );
        case "ELASTICSEARCH":
          return model.CreateElasticsearchConnectionDetails.getDeserializedJsonObj(
            <model.CreateElasticsearchConnectionDetails>(<object>jsonObj),
            true
          );
        case "AZURE_SYNAPSE_ANALYTICS":
          return model.CreateAzureSynapseConnectionDetails.getDeserializedJsonObj(
            <model.CreateAzureSynapseConnectionDetails>(<object>jsonObj),
            true
          );
        case "REDIS":
          return model.CreateRedisConnectionDetails.getDeserializedJsonObj(
            <model.CreateRedisConnectionDetails>(<object>jsonObj),
            true
          );
        case "MYSQL":
          return model.CreateMysqlConnectionDetails.getDeserializedJsonObj(
            <model.CreateMysqlConnectionDetails>(<object>jsonObj),
            true
          );
        case "GENERIC":
          return model.CreateGenericConnectionDetails.getDeserializedJsonObj(
            <model.CreateGenericConnectionDetails>(<object>jsonObj),
            true
          );
        case "GOOGLE_CLOUD_STORAGE":
          return model.CreateGoogleCloudStorageConnectionDetails.getDeserializedJsonObj(
            <model.CreateGoogleCloudStorageConnectionDetails>(<object>jsonObj),
            true
          );
        case "KAFKA":
          return model.CreateKafkaConnectionDetails.getDeserializedJsonObj(
            <model.CreateKafkaConnectionDetails>(<object>jsonObj),
            true
          );
        case "ORACLE":
          return model.CreateOracleConnectionDetails.getDeserializedJsonObj(
            <model.CreateOracleConnectionDetails>(<object>jsonObj),
            true
          );
        case "GOLDENGATE":
          return model.CreateGoldenGateConnectionDetails.getDeserializedJsonObj(
            <model.CreateGoldenGateConnectionDetails>(<object>jsonObj),
            true
          );
        case "AMAZON_REDSHIFT":
          return model.CreateAmazonRedshiftConnectionDetails.getDeserializedJsonObj(
            <model.CreateAmazonRedshiftConnectionDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_NOSQL":
          return model.CreateOracleNosqlConnectionDetails.getDeserializedJsonObj(
            <model.CreateOracleNosqlConnectionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
}

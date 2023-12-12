/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The task type contains the audit summary information and the definition of the task.
 */
export interface Task {
  /**
   * Generated key that can be used in API calls to identify task. On scenarios where reference to the task is needed, a value can be passed in create.
   */
  "key"?: string;
  /**
   * The object's model version.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  /**
   * An array of input ports.
   */
  "inputPorts"?: Array<model.InputPort>;
  /**
   * An array of output ports.
   */
  "outputPorts"?: Array<model.OutputPort>;
  /**
   * An array of parameters.
   */
  "parameters"?: Array<model.Parameter>;
  "opConfigValues"?: model.ConfigValues;
  "configProviderDelegate"?: model.ConfigProvider;
  /**
   * Whether the same task can be executed concurrently.
   */
  "isConcurrentAllowed"?: boolean;
  "metadata"?: model.ObjectMetadata;
  /**
   * A key map. If provided, key is replaced with generated key. This structure provides mapping between user provided key and generated key.
   */
  "keyMap"?: { [key: string]: string };
  "registryMetadata"?: model.RegistryMetadata;

  "modelType": string;
}

export namespace Task {
  export function getJsonObj(obj: Task): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "inputPorts": obj.inputPorts
          ? obj.inputPorts.map(item => {
              return model.InputPort.getJsonObj(item);
            })
          : undefined,
        "outputPorts": obj.outputPorts
          ? obj.outputPorts.map(item => {
              return model.OutputPort.getJsonObj(item);
            })
          : undefined,
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.Parameter.getJsonObj(item);
            })
          : undefined,
        "opConfigValues": obj.opConfigValues
          ? model.ConfigValues.getJsonObj(obj.opConfigValues)
          : undefined,
        "configProviderDelegate": obj.configProviderDelegate
          ? model.ConfigProvider.getJsonObj(obj.configProviderDelegate)
          : undefined,

        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined,

        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "PIPELINE_TASK":
          return model.TaskFromPipelineTaskDetails.getJsonObj(
            <model.TaskFromPipelineTaskDetails>(<object>jsonObj),
            true
          );
        case "INTEGRATION_TASK":
          return model.TaskFromIntegrationTaskDetails.getJsonObj(
            <model.TaskFromIntegrationTaskDetails>(<object>jsonObj),
            true
          );
        case "SQL_TASK":
          return model.TaskFromSQLTaskDetails.getJsonObj(
            <model.TaskFromSQLTaskDetails>(<object>jsonObj),
            true
          );
        case "REST_TASK":
          return model.TaskFromRestTaskDetails.getJsonObj(
            <model.TaskFromRestTaskDetails>(<object>jsonObj),
            true
          );
        case "OCI_DATAFLOW_TASK":
          return model.TaskFromOCIDataflowTaskDetails.getJsonObj(
            <model.TaskFromOCIDataflowTaskDetails>(<object>jsonObj),
            true
          );
        case "DATA_LOADER_TASK":
          return model.TaskFromDataLoaderTaskDetails.getJsonObj(
            <model.TaskFromDataLoaderTaskDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Task): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "inputPorts": obj.inputPorts
          ? obj.inputPorts.map(item => {
              return model.InputPort.getDeserializedJsonObj(item);
            })
          : undefined,
        "outputPorts": obj.outputPorts
          ? obj.outputPorts.map(item => {
              return model.OutputPort.getDeserializedJsonObj(item);
            })
          : undefined,
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.Parameter.getDeserializedJsonObj(item);
            })
          : undefined,
        "opConfigValues": obj.opConfigValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.opConfigValues)
          : undefined,
        "configProviderDelegate": obj.configProviderDelegate
          ? model.ConfigProvider.getDeserializedJsonObj(obj.configProviderDelegate)
          : undefined,

        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined,

        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getDeserializedJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "PIPELINE_TASK":
          return model.TaskFromPipelineTaskDetails.getDeserializedJsonObj(
            <model.TaskFromPipelineTaskDetails>(<object>jsonObj),
            true
          );
        case "INTEGRATION_TASK":
          return model.TaskFromIntegrationTaskDetails.getDeserializedJsonObj(
            <model.TaskFromIntegrationTaskDetails>(<object>jsonObj),
            true
          );
        case "SQL_TASK":
          return model.TaskFromSQLTaskDetails.getDeserializedJsonObj(
            <model.TaskFromSQLTaskDetails>(<object>jsonObj),
            true
          );
        case "REST_TASK":
          return model.TaskFromRestTaskDetails.getDeserializedJsonObj(
            <model.TaskFromRestTaskDetails>(<object>jsonObj),
            true
          );
        case "OCI_DATAFLOW_TASK":
          return model.TaskFromOCIDataflowTaskDetails.getDeserializedJsonObj(
            <model.TaskFromOCIDataflowTaskDetails>(<object>jsonObj),
            true
          );
        case "DATA_LOADER_TASK":
          return model.TaskFromDataLoaderTaskDetails.getDeserializedJsonObj(
            <model.TaskFromDataLoaderTaskDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}

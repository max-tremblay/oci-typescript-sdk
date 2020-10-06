/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about a task run.
 */
export interface TaskRunSummary {
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The object type.
   */
  "modelType"?: string;
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
   * The version of the object that is used to track changes in the object instance.
   */
  "objectVersion"?: number;
  /**
   * status
   */
  "status"?: TaskRunSummary.Status;
  /**
   * The task run start time.
   */
  "startTimeMillis"?: number;
  /**
   * The task run end time.
   */
  "endTimeMillis"?: number;
  /**
   * The date and time the task run was last updated.
   */
  "lastUpdated"?: number;
  /**
   * Number of records processed in task run.
   */
  "recordsWritten"?: number;
  /**
   * Number of bytes processed in task run.
   */
  "bytesProcessed"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved.
   */
  "objectStatus"?: number;
  /**
   * The type of the task for the run.
   */
  "taskType"?: TaskRunSummary.TaskType;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "metadata"?: model.ObjectMetadata;
}

export namespace TaskRunSummary {
  export enum Status {
    NotStarted = "NOT_STARTED",
    Queued = "QUEUED",
    Running = "RUNNING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Success = "SUCCESS",
    Error = "ERROR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TaskType {
    IntegrationTask = "INTEGRATION_TASK",
    DataLoaderTask = "DATA_LOADER_TASK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TaskRunSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    return jsonObj;
  }
}

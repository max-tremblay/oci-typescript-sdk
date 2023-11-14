/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
 *
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
 * Description of Transcription Job.
 */
export interface TranscriptionJob {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the job.
   */
  "id": string;
  /**
   * A user-friendly display name for the job.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want to create the job.
   */
  "compartmentId": string;
  /**
   * A short description of the job.
   */
  "description"?: string;
  "modelDetails": model.TranscriptionModelDetails;
  "normalization"?: model.TranscriptionNormalization;
  /**
   * Job accepted time.
   */
  "timeAccepted"?: Date;
  /**
   * Job started time.
   */
  "timeStarted"?: Date;
  /**
   * Job finished time.
   */
  "timeFinished"?: Date;
  /**
   * Total tasks in a job. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalTasks"?: number;
  /**
   * Total outstanding tasks in a job. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "outstandingTasks"?: number;
  /**
   * Total successful tasks in a job. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "successfulTasks"?: number;
  /**
   * Time to live duration in days for Job. Job will be available till max 90 days. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ttlInDays"?: number;
  /**
   * How much progress the operation has made, vs the total amount of work that must be performed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete"?: number;
  "inputLocation": model.ObjectListFileInputLocation | model.ObjectListInlineInputLocation;
  "outputLocation": model.OutputLocation;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the user who created the job.
   */
  "createdBy"?: string;
  /**
   * Transcription format. JSON format will always be provided in addition to any formats in this list.
   */
  "additionalTranscriptionFormats"?: Array<TranscriptionJob.AdditionalTranscriptionFormats>;
  /**
   * The current state of the Job.
   */
  "lifecycleState"?: TranscriptionJob.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`.
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace-1\": {\"bar-key-1\": \"value-1\", \"bar-key-2\": \"value-2\"}, \"foo-namespace-2\": {\"bar-key-1\": \"value-1\", \"bar-key-2\": \"value-2\"}}`.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`.
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace TranscriptionJob {
  export enum AdditionalTranscriptionFormats {
    Srt = "SRT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TranscriptionJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.TranscriptionModelDetails.getJsonObj(obj.modelDetails)
          : undefined,
        "normalization": obj.normalization
          ? model.TranscriptionNormalization.getJsonObj(obj.normalization)
          : undefined,

        "inputLocation": obj.inputLocation
          ? model.InputLocation.getJsonObj(obj.inputLocation)
          : undefined,
        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TranscriptionJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.TranscriptionModelDetails.getDeserializedJsonObj(obj.modelDetails)
          : undefined,
        "normalization": obj.normalization
          ? model.TranscriptionNormalization.getDeserializedJsonObj(obj.normalization)
          : undefined,

        "inputLocation": obj.inputLocation
          ? model.InputLocation.getDeserializedJsonObj(obj.inputLocation)
          : undefined,
        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getDeserializedJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}

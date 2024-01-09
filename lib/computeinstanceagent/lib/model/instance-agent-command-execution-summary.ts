/**
 * Oracle Cloud Agent API
 * API for the Oracle Cloud Agent software running on compute instances. Oracle Cloud Agent
is a lightweight process that monitors and manages compute instances.

 * OpenAPI spec version: 20180530
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
 * Execution details for a command.
 */
export interface InstanceAgentCommandExecutionSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the command.
   */
  "instanceAgentCommandId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the instance.
   */
  "instanceId": string;
  /**
   * The command delivery state.
   *  * `VISIBLE` - The command is visible to the instance.
   *  * `PENDING` - The command is pending acknowledgment from the instance.
   *  * `ACKED` - The command has been received and acknowledged by the instance.
   *  * `ACKED_CANCELED` - The canceled command has been received and acknowledged by the instance.
   *  * `EXPIRED` - The instance has not requested for commands and the command's delivery has expired.
   *
   */
  "deliveryState": InstanceAgentCommandExecutionSummary.DeliveryState;
  /**
   * The command execution lifecycle state.
   * * `ACCEPTED` - The command has been accepted to run.
   * * `IN_PROGRESS` - The command is in progress.
   * * `SUCCEEDED` - The command was successfully executed.
   * * `FAILED` - The command failed to execute.
   * * `TIMED_OUT` - The command execution timed out.
   * * `CANCELED` - The command execution was canceled.
   *
   */
  "lifecycleState": InstanceAgentCommandExecutionSummary.LifecycleState;
  /**
   * The date and time the command was created, in the format defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the command was last updated, in the format defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeUpdated": Date;
  /**
   * A large, non-consecutive number that Oracle Cloud Agent assigns to each created command. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sequenceNumber": number;
  /**
   * A user-friendly name. Does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The execution output from a command.
   */
  "content":
    | model.InstanceAgentCommandExecutionOutputViaTextDetails
    | model.InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails
    | model.InstanceAgentCommandExecutionOutputViaObjectStorageTupleDetails;
}

export namespace InstanceAgentCommandExecutionSummary {
  export enum DeliveryState {
    Visible = "VISIBLE",
    Pending = "PENDING",
    Acked = "ACKED",
    AckedCanceled = "ACKED_CANCELED",
    Expired = "EXPIRED",
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
    TimedOut = "TIMED_OUT",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InstanceAgentCommandExecutionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "content": obj.content
          ? model.InstanceAgentCommandExecutionOutputContent.getJsonObj(obj.content)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceAgentCommandExecutionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "content": obj.content
          ? model.InstanceAgentCommandExecutionOutputContent.getDeserializedJsonObj(obj.content)
          : undefined
      }
    };

    return jsonObj;
  }
}

/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { AIServiceSpeechClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class AIServiceSpeechWaiter {
  public constructor(
    private client: AIServiceSpeechClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forCustomization till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCustomizationResponse | null (null in case of 404 response)
   */
  public async forCustomization(
    request: serviceRequests.GetCustomizationRequest,
    ...targetStates: models.Customization.LifecycleState[]
  ): Promise<serviceResponses.GetCustomizationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCustomization(request),
      response => targetStates.includes(response.customization.lifecycleState!),
      targetStates.includes(models.Customization.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forTranscriptionJob till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTranscriptionJobResponse
   */
  public async forTranscriptionJob(
    request: serviceRequests.GetTranscriptionJobRequest,
    ...targetStates: models.TranscriptionJob.LifecycleState[]
  ): Promise<serviceResponses.GetTranscriptionJobResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getTranscriptionJob(request),
      response => targetStates.includes(response.transcriptionJob.lifecycleState!)
    );
  }

  /**
   * Waits forTranscriptionTask till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTranscriptionTaskResponse
   */
  public async forTranscriptionTask(
    request: serviceRequests.GetTranscriptionTaskRequest,
    ...targetStates: models.TranscriptionTask.LifecycleState[]
  ): Promise<serviceResponses.GetTranscriptionTaskResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getTranscriptionTask(request),
      response => targetStates.includes(response.transcriptionTask.lifecycleState!)
    );
  }
}

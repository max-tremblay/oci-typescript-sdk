/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
import { ManagementStationClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ManagementStationWaiter {
  public constructor(
    private client: ManagementStationClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forManagementStation till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetManagementStationResponse | null (null in case of 404 response)
   */
  public async forManagementStation(
    request: serviceRequests.GetManagementStationRequest,
    ...targetStates: models.ManagementStation.LifecycleState[]
  ): Promise<serviceResponses.GetManagementStationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getManagementStation(request),
      response => targetStates.includes(response.managementStation.lifecycleState!),
      targetStates.includes(models.ManagementStation.LifecycleState.Deleted)
    );
  }
}

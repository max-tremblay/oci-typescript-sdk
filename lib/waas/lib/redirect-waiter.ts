/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
import { RedirectClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class RedirectWaiter {
  public constructor(
    private client: RedirectClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forHttpRedirect till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetHttpRedirectResponse | null (null in case of 404 response)
   */
  public async forHttpRedirect(
    request: serviceRequests.GetHttpRedirectRequest,
    ...targetStates: models.LifecycleStates[]
  ): Promise<serviceResponses.GetHttpRedirectResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getHttpRedirect(request),
      response => targetStates.includes(response.httpRedirect.lifecycleState!),
      targetStates.includes(models.LifecycleStates.Deleted)
    );
  }
}

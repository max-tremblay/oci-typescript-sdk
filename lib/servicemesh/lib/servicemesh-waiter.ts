/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { ServiceMeshClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ServiceMeshWaiter {
  public constructor(
    private client: ServiceMeshClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forAccessPolicy till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAccessPolicyResponse | null (null in case of 404 response)
   */
  public async forAccessPolicy(
    request: serviceRequests.GetAccessPolicyRequest,
    ...targetStates: models.AccessPolicy.LifecycleState[]
  ): Promise<serviceResponses.GetAccessPolicyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAccessPolicy(request),
      response => targetStates.includes(response.accessPolicy.lifecycleState!),
      targetStates.includes(models.AccessPolicy.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forIngressGateway till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetIngressGatewayResponse | null (null in case of 404 response)
   */
  public async forIngressGateway(
    request: serviceRequests.GetIngressGatewayRequest,
    ...targetStates: models.IngressGateway.LifecycleState[]
  ): Promise<serviceResponses.GetIngressGatewayResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getIngressGateway(request),
      response => targetStates.includes(response.ingressGateway.lifecycleState!),
      targetStates.includes(models.IngressGateway.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forIngressGatewayRouteTable till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetIngressGatewayRouteTableResponse | null (null in case of 404 response)
   */
  public async forIngressGatewayRouteTable(
    request: serviceRequests.GetIngressGatewayRouteTableRequest,
    ...targetStates: models.IngressGatewayRouteTable.LifecycleState[]
  ): Promise<serviceResponses.GetIngressGatewayRouteTableResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getIngressGatewayRouteTable(request),
      response => targetStates.includes(response.ingressGatewayRouteTable.lifecycleState!),
      targetStates.includes(models.IngressGatewayRouteTable.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forMesh till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetMeshResponse | null (null in case of 404 response)
   */
  public async forMesh(
    request: serviceRequests.GetMeshRequest,
    ...targetStates: models.Mesh.LifecycleState[]
  ): Promise<serviceResponses.GetMeshResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getMesh(request),
      response => targetStates.includes(response.mesh.lifecycleState!),
      targetStates.includes(models.Mesh.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forVirtualDeployment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVirtualDeploymentResponse | null (null in case of 404 response)
   */
  public async forVirtualDeployment(
    request: serviceRequests.GetVirtualDeploymentRequest,
    ...targetStates: models.VirtualDeployment.LifecycleState[]
  ): Promise<serviceResponses.GetVirtualDeploymentResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getVirtualDeployment(request),
      response => targetStates.includes(response.virtualDeployment.lifecycleState!),
      targetStates.includes(models.VirtualDeployment.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forVirtualService till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVirtualServiceResponse | null (null in case of 404 response)
   */
  public async forVirtualService(
    request: serviceRequests.GetVirtualServiceRequest,
    ...targetStates: models.VirtualService.LifecycleState[]
  ): Promise<serviceResponses.GetVirtualServiceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getVirtualService(request),
      response => targetStates.includes(response.virtualService.lifecycleState!),
      targetStates.includes(models.VirtualService.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forVirtualServiceRouteTable till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVirtualServiceRouteTableResponse | null (null in case of 404 response)
   */
  public async forVirtualServiceRouteTable(
    request: serviceRequests.GetVirtualServiceRouteTableRequest,
    ...targetStates: models.VirtualServiceRouteTable.LifecycleState[]
  ): Promise<serviceResponses.GetVirtualServiceRouteTableResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getVirtualServiceRouteTable(request),
      response => targetStates.includes(response.virtualServiceRouteTable.lifecycleState!),
      targetStates.includes(models.VirtualServiceRouteTable.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}

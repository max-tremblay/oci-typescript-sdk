/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
import { ComputeClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";
import { waitForWorkRequest, WorkRequestClient, responses } from "oci-workrequests";

export class ComputeWaiter {
  public constructor(
    private client: ComputeClient,
    private workRequestClient: WorkRequestClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forChangeComputeCapacityReservationCompartment
   *
   * @param request the request to send
   * @return response returns ChangeComputeCapacityReservationCompartmentResponse, GetWorkRequestResponse tuple
   */
  public async forChangeComputeCapacityReservationCompartment(
    request: serviceRequests.ChangeComputeCapacityReservationCompartmentRequest
  ): Promise<{
    response: serviceResponses.ChangeComputeCapacityReservationCompartmentResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const changeComputeCapacityReservationCompartmentResponse = await this.client.changeComputeCapacityReservationCompartment(
      request
    );
    if (changeComputeCapacityReservationCompartmentResponse.opcWorkRequestId === undefined)
      return {
        response: changeComputeCapacityReservationCompartmentResponse,
        workRequestResponse: undefined as any
      };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      changeComputeCapacityReservationCompartmentResponse.opcWorkRequestId
    );
    return {
      response: changeComputeCapacityReservationCompartmentResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forChangeComputeCapacityTopologyCompartment
   *
   * @param request the request to send
   * @return response returns ChangeComputeCapacityTopologyCompartmentResponse, GetWorkRequestResponse tuple
   */
  public async forChangeComputeCapacityTopologyCompartment(
    request: serviceRequests.ChangeComputeCapacityTopologyCompartmentRequest
  ): Promise<{
    response: serviceResponses.ChangeComputeCapacityTopologyCompartmentResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const changeComputeCapacityTopologyCompartmentResponse = await this.client.changeComputeCapacityTopologyCompartment(
      request
    );
    if (changeComputeCapacityTopologyCompartmentResponse.opcWorkRequestId === undefined)
      return {
        response: changeComputeCapacityTopologyCompartmentResponse,
        workRequestResponse: undefined as any
      };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      changeComputeCapacityTopologyCompartmentResponse.opcWorkRequestId
    );
    return {
      response: changeComputeCapacityTopologyCompartmentResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forChangeDedicatedVmHostCompartment
   *
   * @param request the request to send
   * @return response returns ChangeDedicatedVmHostCompartmentResponse, GetWorkRequestResponse tuple
   */
  public async forChangeDedicatedVmHostCompartment(
    request: serviceRequests.ChangeDedicatedVmHostCompartmentRequest
  ): Promise<{
    response: serviceResponses.ChangeDedicatedVmHostCompartmentResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const changeDedicatedVmHostCompartmentResponse = await this.client.changeDedicatedVmHostCompartment(
      request
    );
    if (changeDedicatedVmHostCompartmentResponse.opcWorkRequestId === undefined)
      return {
        response: changeDedicatedVmHostCompartmentResponse,
        workRequestResponse: undefined as any
      };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      changeDedicatedVmHostCompartmentResponse.opcWorkRequestId
    );
    return {
      response: changeDedicatedVmHostCompartmentResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forChangeInstanceCompartment
   *
   * @param request the request to send
   * @return response returns ChangeInstanceCompartmentResponse, GetWorkRequestResponse tuple
   */
  public async forChangeInstanceCompartment(
    request: serviceRequests.ChangeInstanceCompartmentRequest
  ): Promise<{
    response: serviceResponses.ChangeInstanceCompartmentResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const changeInstanceCompartmentResponse = await this.client.changeInstanceCompartment(request);
    if (changeInstanceCompartmentResponse.opcWorkRequestId === undefined)
      return { response: changeInstanceCompartmentResponse, workRequestResponse: undefined as any };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      changeInstanceCompartmentResponse.opcWorkRequestId
    );
    return {
      response: changeInstanceCompartmentResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forCreateComputeCapacityReservation
   *
   * @param request the request to send
   * @return response returns CreateComputeCapacityReservationResponse, GetWorkRequestResponse tuple
   */
  public async forCreateComputeCapacityReservation(
    request: serviceRequests.CreateComputeCapacityReservationRequest
  ): Promise<{
    response: serviceResponses.CreateComputeCapacityReservationResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const createComputeCapacityReservationResponse = await this.client.createComputeCapacityReservation(
      request
    );
    if (createComputeCapacityReservationResponse.opcWorkRequestId === undefined)
      return {
        response: createComputeCapacityReservationResponse,
        workRequestResponse: undefined as any
      };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      createComputeCapacityReservationResponse.opcWorkRequestId
    );
    return {
      response: createComputeCapacityReservationResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forCreateComputeCapacityTopology
   *
   * @param request the request to send
   * @return response returns CreateComputeCapacityTopologyResponse, GetWorkRequestResponse tuple
   */
  public async forCreateComputeCapacityTopology(
    request: serviceRequests.CreateComputeCapacityTopologyRequest
  ): Promise<{
    response: serviceResponses.CreateComputeCapacityTopologyResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const createComputeCapacityTopologyResponse = await this.client.createComputeCapacityTopology(
      request
    );
    if (createComputeCapacityTopologyResponse.opcWorkRequestId === undefined)
      return {
        response: createComputeCapacityTopologyResponse,
        workRequestResponse: undefined as any
      };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      createComputeCapacityTopologyResponse.opcWorkRequestId
    );
    return {
      response: createComputeCapacityTopologyResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forCreateDedicatedVmHost
   *
   * @param request the request to send
   * @return response returns CreateDedicatedVmHostResponse, GetWorkRequestResponse tuple
   */
  public async forCreateDedicatedVmHost(
    request: serviceRequests.CreateDedicatedVmHostRequest
  ): Promise<{
    response: serviceResponses.CreateDedicatedVmHostResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const createDedicatedVmHostResponse = await this.client.createDedicatedVmHost(request);
    if (createDedicatedVmHostResponse.opcWorkRequestId === undefined)
      return { response: createDedicatedVmHostResponse, workRequestResponse: undefined as any };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      createDedicatedVmHostResponse.opcWorkRequestId
    );
    return { response: createDedicatedVmHostResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forCreateImage
   *
   * @param request the request to send
   * @return response returns CreateImageResponse, GetWorkRequestResponse tuple
   */
  public async forCreateImage(
    request: serviceRequests.CreateImageRequest
  ): Promise<{
    response: serviceResponses.CreateImageResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const createImageResponse = await this.client.createImage(request);
    if (createImageResponse.opcWorkRequestId === undefined)
      return { response: createImageResponse, workRequestResponse: undefined as any };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      createImageResponse.opcWorkRequestId
    );
    return { response: createImageResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forDeleteComputeCapacityReservation
   *
   * @param request the request to send
   * @return response returns DeleteComputeCapacityReservationResponse, GetWorkRequestResponse tuple
   */
  public async forDeleteComputeCapacityReservation(
    request: serviceRequests.DeleteComputeCapacityReservationRequest
  ): Promise<{
    response: serviceResponses.DeleteComputeCapacityReservationResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const deleteComputeCapacityReservationResponse = await this.client.deleteComputeCapacityReservation(
      request
    );
    if (deleteComputeCapacityReservationResponse.opcWorkRequestId === undefined)
      return {
        response: deleteComputeCapacityReservationResponse,
        workRequestResponse: undefined as any
      };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      deleteComputeCapacityReservationResponse.opcWorkRequestId
    );
    return {
      response: deleteComputeCapacityReservationResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forDeleteComputeCapacityTopology
   *
   * @param request the request to send
   * @return response returns DeleteComputeCapacityTopologyResponse, GetWorkRequestResponse tuple
   */
  public async forDeleteComputeCapacityTopology(
    request: serviceRequests.DeleteComputeCapacityTopologyRequest
  ): Promise<{
    response: serviceResponses.DeleteComputeCapacityTopologyResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const deleteComputeCapacityTopologyResponse = await this.client.deleteComputeCapacityTopology(
      request
    );
    if (deleteComputeCapacityTopologyResponse.opcWorkRequestId === undefined)
      return {
        response: deleteComputeCapacityTopologyResponse,
        workRequestResponse: undefined as any
      };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      deleteComputeCapacityTopologyResponse.opcWorkRequestId
    );
    return {
      response: deleteComputeCapacityTopologyResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forDeleteDedicatedVmHost
   *
   * @param request the request to send
   * @return response returns DeleteDedicatedVmHostResponse, GetWorkRequestResponse tuple
   */
  public async forDeleteDedicatedVmHost(
    request: serviceRequests.DeleteDedicatedVmHostRequest
  ): Promise<{
    response: serviceResponses.DeleteDedicatedVmHostResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const deleteDedicatedVmHostResponse = await this.client.deleteDedicatedVmHost(request);
    if (deleteDedicatedVmHostResponse.opcWorkRequestId === undefined)
      return { response: deleteDedicatedVmHostResponse, workRequestResponse: undefined as any };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      deleteDedicatedVmHostResponse.opcWorkRequestId
    );
    return { response: deleteDedicatedVmHostResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forExportImage
   *
   * @param request the request to send
   * @return response returns ExportImageResponse, GetWorkRequestResponse tuple
   */
  public async forExportImage(
    request: serviceRequests.ExportImageRequest
  ): Promise<{
    response: serviceResponses.ExportImageResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const exportImageResponse = await this.client.exportImage(request);
    if (exportImageResponse.opcWorkRequestId === undefined)
      return { response: exportImageResponse, workRequestResponse: undefined as any };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      exportImageResponse.opcWorkRequestId
    );
    return { response: exportImageResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forBootVolumeAttachment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetBootVolumeAttachmentResponse
   */
  public async forBootVolumeAttachment(
    request: serviceRequests.GetBootVolumeAttachmentRequest,
    ...targetStates: models.BootVolumeAttachment.LifecycleState[]
  ): Promise<serviceResponses.GetBootVolumeAttachmentResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getBootVolumeAttachment(request),
      response => targetStates.includes(response.bootVolumeAttachment.lifecycleState!)
    );
  }

  /**
   * Waits forComputeCapacityReservation till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetComputeCapacityReservationResponse | null (null in case of 404 response)
   */
  public async forComputeCapacityReservation(
    request: serviceRequests.GetComputeCapacityReservationRequest,
    ...targetStates: models.ComputeCapacityReservation.LifecycleState[]
  ): Promise<serviceResponses.GetComputeCapacityReservationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getComputeCapacityReservation(request),
      response => targetStates.includes(response.computeCapacityReservation.lifecycleState!),
      targetStates.includes(models.ComputeCapacityReservation.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forComputeCapacityTopology till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetComputeCapacityTopologyResponse | null (null in case of 404 response)
   */
  public async forComputeCapacityTopology(
    request: serviceRequests.GetComputeCapacityTopologyRequest,
    ...targetStates: models.ComputeCapacityTopology.LifecycleState[]
  ): Promise<serviceResponses.GetComputeCapacityTopologyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getComputeCapacityTopology(request),
      response => targetStates.includes(response.computeCapacityTopology.lifecycleState!),
      targetStates.includes(models.ComputeCapacityTopology.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forComputeCluster till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetComputeClusterResponse | null (null in case of 404 response)
   */
  public async forComputeCluster(
    request: serviceRequests.GetComputeClusterRequest,
    ...targetStates: models.ComputeCluster.LifecycleState[]
  ): Promise<serviceResponses.GetComputeClusterResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getComputeCluster(request),
      response => targetStates.includes(response.computeCluster.lifecycleState!),
      targetStates.includes(models.ComputeCluster.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forConsoleHistory till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetConsoleHistoryResponse
   */
  public async forConsoleHistory(
    request: serviceRequests.GetConsoleHistoryRequest,
    ...targetStates: models.ConsoleHistory.LifecycleState[]
  ): Promise<serviceResponses.GetConsoleHistoryResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getConsoleHistory(request),
      response => targetStates.includes(response.consoleHistory.lifecycleState!)
    );
  }

  /**
   * Waits forDedicatedVmHost till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDedicatedVmHostResponse | null (null in case of 404 response)
   */
  public async forDedicatedVmHost(
    request: serviceRequests.GetDedicatedVmHostRequest,
    ...targetStates: models.DedicatedVmHost.LifecycleState[]
  ): Promise<serviceResponses.GetDedicatedVmHostResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDedicatedVmHost(request),
      response => targetStates.includes(response.dedicatedVmHost.lifecycleState!),
      targetStates.includes(models.DedicatedVmHost.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forImage till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetImageResponse | null (null in case of 404 response)
   */
  public async forImage(
    request: serviceRequests.GetImageRequest,
    ...targetStates: models.Image.LifecycleState[]
  ): Promise<serviceResponses.GetImageResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getImage(request),
      response => targetStates.includes(response.image.lifecycleState!),
      targetStates.includes(models.Image.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forInstance till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetInstanceResponse | null (null in case of 404 response)
   */
  public async forInstance(
    request: serviceRequests.GetInstanceRequest,
    ...targetStates: models.Instance.LifecycleState[]
  ): Promise<serviceResponses.GetInstanceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getInstance(request),
      response => targetStates.includes(response.instance.lifecycleState!),
      targetStates.includes(models.Instance.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forInstanceConsoleConnection till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetInstanceConsoleConnectionResponse | null (null in case of 404 response)
   */
  public async forInstanceConsoleConnection(
    request: serviceRequests.GetInstanceConsoleConnectionRequest,
    ...targetStates: models.InstanceConsoleConnection.LifecycleState[]
  ): Promise<serviceResponses.GetInstanceConsoleConnectionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getInstanceConsoleConnection(request),
      response => targetStates.includes(response.instanceConsoleConnection.lifecycleState!),
      targetStates.includes(models.InstanceConsoleConnection.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forInstanceMaintenanceEvent till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetInstanceMaintenanceEventResponse
   */
  public async forInstanceMaintenanceEvent(
    request: serviceRequests.GetInstanceMaintenanceEventRequest,
    ...targetStates: models.InstanceMaintenanceEvent.LifecycleState[]
  ): Promise<serviceResponses.GetInstanceMaintenanceEventResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getInstanceMaintenanceEvent(request),
      response => targetStates.includes(response.instanceMaintenanceEvent.lifecycleState!)
    );
  }

  /**
   * Waits forVnicAttachment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVnicAttachmentResponse
   */
  public async forVnicAttachment(
    request: serviceRequests.GetVnicAttachmentRequest,
    ...targetStates: models.VnicAttachment.LifecycleState[]
  ): Promise<serviceResponses.GetVnicAttachmentResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getVnicAttachment(request),
      response => targetStates.includes(response.vnicAttachment.lifecycleState!)
    );
  }

  /**
   * Waits forVolumeAttachment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVolumeAttachmentResponse
   */
  public async forVolumeAttachment(
    request: serviceRequests.GetVolumeAttachmentRequest,
    ...targetStates: models.VolumeAttachment.LifecycleState[]
  ): Promise<serviceResponses.GetVolumeAttachmentResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getVolumeAttachment(request),
      response => targetStates.includes(response.volumeAttachment.lifecycleState!)
    );
  }

  /**
   * Waits forLaunchInstance
   *
   * @param request the request to send
   * @return response returns LaunchInstanceResponse, GetWorkRequestResponse tuple
   */
  public async forLaunchInstance(
    request: serviceRequests.LaunchInstanceRequest
  ): Promise<{
    response: serviceResponses.LaunchInstanceResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const launchInstanceResponse = await this.client.launchInstance(request);
    if (launchInstanceResponse.opcWorkRequestId === undefined)
      return { response: launchInstanceResponse, workRequestResponse: undefined as any };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      launchInstanceResponse.opcWorkRequestId
    );
    return { response: launchInstanceResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forUpdateComputeCapacityReservation
   *
   * @param request the request to send
   * @return response returns UpdateComputeCapacityReservationResponse, GetWorkRequestResponse tuple
   */
  public async forUpdateComputeCapacityReservation(
    request: serviceRequests.UpdateComputeCapacityReservationRequest
  ): Promise<{
    response: serviceResponses.UpdateComputeCapacityReservationResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const updateComputeCapacityReservationResponse = await this.client.updateComputeCapacityReservation(
      request
    );
    if (updateComputeCapacityReservationResponse.opcWorkRequestId === undefined)
      return {
        response: updateComputeCapacityReservationResponse,
        workRequestResponse: undefined as any
      };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      updateComputeCapacityReservationResponse.opcWorkRequestId
    );
    return {
      response: updateComputeCapacityReservationResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forUpdateComputeCapacityTopology
   *
   * @param request the request to send
   * @return response returns UpdateComputeCapacityTopologyResponse, GetWorkRequestResponse tuple
   */
  public async forUpdateComputeCapacityTopology(
    request: serviceRequests.UpdateComputeCapacityTopologyRequest
  ): Promise<{
    response: serviceResponses.UpdateComputeCapacityTopologyResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const updateComputeCapacityTopologyResponse = await this.client.updateComputeCapacityTopology(
      request
    );
    if (updateComputeCapacityTopologyResponse.opcWorkRequestId === undefined)
      return {
        response: updateComputeCapacityTopologyResponse,
        workRequestResponse: undefined as any
      };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      updateComputeCapacityTopologyResponse.opcWorkRequestId
    );
    return {
      response: updateComputeCapacityTopologyResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forUpdateInstance
   *
   * @param request the request to send
   * @return response returns UpdateInstanceResponse, GetWorkRequestResponse tuple
   */
  public async forUpdateInstance(
    request: serviceRequests.UpdateInstanceRequest
  ): Promise<{
    response: serviceResponses.UpdateInstanceResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const updateInstanceResponse = await this.client.updateInstance(request);
    if (updateInstanceResponse.opcWorkRequestId === undefined)
      return { response: updateInstanceResponse, workRequestResponse: undefined as any };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      updateInstanceResponse.opcWorkRequestId
    );
    return { response: updateInstanceResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forUpdateInstanceMaintenanceEvent
   *
   * @param request the request to send
   * @return response returns UpdateInstanceMaintenanceEventResponse, GetWorkRequestResponse tuple
   */
  public async forUpdateInstanceMaintenanceEvent(
    request: serviceRequests.UpdateInstanceMaintenanceEventRequest
  ): Promise<{
    response: serviceResponses.UpdateInstanceMaintenanceEventResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const updateInstanceMaintenanceEventResponse = await this.client.updateInstanceMaintenanceEvent(
      request
    );
    if (updateInstanceMaintenanceEventResponse.opcWorkRequestId === undefined)
      return {
        response: updateInstanceMaintenanceEventResponse,
        workRequestResponse: undefined as any
      };
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      updateInstanceMaintenanceEventResponse.opcWorkRequestId
    );
    return {
      response: updateInstanceMaintenanceEventResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }
}

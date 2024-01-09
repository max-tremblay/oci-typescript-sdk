/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
import { FileStorageClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class FileStorageWaiter {
  public constructor(
    private client: FileStorageClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forExport till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExportResponse | null (null in case of 404 response)
   */
  public async forExport(
    request: serviceRequests.GetExportRequest,
    ...targetStates: models.Export.LifecycleState[]
  ): Promise<serviceResponses.GetExportResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExport(request),
      response => targetStates.includes(response.export.lifecycleState!),
      targetStates.includes(models.Export.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExportSet till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExportSetResponse | null (null in case of 404 response)
   */
  public async forExportSet(
    request: serviceRequests.GetExportSetRequest,
    ...targetStates: models.ExportSet.LifecycleState[]
  ): Promise<serviceResponses.GetExportSetResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExportSet(request),
      response => targetStates.includes(response.exportSet.lifecycleState!),
      targetStates.includes(models.ExportSet.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forFileSystem till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetFileSystemResponse | null (null in case of 404 response)
   */
  public async forFileSystem(
    request: serviceRequests.GetFileSystemRequest,
    ...targetStates: models.FileSystem.LifecycleState[]
  ): Promise<serviceResponses.GetFileSystemResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getFileSystem(request),
      response => targetStates.includes(response.fileSystem.lifecycleState!),
      targetStates.includes(models.FileSystem.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forFilesystemSnapshotPolicy till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetFilesystemSnapshotPolicyResponse | null (null in case of 404 response)
   */
  public async forFilesystemSnapshotPolicy(
    request: serviceRequests.GetFilesystemSnapshotPolicyRequest,
    ...targetStates: models.FilesystemSnapshotPolicy.LifecycleState[]
  ): Promise<serviceResponses.GetFilesystemSnapshotPolicyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getFilesystemSnapshotPolicy(request),
      response => targetStates.includes(response.filesystemSnapshotPolicy.lifecycleState!),
      targetStates.includes(models.FilesystemSnapshotPolicy.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forMountTarget till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetMountTargetResponse | null (null in case of 404 response)
   */
  public async forMountTarget(
    request: serviceRequests.GetMountTargetRequest,
    ...targetStates: models.MountTarget.LifecycleState[]
  ): Promise<serviceResponses.GetMountTargetResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getMountTarget(request),
      response => targetStates.includes(response.mountTarget.lifecycleState!),
      targetStates.includes(models.MountTarget.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forOutboundConnector till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetOutboundConnectorResponse | null (null in case of 404 response)
   */
  public async forOutboundConnector(
    request: serviceRequests.GetOutboundConnectorRequest,
    ...targetStates: models.OutboundConnector.LifecycleState[]
  ): Promise<serviceResponses.GetOutboundConnectorResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getOutboundConnector(request),
      response => targetStates.includes(response.outboundConnector.lifecycleState!),
      targetStates.includes(models.OutboundConnector.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forReplication till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetReplicationResponse | null (null in case of 404 response)
   */
  public async forReplication(
    request: serviceRequests.GetReplicationRequest,
    ...targetStates: models.Replication.LifecycleState[]
  ): Promise<serviceResponses.GetReplicationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getReplication(request),
      response => targetStates.includes(response.replication.lifecycleState!),
      targetStates.includes(models.Replication.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forReplicationTarget till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetReplicationTargetResponse | null (null in case of 404 response)
   */
  public async forReplicationTarget(
    request: serviceRequests.GetReplicationTargetRequest,
    ...targetStates: models.ReplicationTarget.LifecycleState[]
  ): Promise<serviceResponses.GetReplicationTargetResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getReplicationTarget(request),
      response => targetStates.includes(response.replicationTarget.lifecycleState!),
      targetStates.includes(models.ReplicationTarget.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forSnapshot till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetSnapshotResponse | null (null in case of 404 response)
   */
  public async forSnapshot(
    request: serviceRequests.GetSnapshotRequest,
    ...targetStates: models.Snapshot.LifecycleState[]
  ): Promise<serviceResponses.GetSnapshotResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getSnapshot(request),
      response => targetStates.includes(response.snapshot.lifecycleState!),
      targetStates.includes(models.Snapshot.LifecycleState.Deleted)
    );
  }
}

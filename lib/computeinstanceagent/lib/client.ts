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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { ComputeInstanceAgentWaiter } from "./computeinstanceagent-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ComputeInstanceAgentApiKeys {}

export class ComputeInstanceAgentClient {
  protected static serviceEndpointTemplate = "https://iaas.{region}.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": ComputeInstanceAgentWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20180530";
    if (this.logger)
      this.logger.info(`ComputeInstanceAgentClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      ComputeInstanceAgentClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      ComputeInstanceAgentClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new ComputeInstanceAgentWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): ComputeInstanceAgentWaiter {
    this._waiters = new ComputeInstanceAgentWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): ComputeInstanceAgentWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
     * Cancels a command that is scheduled to run on a compute instance that is managed
* by Oracle Cloud Agent.
* <p>
Canceling a command is a best-effort attempt. If the command has already
* completed, it will not be canceled.
* 
     * @param CancelInstanceAgentCommandRequest
     * @return CancelInstanceAgentCommandResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/computeinstanceagent/CancelInstanceAgentCommand.ts.html |here} to see how to use CancelInstanceAgentCommand API.
     */
  public async cancelInstanceAgentCommand(
    cancelInstanceAgentCommandRequest: requests.CancelInstanceAgentCommandRequest
  ): Promise<responses.CancelInstanceAgentCommandResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ComputeInstanceAgentClient#cancelInstanceAgentCommand.");
    const pathParams = {
      "{instanceAgentCommandId}": cancelInstanceAgentCommandRequest.instanceAgentCommandId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": cancelInstanceAgentCommandRequest.opcRequestId,
      "if-match": cancelInstanceAgentCommandRequest.ifMatch
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      cancelInstanceAgentCommandRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/instanceAgentCommands/{instanceAgentCommandId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CancelInstanceAgentCommandResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
     * Creates a command or script to run on a compute instance that is managed by Oracle Cloud Agent.
* <p>
On Linux instances, the script runs in a bash shell. On Windows instances, the
* script runs in a batch shell.
* <p>
Commands that require administrator privileges will run only if Oracle Cloud Agent
* is running with administrator privileges.
* 
     * @param CreateInstanceAgentCommandRequest
     * @return CreateInstanceAgentCommandResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/computeinstanceagent/CreateInstanceAgentCommand.ts.html |here} to see how to use CreateInstanceAgentCommand API.
     */
  public async createInstanceAgentCommand(
    createInstanceAgentCommandRequest: requests.CreateInstanceAgentCommandRequest
  ): Promise<responses.CreateInstanceAgentCommandResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ComputeInstanceAgentClient#createInstanceAgentCommand.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": createInstanceAgentCommandRequest.opcRequestId,
      "opc-retry-token": createInstanceAgentCommandRequest.opcRetryToken
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createInstanceAgentCommandRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/instanceAgentCommands",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createInstanceAgentCommandRequest.createInstanceAgentCommandDetails,
        "CreateInstanceAgentCommandDetails",
        model.CreateInstanceAgentCommandDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateInstanceAgentCommandResponse>{},
        body: await response.json(),
        bodyKey: "instanceAgentCommand",
        bodyModel: model.InstanceAgentCommand,
        type: "model.InstanceAgentCommand",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets information about an Oracle Cloud Agent command.
   * @param GetInstanceAgentCommandRequest
   * @return GetInstanceAgentCommandResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/computeinstanceagent/GetInstanceAgentCommand.ts.html |here} to see how to use GetInstanceAgentCommand API.
   */
  public async getInstanceAgentCommand(
    getInstanceAgentCommandRequest: requests.GetInstanceAgentCommandRequest
  ): Promise<responses.GetInstanceAgentCommandResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ComputeInstanceAgentClient#getInstanceAgentCommand.");
    const pathParams = {
      "{instanceAgentCommandId}": getInstanceAgentCommandRequest.instanceAgentCommandId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getInstanceAgentCommandRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getInstanceAgentCommandRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/instanceAgentCommands/{instanceAgentCommandId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetInstanceAgentCommandResponse>{},
        body: await response.json(),
        bodyKey: "instanceAgentCommand",
        bodyModel: model.InstanceAgentCommand,
        type: "model.InstanceAgentCommand",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets information about the status of specified instance agent commandId for the given instanceId.
   * @param GetInstanceAgentCommandExecutionRequest
   * @return GetInstanceAgentCommandExecutionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/computeinstanceagent/GetInstanceAgentCommandExecution.ts.html |here} to see how to use GetInstanceAgentCommandExecution API.
   */
  public async getInstanceAgentCommandExecution(
    getInstanceAgentCommandExecutionRequest: requests.GetInstanceAgentCommandExecutionRequest
  ): Promise<responses.GetInstanceAgentCommandExecutionResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation ComputeInstanceAgentClient#getInstanceAgentCommandExecution."
      );
    const pathParams = {
      "{instanceAgentCommandId}": getInstanceAgentCommandExecutionRequest.instanceAgentCommandId
    };

    const queryParams = {
      "instanceId": getInstanceAgentCommandExecutionRequest.instanceId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getInstanceAgentCommandExecutionRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getInstanceAgentCommandExecutionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/instanceAgentCommands/{instanceAgentCommandId}/status",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetInstanceAgentCommandExecutionResponse>{},
        body: await response.json(),
        bodyKey: "instanceAgentCommandExecution",
        bodyModel: model.InstanceAgentCommandExecution,
        type: "model.InstanceAgentCommandExecution",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists the execution details for Oracle Cloud Agent commands that run on the specified compute
   * instance.
   *
   * @param ListInstanceAgentCommandExecutionsRequest
   * @return ListInstanceAgentCommandExecutionsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/computeinstanceagent/ListInstanceAgentCommandExecutions.ts.html |here} to see how to use ListInstanceAgentCommandExecutions API.
   */
  public async listInstanceAgentCommandExecutions(
    listInstanceAgentCommandExecutionsRequest: requests.ListInstanceAgentCommandExecutionsRequest
  ): Promise<responses.ListInstanceAgentCommandExecutionsResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation ComputeInstanceAgentClient#listInstanceAgentCommandExecutions."
      );
    const pathParams = {};

    const queryParams = {
      "compartmentId": listInstanceAgentCommandExecutionsRequest.compartmentId,
      "instanceId": listInstanceAgentCommandExecutionsRequest.instanceId,
      "page": listInstanceAgentCommandExecutionsRequest.page,
      "limit": listInstanceAgentCommandExecutionsRequest.limit,
      "sortBy": listInstanceAgentCommandExecutionsRequest.sortBy,
      "sortOrder": listInstanceAgentCommandExecutionsRequest.sortOrder,
      "lifecycleState": listInstanceAgentCommandExecutionsRequest.lifecycleState
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listInstanceAgentCommandExecutionsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listInstanceAgentCommandExecutionsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/instanceAgentCommandExecutions",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListInstanceAgentCommandExecutionsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.InstanceAgentCommandExecutionSummary,
        type: "Array<model.InstanceAgentCommandExecutionSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.InstanceAgentCommandExecutionSummary objects
   * contained in responses from the listInstanceAgentCommandExecutions operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllInstanceAgentCommandExecutions(
    request: requests.ListInstanceAgentCommandExecutionsRequest
  ): AsyncIterableIterator<model.InstanceAgentCommandExecutionSummary> {
    return paginateRecords(request, req => this.listInstanceAgentCommandExecutions(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listInstanceAgentCommandExecutions operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllInstanceAgentCommandExecutionsResponses(
    request: requests.ListInstanceAgentCommandExecutionsRequest
  ): AsyncIterableIterator<responses.ListInstanceAgentCommandExecutionsResponse> {
    return paginateResponses(request, req => this.listInstanceAgentCommandExecutions(req));
  }

  /**
   * Lists the Oracle Cloud Agent commands issued in a compartment.
   *
   * @param ListInstanceAgentCommandsRequest
   * @return ListInstanceAgentCommandsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/computeinstanceagent/ListInstanceAgentCommands.ts.html |here} to see how to use ListInstanceAgentCommands API.
   */
  public async listInstanceAgentCommands(
    listInstanceAgentCommandsRequest: requests.ListInstanceAgentCommandsRequest
  ): Promise<responses.ListInstanceAgentCommandsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ComputeInstanceAgentClient#listInstanceAgentCommands.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listInstanceAgentCommandsRequest.compartmentId,
      "page": listInstanceAgentCommandsRequest.page,
      "limit": listInstanceAgentCommandsRequest.limit,
      "sortBy": listInstanceAgentCommandsRequest.sortBy,
      "sortOrder": listInstanceAgentCommandsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listInstanceAgentCommandsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listInstanceAgentCommandsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/instanceAgentCommands",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListInstanceAgentCommandsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.InstanceAgentCommandSummary,
        type: "Array<model.InstanceAgentCommandSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.InstanceAgentCommandSummary objects
   * contained in responses from the listInstanceAgentCommands operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllInstanceAgentCommands(
    request: requests.ListInstanceAgentCommandsRequest
  ): AsyncIterableIterator<model.InstanceAgentCommandSummary> {
    return paginateRecords(request, req => this.listInstanceAgentCommands(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listInstanceAgentCommands operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllInstanceAgentCommandsResponses(
    request: requests.ListInstanceAgentCommandsRequest
  ): AsyncIterableIterator<responses.ListInstanceAgentCommandsResponse> {
    return paginateResponses(request, req => this.listInstanceAgentCommands(req));
  }
}
export enum PluginApiKeys {}

export class PluginClient {
  protected static serviceEndpointTemplate = "https://iaas.{region}.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20180530";
    if (this.logger) this.logger.info(`PluginClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      PluginClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      PluginClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * The API to get information for a plugin.
   * @param GetInstanceAgentPluginRequest
   * @return GetInstanceAgentPluginResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/computeinstanceagent/GetInstanceAgentPlugin.ts.html |here} to see how to use GetInstanceAgentPlugin API.
   */
  public async getInstanceAgentPlugin(
    getInstanceAgentPluginRequest: requests.GetInstanceAgentPluginRequest
  ): Promise<responses.GetInstanceAgentPluginResponse> {
    if (this.logger) this.logger.debug("Calling operation PluginClient#getInstanceAgentPlugin.");
    const pathParams = {
      "{instanceagentId}": getInstanceAgentPluginRequest.instanceagentId,
      "{pluginName}": getInstanceAgentPluginRequest.pluginName
    };

    const queryParams = {
      "compartmentId": getInstanceAgentPluginRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getInstanceAgentPluginRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getInstanceAgentPluginRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/instanceagents/{instanceagentId}/plugins/{pluginName}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetInstanceAgentPluginResponse>{},
        body: await response.json(),
        bodyKey: "instanceAgentPlugin",
        bodyModel: model.InstanceAgentPlugin,
        type: "model.InstanceAgentPlugin",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * The API to get one or more plugin information.
   * @param ListInstanceAgentPluginsRequest
   * @return ListInstanceAgentPluginsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/computeinstanceagent/ListInstanceAgentPlugins.ts.html |here} to see how to use ListInstanceAgentPlugins API.
   */
  public async listInstanceAgentPlugins(
    listInstanceAgentPluginsRequest: requests.ListInstanceAgentPluginsRequest
  ): Promise<responses.ListInstanceAgentPluginsResponse> {
    if (this.logger) this.logger.debug("Calling operation PluginClient#listInstanceAgentPlugins.");
    const pathParams = {
      "{instanceagentId}": listInstanceAgentPluginsRequest.instanceagentId
    };

    const queryParams = {
      "compartmentId": listInstanceAgentPluginsRequest.compartmentId,
      "status": listInstanceAgentPluginsRequest.status,
      "page": listInstanceAgentPluginsRequest.page,
      "limit": listInstanceAgentPluginsRequest.limit,
      "sortBy": listInstanceAgentPluginsRequest.sortBy,
      "sortOrder": listInstanceAgentPluginsRequest.sortOrder,
      "name": listInstanceAgentPluginsRequest.name
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listInstanceAgentPluginsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listInstanceAgentPluginsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/instanceagents/{instanceagentId}/plugins",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListInstanceAgentPluginsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.InstanceAgentPluginSummary,
        type: "Array<model.InstanceAgentPluginSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.InstanceAgentPluginSummary objects
   * contained in responses from the listInstanceAgentPlugins operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllInstanceAgentPlugins(
    request: requests.ListInstanceAgentPluginsRequest
  ): AsyncIterableIterator<model.InstanceAgentPluginSummary> {
    return paginateRecords(request, req => this.listInstanceAgentPlugins(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listInstanceAgentPlugins operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllInstanceAgentPluginsResponses(
    request: requests.ListInstanceAgentPluginsRequest
  ): AsyncIterableIterator<responses.ListInstanceAgentPluginsResponse> {
    return paginateResponses(request, req => this.listInstanceAgentPlugins(req));
  }
}
export enum PluginconfigApiKeys {}

export class PluginconfigClient {
  protected static serviceEndpointTemplate = "https://iaas.{region}.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20180530";
    if (this.logger) this.logger.info(`PluginconfigClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      PluginconfigClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      PluginconfigClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * The API to get the list of plugins that are available.
   * @param ListInstanceagentAvailablePluginsRequest
   * @return ListInstanceagentAvailablePluginsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/computeinstanceagent/ListInstanceagentAvailablePlugins.ts.html |here} to see how to use ListInstanceagentAvailablePlugins API.
   */
  public async listInstanceagentAvailablePlugins(
    listInstanceagentAvailablePluginsRequest: requests.ListInstanceagentAvailablePluginsRequest
  ): Promise<responses.ListInstanceagentAvailablePluginsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation PluginconfigClient#listInstanceagentAvailablePlugins.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listInstanceagentAvailablePluginsRequest.compartmentId,
      "page": listInstanceagentAvailablePluginsRequest.page,
      "limit": listInstanceagentAvailablePluginsRequest.limit,
      "osName": listInstanceagentAvailablePluginsRequest.osName,
      "osVersion": listInstanceagentAvailablePluginsRequest.osVersion,
      "sortBy": listInstanceagentAvailablePluginsRequest.sortBy,
      "sortOrder": listInstanceagentAvailablePluginsRequest.sortOrder,
      "name": listInstanceagentAvailablePluginsRequest.name
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listInstanceagentAvailablePluginsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listInstanceagentAvailablePluginsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/instanceagent/availablePlugins",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListInstanceagentAvailablePluginsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.AvailablePluginSummary,
        type: "Array<model.AvailablePluginSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.AvailablePluginSummary objects
   * contained in responses from the listInstanceagentAvailablePlugins operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllInstanceagentAvailablePlugins(
    request: requests.ListInstanceagentAvailablePluginsRequest
  ): AsyncIterableIterator<model.AvailablePluginSummary> {
    return paginateRecords(request, req => this.listInstanceagentAvailablePlugins(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listInstanceagentAvailablePlugins operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllInstanceagentAvailablePluginsResponses(
    request: requests.ListInstanceagentAvailablePluginsRequest
  ): AsyncIterableIterator<responses.ListInstanceagentAvailablePluginsResponse> {
    return paginateResponses(request, req => this.listInstanceagentAvailablePlugins(req));
  }
}

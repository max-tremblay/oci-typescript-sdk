/**
 * Resource Discovery and Monitoring Control API
 * Use the Resource Discovery and Monitoring Control API to get details about monitored instances and perform actions. For more information, see [Resource Discovery and Monitoring](https://docs.oracle.com/iaas/os-management/osms/osms-resource-discovery-monitoring.htm).

 * OpenAPI spec version: 20210330
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { AppmgmtControlWaiter } from "./appmgmtcontrol-waiter";
import {
  composeResponse,
  composeRequest,
  GenericRetrier,
  developerToolConfiguration
} from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AppmgmtControlApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class AppmgmtControlClient {
  protected static serviceEndpointTemplate = "https://cp.appmgmt.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean = false;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": AppmgmtControlWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "AppmgmtControl";
  protected _regionId: string = "";
  protected "_region": common.Region;
  protected _lastSetRegionOrRegionId: string = "";

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
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
      this._bodyDuplexMode = clientConfiguration.bodyDuplexMode
        ? clientConfiguration.bodyDuplexMode
        : undefined;
    }

    if (!developerToolConfiguration.isServiceEnabled("appmgmtcontrol")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("appmgmtcontrol");
    }

    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(
        requestSigner,
        this._circuitBreaker,
        this._httpOptions,
        this._bodyDuplexMode
      );

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
    this._endpoint = this._endpoint + "/20210330";
    if (this.logger) this.logger.info(`AppmgmtControlClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Determines whether realm specific endpoint should be used or not.
   * Set realmSpecificEndpointTemplateEnabled to "true" if the user wants to enable use of realm specific endpoint template, otherwise set it to "false"
   * @param realmSpecificEndpointTemplateEnabled flag to enable the use of realm specific endpoint template
   */
  public set useRealmSpecificEndpointTemplate(realmSpecificEndpointTemplateEnabled: boolean) {
    this._realmSpecificEndpointTemplateEnabled = realmSpecificEndpointTemplateEnabled;
    if (this.logger)
      this.logger.info(
        `realmSpecificEndpointTemplateEnabled set to ${this._realmSpecificEndpointTemplateEnabled}`
      );
    if (this._lastSetRegionOrRegionId === common.Region.REGION_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
        AppmgmtControlClient.serviceEndpointTemplate,
        this._region,
        AppmgmtControlClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        AppmgmtControlClient.serviceEndpointTemplate,
        this._regionId,
        AppmgmtControlClient.endpointServiceName
      );
    }
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this._region = region;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      AppmgmtControlClient.serviceEndpointTemplate,
      region,
      AppmgmtControlClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_STRING;
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
    this._regionId = regionId;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      AppmgmtControlClient.serviceEndpointTemplate,
      regionId,
      AppmgmtControlClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Creates a new AppmgmtControlWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): AppmgmtControlWaiter {
    this._waiters = new AppmgmtControlWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): AppmgmtControlWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Activates Resource Plugin for compute instance identified by the instance ocid.
   * Stores monitored instances Id and its state. Tries to enable Resource Monitoring plugin by making
   * remote calls to Oracle Cloud Agent and Management Agent Cloud Service.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ActivateMonitoringPluginRequest
   * @return ActivateMonitoringPluginResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/appmgmtcontrol/ActivateMonitoringPlugin.ts.html |here} to see how to use ActivateMonitoringPlugin API.
   */
  public async activateMonitoringPlugin(
    activateMonitoringPluginRequest: requests.ActivateMonitoringPluginRequest
  ): Promise<responses.ActivateMonitoringPluginResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AppmgmtControlClient#activateMonitoringPlugin.");
    const operationName = "activateMonitoringPlugin";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/resource-discovery-monitoring-control-api/20210330/MonitoredInstance/ActivateMonitoringPlugin";
    const pathParams = {
      "{monitoredInstanceId}": activateMonitoringPluginRequest.monitoredInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": activateMonitoringPluginRequest.ifMatch,
      "opc-request-id": activateMonitoringPluginRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      activateMonitoringPluginRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/monitoredInstances/{monitoredInstanceId}/actions/activateMonitoringPlugin",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ActivateMonitoringPluginResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
   * Gets a monitored instance by identifier
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param GetMonitoredInstanceRequest
   * @return GetMonitoredInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/appmgmtcontrol/GetMonitoredInstance.ts.html |here} to see how to use GetMonitoredInstance API.
   */
  public async getMonitoredInstance(
    getMonitoredInstanceRequest: requests.GetMonitoredInstanceRequest
  ): Promise<responses.GetMonitoredInstanceResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AppmgmtControlClient#getMonitoredInstance.");
    const operationName = "getMonitoredInstance";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/resource-discovery-monitoring-control-api/20210330/MonitoredInstance/GetMonitoredInstance";
    const pathParams = {
      "{monitoredInstanceId}": getMonitoredInstanceRequest.monitoredInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getMonitoredInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getMonitoredInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/monitoredInstances/{monitoredInstanceId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetMonitoredInstanceResponse>{},
        body: await response.json(),
        bodyKey: "monitoredInstance",
        bodyModel: model.MonitoredInstance,
        type: "model.MonitoredInstance",
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
   * Gets the status of the work request with the given ID.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param GetWorkRequestRequest
   * @return GetWorkRequestResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/appmgmtcontrol/GetWorkRequest.ts.html |here} to see how to use GetWorkRequest API.
   */
  public async getWorkRequest(
    getWorkRequestRequest: requests.GetWorkRequestRequest
  ): Promise<responses.GetWorkRequestResponse> {
    if (this.logger) this.logger.debug("Calling operation AppmgmtControlClient#getWorkRequest.");
    const operationName = "getWorkRequest";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/resource-discovery-monitoring-control-api/20210330/WorkRequest/GetWorkRequest";
    const pathParams = {
      "{workRequestId}": getWorkRequestRequest.workRequestId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getWorkRequestRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getWorkRequestRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetWorkRequestResponse>{},
        body: await response.json(),
        bodyKey: "workRequest",
        bodyModel: model.WorkRequest,
        type: "model.WorkRequest",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("retry-after"),
            key: "retryAfter",
            dataType: "number"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Returns a list of monitored instances.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListMonitoredInstancesRequest
   * @return ListMonitoredInstancesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/appmgmtcontrol/ListMonitoredInstances.ts.html |here} to see how to use ListMonitoredInstances API.
   */
  public async listMonitoredInstances(
    listMonitoredInstancesRequest: requests.ListMonitoredInstancesRequest
  ): Promise<responses.ListMonitoredInstancesResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AppmgmtControlClient#listMonitoredInstances.");
    const operationName = "listMonitoredInstances";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/resource-discovery-monitoring-control-api/20210330/MonitoredInstanceCollection/ListMonitoredInstances";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listMonitoredInstancesRequest.compartmentId,
      "displayName": listMonitoredInstancesRequest.displayName,
      "limit": listMonitoredInstancesRequest.limit,
      "page": listMonitoredInstancesRequest.page,
      "sortOrder": listMonitoredInstancesRequest.sortOrder,
      "sortBy": listMonitoredInstancesRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listMonitoredInstancesRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listMonitoredInstancesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/monitoredInstances",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListMonitoredInstancesResponse>{},
        body: await response.json(),
        bodyKey: "monitoredInstanceCollection",
        bodyModel: model.MonitoredInstanceCollection,
        type: "model.MonitoredInstanceCollection",
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
   * Return a (paginated) list of errors for a given work request.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListWorkRequestErrorsRequest
   * @return ListWorkRequestErrorsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/appmgmtcontrol/ListWorkRequestErrors.ts.html |here} to see how to use ListWorkRequestErrors API.
   */
  public async listWorkRequestErrors(
    listWorkRequestErrorsRequest: requests.ListWorkRequestErrorsRequest
  ): Promise<responses.ListWorkRequestErrorsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AppmgmtControlClient#listWorkRequestErrors.");
    const operationName = "listWorkRequestErrors";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/resource-discovery-monitoring-control-api/20210330/WorkRequestError/ListWorkRequestErrors";
    const pathParams = {
      "{workRequestId}": listWorkRequestErrorsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestErrorsRequest.page,
      "limit": listWorkRequestErrorsRequest.limit
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestErrorsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestErrorsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/errors",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestErrorsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestErrorCollection",
        bodyModel: model.WorkRequestErrorCollection,
        type: "model.WorkRequestErrorCollection",
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
   * Return a (paginated) list of logs for a given work request.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListWorkRequestLogsRequest
   * @return ListWorkRequestLogsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/appmgmtcontrol/ListWorkRequestLogs.ts.html |here} to see how to use ListWorkRequestLogs API.
   */
  public async listWorkRequestLogs(
    listWorkRequestLogsRequest: requests.ListWorkRequestLogsRequest
  ): Promise<responses.ListWorkRequestLogsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AppmgmtControlClient#listWorkRequestLogs.");
    const operationName = "listWorkRequestLogs";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/resource-discovery-monitoring-control-api/20210330/WorkRequestLogEntry/ListWorkRequestLogs";
    const pathParams = {
      "{workRequestId}": listWorkRequestLogsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestLogsRequest.page,
      "limit": listWorkRequestLogsRequest.limit
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestLogsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestLogsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/logs",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestLogsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestLogEntryCollection",
        bodyModel: model.WorkRequestLogEntryCollection,
        type: "model.WorkRequestLogEntryCollection",
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
   * Lists the work requests in a compartment.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListWorkRequestsRequest
   * @return ListWorkRequestsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/appmgmtcontrol/ListWorkRequests.ts.html |here} to see how to use ListWorkRequests API.
   */
  public async listWorkRequests(
    listWorkRequestsRequest: requests.ListWorkRequestsRequest
  ): Promise<responses.ListWorkRequestsResponse> {
    if (this.logger) this.logger.debug("Calling operation AppmgmtControlClient#listWorkRequests.");
    const operationName = "listWorkRequests";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/resource-discovery-monitoring-control-api/20210330/WorkRequest/ListWorkRequests";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listWorkRequestsRequest.compartmentId,
      "workRequestId": listWorkRequestsRequest.workRequestId,
      "page": listWorkRequestsRequest.page,
      "limit": listWorkRequestsRequest.limit
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestSummaryCollection",
        bodyModel: model.WorkRequestSummaryCollection,
        type: "model.WorkRequestSummaryCollection",
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
   * Starts cpu and memory top processes collection.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param PublishTopProcessesMetricsRequest
   * @return PublishTopProcessesMetricsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/appmgmtcontrol/PublishTopProcessesMetrics.ts.html |here} to see how to use PublishTopProcessesMetrics API.
   */
  public async publishTopProcessesMetrics(
    publishTopProcessesMetricsRequest: requests.PublishTopProcessesMetricsRequest
  ): Promise<responses.PublishTopProcessesMetricsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AppmgmtControlClient#publishTopProcessesMetrics.");
    const operationName = "publishTopProcessesMetrics";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/resource-discovery-monitoring-control-api/20210330/MonitoredInstance/PublishTopProcessesMetrics";
    const pathParams = {
      "{monitoredInstanceId}": publishTopProcessesMetricsRequest.monitoredInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": publishTopProcessesMetricsRequest.opcRequestId,
      "opc-retry-token": publishTopProcessesMetricsRequest.opcRetryToken
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      publishTopProcessesMetricsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/monitoredInstances/{monitoredInstanceId}/actions/publishTopProcessesMetrics",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.PublishTopProcessesMetricsResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
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
}

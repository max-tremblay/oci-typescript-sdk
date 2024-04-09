/**
 * Search Service API
 * Search for resources in your cloud network.
 * OpenAPI spec version: 20180409
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
import { paginateRecords, paginateResponses } from "oci-common";
import {
  composeResponse,
  composeRequest,
  GenericRetrier,
  developerToolConfiguration
} from "oci-common";
const Breaker = require("opossum");

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ResourceSearchApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class ResourceSearchClient {
  protected static serviceEndpointTemplate = "https://query.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean | undefined = undefined;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker: typeof Breaker | null = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "ResourceSearch";
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

    if (!developerToolConfiguration.isServiceEnabled("resourcesearch")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("resourcesearch");
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
    this._endpoint = this._endpoint + "/20180409";
    if (this.logger) this.logger.info(`ResourceSearchClient endpoint set to ${this._endpoint}`);
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
        ResourceSearchClient.serviceEndpointTemplate,
        this._region,
        ResourceSearchClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        ResourceSearchClient.serviceEndpointTemplate,
        this._regionId,
        ResourceSearchClient.endpointServiceName
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
      ResourceSearchClient.serviceEndpointTemplate,
      region,
      ResourceSearchClient.endpointServiceName
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
      ResourceSearchClient.serviceEndpointTemplate,
      regionId,
      ResourceSearchClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Shutdown the circuit breaker used by the client when it is no longer needed
   */
  public shutdownCircuitBreaker() {
    if (this._circuitBreaker) {
      this._circuitBreaker.shutdown();
    }
  }

  /**
   * Close the client once it is no longer needed
   */
  public close() {
    this.shutdownCircuitBreaker();
  }

  /**
   * Gets detailed information about a resource type by using the resource type name.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param GetResourceTypeRequest
   * @return GetResourceTypeResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/resourcesearch/GetResourceType.ts.html |here} to see how to use GetResourceType API.
   */
  public async getResourceType(
    getResourceTypeRequest: requests.GetResourceTypeRequest
  ): Promise<responses.GetResourceTypeResponse> {
    if (this.logger) this.logger.debug("Calling operation ResourceSearchClient#getResourceType.");
    const operationName = "getResourceType";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/search/20180409/ResourceType/GetResourceType";
    const pathParams = {
      "{name}": getResourceTypeRequest.name
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getResourceTypeRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getResourceTypeRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/resourceTypes/{name}",
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
        responseObject: <responses.GetResourceTypeResponse>{},
        body: await response.json(),
        bodyKey: "resourceType",
        bodyModel: model.ResourceType,
        type: "model.ResourceType",
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
   * Lists all resource types that you can search or query for.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListResourceTypesRequest
   * @return ListResourceTypesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/resourcesearch/ListResourceTypes.ts.html |here} to see how to use ListResourceTypes API.
   */
  public async listResourceTypes(
    listResourceTypesRequest: requests.ListResourceTypesRequest
  ): Promise<responses.ListResourceTypesResponse> {
    if (this.logger) this.logger.debug("Calling operation ResourceSearchClient#listResourceTypes.");
    const operationName = "listResourceTypes";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/search/20180409/ResourceType/ListResourceTypes";
    const pathParams = {};

    const queryParams = {
      "limit": listResourceTypesRequest.limit,
      "page": listResourceTypesRequest.page
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listResourceTypesRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listResourceTypesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/resourceTypes",
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
        responseObject: <responses.ListResourceTypesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.ResourceType,
        type: "Array<model.ResourceType>",
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
   * NOTE: This function is deprecated in favor of listResourceTypesRecordIterator function.
   * Creates a new async iterator which will iterate over the models.ResourceType objects
   * contained in responses from the listResourceTypes operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllResourceTypes(
    request: requests.ListResourceTypesRequest
  ): AsyncIterableIterator<model.ResourceType> {
    return paginateRecords(request, req => this.listResourceTypes(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listResourceTypesResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listResourceTypes operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllResourceTypesResponses(
    request: requests.ListResourceTypesRequest
  ): AsyncIterableIterator<responses.ListResourceTypesResponse> {
    return paginateResponses(request, req => this.listResourceTypes(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.ResourceType objects
   * contained in responses from the listResourceTypes operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listResourceTypesRecordIterator(
    request: requests.ListResourceTypesRequest
  ): AsyncIterableIterator<model.ResourceType> {
    return paginateRecords(request, req => this.listResourceTypes(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listResourceTypes operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listResourceTypesResponseIterator(
    request: requests.ListResourceTypesRequest
  ): AsyncIterableIterator<responses.ListResourceTypesResponse> {
    return paginateResponses(request, req => this.listResourceTypes(req));
  }

  /**
   * Queries any and all compartments in the specified tenancy to find resources that match the specified criteria.
   * Results include resources that you have permission to view and can span different resource types.
   * You can also sort results based on a specified resource attribute.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param SearchResourcesRequest
   * @return SearchResourcesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/resourcesearch/SearchResources.ts.html |here} to see how to use SearchResources API.
   */
  public async searchResources(
    searchResourcesRequest: requests.SearchResourcesRequest
  ): Promise<responses.SearchResourcesResponse> {
    if (this.logger) this.logger.debug("Calling operation ResourceSearchClient#searchResources.");
    const operationName = "searchResources";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/search/20180409/ResourceSummary/SearchResources";
    const pathParams = {};

    const queryParams = {
      "limit": searchResourcesRequest.limit,
      "page": searchResourcesRequest.page,
      "tenantId": searchResourcesRequest.tenantId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": searchResourcesRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      searchResourcesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/resources",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        searchResourcesRequest.searchDetails,
        "SearchDetails",
        model.SearchDetails.getJsonObj
      ),
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
        responseObject: <responses.SearchResourcesResponse>{},
        body: await response.json(),
        bodyKey: "resourceSummaryCollection",
        bodyModel: model.ResourceSummaryCollection,
        type: "model.ResourceSummaryCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-previous-page"),
            key: "opcPreviousPage",
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

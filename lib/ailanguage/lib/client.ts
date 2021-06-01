/**
 * Oracle Cloud Infrastructure Artificial Intelligence Services API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately using our proven,
    pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
    This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20210101
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
import * as models from "./model";
import * as responses from "./response";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AIServiceLanguageApiKeys {}

export class AIServiceLanguageClient {
  protected static serviceEndpointTemplate =
    "https://language.aiservice.{region}.oci.{secondLevelDomain}";
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
    this._endpoint = this._endpoint + "/20210101";
    if (this.logger) this.logger.info(`AIServiceLanguageClient endpoint set to ${this._endpoint}`);
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
      AIServiceLanguageClient.serviceEndpointTemplate,
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
      AIServiceLanguageClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Make a detect call to language detection pre-deployed model.
   * @param DetectDominantLanguageRequest
   * @return DetectDominantLanguageResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ailanguage/DetectDominantLanguage.ts.html |here} to see how to use DetectDominantLanguage API.
   */
  public async detectDominantLanguage(
    detectDominantLanguageRequest: requests.DetectDominantLanguageRequest
  ): Promise<responses.DetectDominantLanguageResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceLanguageClient#detectDominantLanguage.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": detectDominantLanguageRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      detectDominantLanguageRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/actions/detectDominantLanguage",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        detectDominantLanguageRequest.detectDominantLanguageDetails,
        "DetectDominantLanguageDetails",
        models.DetectDominantLanguageDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DetectDominantLanguageResponse>{},
        body: await response.json(),
        bodyKey: "detectDominantLanguageResult",
        bodyModel: "model.DetectDominantLanguageResult",
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
   * Make a detect call to enitiy pre-deployed model
   * @param DetectLanguageEntitiesRequest
   * @return DetectLanguageEntitiesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ailanguage/DetectLanguageEntities.ts.html |here} to see how to use DetectLanguageEntities API.
   */
  public async detectLanguageEntities(
    detectLanguageEntitiesRequest: requests.DetectLanguageEntitiesRequest
  ): Promise<responses.DetectLanguageEntitiesResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceLanguageClient#detectLanguageEntities.");
    const pathParams = {};

    const queryParams = {
      "modelVersion": detectLanguageEntitiesRequest.modelVersion,
      "isPii": detectLanguageEntitiesRequest.isPii
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": detectLanguageEntitiesRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      detectLanguageEntitiesRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/actions/detectLanguageEntities",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        detectLanguageEntitiesRequest.detectLanguageEntitiesDetails,
        "DetectLanguageEntitiesDetails",
        models.DetectLanguageEntitiesDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DetectLanguageEntitiesResponse>{},
        body: await response.json(),
        bodyKey: "detectLanguageEntitiesResult",
        bodyModel: "model.DetectLanguageEntitiesResult",
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
   * Make a detect call to the keyPhrase pre-deployed model.
   * @param DetectLanguageKeyPhrasesRequest
   * @return DetectLanguageKeyPhrasesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ailanguage/DetectLanguageKeyPhrases.ts.html |here} to see how to use DetectLanguageKeyPhrases API.
   */
  public async detectLanguageKeyPhrases(
    detectLanguageKeyPhrasesRequest: requests.DetectLanguageKeyPhrasesRequest
  ): Promise<responses.DetectLanguageKeyPhrasesResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceLanguageClient#detectLanguageKeyPhrases.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": detectLanguageKeyPhrasesRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      detectLanguageKeyPhrasesRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/actions/detectLanguageKeyPhrases",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        detectLanguageKeyPhrasesRequest.detectLanguageKeyPhrasesDetails,
        "DetectLanguageKeyPhrasesDetails",
        models.DetectLanguageKeyPhrasesDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DetectLanguageKeyPhrasesResponse>{},
        body: await response.json(),
        bodyKey: "detectLanguageKeyPhrasesResult",
        bodyModel: "model.DetectLanguageKeyPhrasesResult",
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
   * Make a detect call to sentiment pre-deployed model.
   * @param DetectLanguageSentimentsRequest
   * @return DetectLanguageSentimentsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ailanguage/DetectLanguageSentiments.ts.html |here} to see how to use DetectLanguageSentiments API.
   */
  public async detectLanguageSentiments(
    detectLanguageSentimentsRequest: requests.DetectLanguageSentimentsRequest
  ): Promise<responses.DetectLanguageSentimentsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation AIServiceLanguageClient#detectLanguageSentiments.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": detectLanguageSentimentsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      detectLanguageSentimentsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/actions/detectLanguageSentiments",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        detectLanguageSentimentsRequest.detectLanguageSentimentsDetails,
        "DetectLanguageSentimentsDetails",
        models.DetectLanguageSentimentsDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DetectLanguageSentimentsResponse>{},
        body: await response.json(),
        bodyKey: "detectLanguageSentimentsResult",
        bodyModel: "model.DetectLanguageSentimentsResult",
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
   * Make a detect call to text classification from the pre-deployed model.
   * @param DetectLanguageTextClassificationRequest
   * @return DetectLanguageTextClassificationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ailanguage/DetectLanguageTextClassification.ts.html |here} to see how to use DetectLanguageTextClassification API.
   */
  public async detectLanguageTextClassification(
    detectLanguageTextClassificationRequest: requests.DetectLanguageTextClassificationRequest
  ): Promise<responses.DetectLanguageTextClassificationResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation AIServiceLanguageClient#detectLanguageTextClassification."
      );
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": detectLanguageTextClassificationRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      detectLanguageTextClassificationRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/actions/detectLanguageTextClassification",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        detectLanguageTextClassificationRequest.detectLanguageTextClassificationDetails,
        "DetectLanguageTextClassificationDetails",
        models.DetectLanguageTextClassificationDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DetectLanguageTextClassificationResponse>{},
        body: await response.json(),
        bodyKey: "detectLanguageTextClassificationResult",
        bodyModel: "model.DetectLanguageTextClassificationResult",
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
}

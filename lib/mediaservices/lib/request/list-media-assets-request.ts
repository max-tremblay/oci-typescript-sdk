/**
 *
 *
 * OpenAPI spec version: 20211101
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/mediaservices/ListMediaAssets.ts.html |here} to see how to use ListMediaAssetsRequest.
 */
export interface ListMediaAssetsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId"?: string;
  /**
   * A filter to return only the resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the
   * `opc-next-page` header field of a previous response.
   *
   */
  "page"?: string;
  /**
   * A filter to return only the resources with lifecycleState matching the given lifecycleState.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending.
   *
   */
  "sortBy"?: model.MediaAssetSortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * Unique DistributionChannel identifier.
   */
  "distributionChannelId"?: string;
  /**
   * Unique MediaAsset identifier of the asset from which this asset is derived.
   */
  "parentMediaAssetId"?: string;
  /**
   * Unique MediaAsset identifier of the first asset upload.
   */
  "masterMediaAssetId"?: string;
  /**
   * Filter MediaAsset by the asset type.
   */
  "type"?: model.AssetType;
  /**
   * Filter MediaAsset by the bucket where the object is stored.
   */
  "bucketName"?: string;
  /**
   * Filter MediaAsset by the name of the object in object storage.
   */
  "objectName"?: string;
  /**
   * The ID of the MediaWorkflowJob used to produce this asset, if this parameter is supplied then the workflow ID must also be supplied.
   */
  "mediaWorkflowJobId"?: string;
  /**
   * The ID of the MediaWorkflow used to produce this asset.
   */
  "sourceMediaWorkflowId"?: string;
  /**
   * The version of the MediaWorkflow used to produce this asset.
   */
  "sourceMediaWorkflowVersion"?: number;
}

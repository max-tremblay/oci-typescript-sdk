/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
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
 * The node count configuration to update on an existing OpenSearch cluster for [horizontal resizing](https://docs.cloud.oracle.com/iaas/Content/search-opensearch/Tasks/resizingacluster.htm#horizontalresize).
 */
export interface ResizeOpensearchClusterHorizontalDetails {
  /**
   * The number of master nodes to configure for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "masterNodeCount"?: number;
  /**
   * The number of data nodes to configure for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeCount"?: number;
  /**
   * The number of OpenSearch Dashboard nodes to configure for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "opendashboardNodeCount"?: number;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ResizeOpensearchClusterHorizontalDetails {
  export function getJsonObj(obj: ResizeOpensearchClusterHorizontalDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResizeOpensearchClusterHorizontalDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

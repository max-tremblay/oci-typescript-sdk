/**
 * Artifacts and Container Images API
 * API covering the Artifacts and [Registry](/iaas/Content/Registry/Concepts/registryoverview.htm) services.
Use this API to manage resources such as generic artifacts and container images.

 * OpenAPI spec version: 20160918
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
 * List of container repository results.
 */
export interface ContainerRepositoryCollection {
  /**
   * Total number of layers. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "layerCount": number;
  /**
   * Total storage in bytes consumed by layers. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "layersSizeInBytes": number;
  /**
   * Total number of images. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "imageCount": number;
  /**
   * Collection of container repositories.
   */
  "items": Array<model.ContainerRepositorySummary>;
  /**
   * Estimated number of remaining results. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "remainingItemsCount": number;
  /**
   * Total number of repositories. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "repositoryCount": number;
}

export namespace ContainerRepositoryCollection {
  export function getJsonObj(obj: ContainerRepositoryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ContainerRepositorySummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerRepositoryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ContainerRepositorySummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

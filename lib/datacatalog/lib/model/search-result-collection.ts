/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * The list of search result items matching the criteria returned from the search operation. Search errors and
 * messages, if any , will be part of the standard error response.
 *
 */
export interface SearchResultCollection {
  /**
   * Total number of items returned. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count"?: number;
  /**
   * Search result set.
   */
  "items"?: Array<model.SearchResult>;
  /**
   * String that data objects are to be searched with.
   */
  "query"?: string;
  /**
   * Aggregations/facets on properties of data objects.
   */
  "facetedSearchAggregation"?: Array<model.FacetedSearchAggregation>;
  /**
   * A list of fields or properties used in the sorting of a search result.
   */
  "sortableFields"?: Array<string>;
}

export namespace SearchResultCollection {
  export function getJsonObj(obj: SearchResultCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.SearchResult.getJsonObj(item);
            })
          : undefined,

        "facetedSearchAggregation": obj.facetedSearchAggregation
          ? obj.facetedSearchAggregation.map(item => {
              return model.FacetedSearchAggregation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SearchResultCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.SearchResult.getDeserializedJsonObj(item);
            })
          : undefined,

        "facetedSearchAggregation": obj.facetedSearchAggregation
          ? obj.facetedSearchAggregation.map(item => {
              return model.FacetedSearchAggregation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

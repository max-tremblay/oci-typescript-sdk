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

import * as model from "../model";
import common = require("oci-common");

/**
 * A base request type that contains common criteria for searching for resources.
 */
export interface SearchDetails {
  /**
   * The type of matching context returned in the response. If you specify `HIGHLIGHTS`, then the service will highlight fragments in its response. (For more information, see ResourceSummary.searchContext and SearchContext.) The default setting is `NONE`.
   *
   */
  "matchingContextType"?: SearchDetails.MatchingContextType;

  "type": string;
}

export namespace SearchDetails {
  export enum MatchingContextType {
    None = "NONE",
    Highlights = "HIGHLIGHTS"
  }

  export function getJsonObj(obj: SearchDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "Structured":
          return model.StructuredSearchDetails.getJsonObj(
            <model.StructuredSearchDetails>(<object>jsonObj),
            true
          );
        case "FreeText":
          return model.FreeTextSearchDetails.getJsonObj(
            <model.FreeTextSearchDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SearchDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "Structured":
          return model.StructuredSearchDetails.getDeserializedJsonObj(
            <model.StructuredSearchDetails>(<object>jsonObj),
            true
          );
        case "FreeText":
          return model.FreeTextSearchDetails.getDeserializedJsonObj(
            <model.FreeTextSearchDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}

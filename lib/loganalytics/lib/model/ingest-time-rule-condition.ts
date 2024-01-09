/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * The condition(s) to evaluate for an ingest time rule.
 */
export interface IngestTimeRuleCondition {
  "kind": string;
}

export namespace IngestTimeRuleCondition {
  export function getJsonObj(obj: IngestTimeRuleCondition): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "FIELD":
          return model.IngestTimeRuleFieldCondition.getJsonObj(
            <model.IngestTimeRuleFieldCondition>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IngestTimeRuleCondition): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "FIELD":
          return model.IngestTimeRuleFieldCondition.getDeserializedJsonObj(
            <model.IngestTimeRuleFieldCondition>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
}

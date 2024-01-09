/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Insights response containing utilization values for exadata systems.
 *
 */
export interface SummarizeExadataInsightResourceUtilizationInsightAggregation {
  /**
   * The start timestamp that was passed into the request.
   */
  "timeIntervalStart": Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeIntervalEnd": Date;
  /**
   * Defines the type of exadata resource metric (example: CPU, STORAGE)
   *
   */
  "exadataResourceMetric": SummarizeExadataInsightResourceUtilizationInsightAggregation.ExadataResourceMetric;
  /**
   * Defines the resource type for an exadata  (example: DATABASE, STORAGE_SERVER, HOST, DISKGROUP)
   *
   */
  "exadataResourceType": SummarizeExadataInsightResourceUtilizationInsightAggregation.ExadataResourceType;
  /**
   * Collection of Exadata system utilization
   */
  "utilization": Array<model.ExadataInsightResourceInsightUtilizationItem>;
}

export namespace SummarizeExadataInsightResourceUtilizationInsightAggregation {
  export enum ExadataResourceMetric {
    Cpu = "CPU",
    Storage = "STORAGE",
    Io = "IO",
    Memory = "MEMORY",
    Iops = "IOPS",
    Throughput = "THROUGHPUT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ExadataResourceType {
    Database = "DATABASE",
    Host = "HOST",
    StorageServer = "STORAGE_SERVER",
    Diskgroup = "DISKGROUP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: SummarizeExadataInsightResourceUtilizationInsightAggregation
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "utilization": obj.utilization
          ? obj.utilization.map(item => {
              return model.ExadataInsightResourceInsightUtilizationItem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: SummarizeExadataInsightResourceUtilizationInsightAggregation
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "utilization": obj.utilization
          ? obj.utilization.map(item => {
              return model.ExadataInsightResourceInsightUtilizationItem.getDeserializedJsonObj(
                item
              );
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

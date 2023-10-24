/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetric, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For more information, see
[the Monitoring documentation](/iaas/Content/Monitoring/home.htm).

 * OpenAPI spec version: 20180401
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
* The set of aggregated data returned for a metric.
* For information about metrics, see
* [Metrics Overview](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#MetricsOverview).
* <p>
Limits information for returned data follows.
* <p>
* Data points: 100,000.
* * Metric streams* within data points: 2,000.
* * Time range returned for 1-day resolution: 90 days.
* * Time range returned for 1-hour resolution: 90 days.
* * Time range returned for 5-minute resolution: 30 days.
* * Time range returned for 1-minute resolution: 7 days.
* <p>
*A metric stream is an individual set of aggregated data for a metric with zero or more dimension values.
* Metric streams cannot be aggregated across metric groups.
* A metric group is the combination of a given metric, metric namespace, and tenancy for the purpose of determining limits.
* For more information about metric-related concepts, see
* [Monitoring Concepts](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#concepts).
* 
*/
export interface MetricData {
  /**
    * The reference provided in a metric definition to indicate the source service or
* application that emitted the metric.
* <p>
Example: `oci_computeagent`
* 
    */
  "namespace": string;
  /**
    * Resource group provided with the posted metric. A resource group is a custom string that you can match when retrieving custom metrics. Only one resource group can be applied per metric.
* A valid resourceGroup value starts with an alphabetical character and includes only alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).
* <p>
Example: `frontend-fleet`
* 
    */
  "resourceGroup"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the
   * resources that the aggregated data was returned from.
   *
   */
  "compartmentId": string;
  /**
    * The name of the metric.
* <p>
Example: `CpuUtilization`
* 
    */
  "name": string;
  /**
    * Qualifiers provided in the definition of the returned metric.
* Available dimensions vary by metric namespace. Each dimension takes the form of a key-value pair.
* <p>
Example: `\"resourceId\": \"ocid1.instance.region1.phx.exampleuniqueID\"`
* 
    */
  "dimensions": { [key: string]: string };
  /**
    * The references provided in a metric definition to indicate extra information about the metric.
* <p>
Example: `\"unit\": \"bytes\"`
* 
    */
  "metadata"?: { [key: string]: string };
  /**
    * The time between calculated aggregation windows. Use with the query interval to vary the
* frequency for returning aggregated data points. For example, use a query interval of
* 5 minutes with a resolution of 1 minute to retrieve five-minute aggregations at a one-minute
* frequency. The resolution must be equal or less than the interval in the query. The default
* resolution is 1m (one minute). Supported values: `1m`-`60m`, `1h`-`24h`, `1d`.
* <p>
Example: `5m`
* 
    */
  "resolution"?: string;
  /**
   * The list of timestamp-value pairs returned for the specified request. Metric values are rolled up to the start time specified in the request.
   * For important limits information related to data points, see MetricData Reference at the top of this page.
   *
   */
  "aggregatedDatapoints": Array<model.AggregatedDatapoint>;
}

export namespace MetricData {
  export function getJsonObj(obj: MetricData): object {
    const jsonObj = {
      ...obj,
      ...{
        "aggregatedDatapoints": obj.aggregatedDatapoints
          ? obj.aggregatedDatapoints.map(item => {
              return model.AggregatedDatapoint.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MetricData): object {
    const jsonObj = {
      ...obj,
      ...{
        "aggregatedDatapoints": obj.aggregatedDatapoints
          ? obj.aggregatedDatapoints.map(item => {
              return model.AggregatedDatapoint.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

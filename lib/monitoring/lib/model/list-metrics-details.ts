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
 * The request details for retrieving metric definitions. Specify optional properties to filter the returned results.
 * Use an asterisk (&#42;) as a wildcard character, placed anywhere in the string.
 * For example, to search for all metrics with names that begin with \"disk\", specify \"name\" as \"disk&#42;\".
 * If no properties are specified, then all metric definitions within the request scope are returned.
 *
 */
export interface ListMetricsDetails {
  /**
    * The metric name to use when searching for metric definitions.
* <p>
Example: `CpuUtilization`
* 
    */
  "name"?: string;
  /**
    * The source service or application to use when searching for metric definitions.
* <p>
Example: `oci_computeagent`
* 
    */
  "namespace"?: string;
  /**
    * Resource group that you want to match. A null value returns only metric data that has no resource groups. The specified resource group must exist in the definition of the posted metric. Only one resource group can be applied per metric.
* A valid resourceGroup value starts with an alphabetical character and includes only alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).
* <p>
Example: `frontend-fleet`
* 
    */
  "resourceGroup"?: string;
  /**
    * Qualifiers that you want to use when searching for metric definitions.
* Available dimensions vary by metric namespace. Each dimension takes the form of a key-value pair.
* <p>
Example: `\"resourceId\": \"ocid1.instance.region1.phx.exampleuniqueID\"`
* 
    */
  "dimensionFilters"?: { [key: string]: string };
  /**
    * Group metrics by these fields in the response. For example, to list all metric namespaces available
*           in a compartment, groupBy the \"namespace\" field. Supported fields: namespace, name, resourceGroup.
* If `groupBy` is used, then `dimensionFilters` is ignored.
* <p>
Example - group by namespace:
* `[ \"namespace\" ]`
* 
    */
  "groupBy"?: Array<string>;
  /**
    * The field to use when sorting returned metric definitions. Only one sorting level is provided.
* <p>
Example: `NAMESPACE`
* 
    */
  "sortBy"?: ListMetricsDetails.SortBy;
  /**
    * The sort order to use when sorting returned metric definitions. Ascending (ASC) or
* descending (DESC).
* <p>
Example: `ASC`
* 
    */
  "sortOrder"?: ListMetricsDetails.SortOrder;
}

export namespace ListMetricsDetails {
  export enum SortBy {
    Namespace = "NAMESPACE",
    Name = "NAME",
    Resourcegroup = "RESOURCEGROUP"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export function getJsonObj(obj: ListMetricsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ListMetricsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

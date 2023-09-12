/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * A metric emitted by managed instance resource.
 */
export interface ManagedInstanceAnalyticSummary {
  /**
   * The name of this metric.
   */
  "name": model.MetricName;
  /**
    * Qualifiers provided in a metric definition. Available dimensions vary by metric namespace.
* Each dimension takes the form of a key-value pair.
* <p>
Example: `\"managedInstanceId\": \"ocid1.managementagent.123\"`
* 
    */
  "dimensions": { [key: string]: string };
  /**
   * The value of this metric. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count": number;
}

export namespace ManagedInstanceAnalyticSummary {
  export function getJsonObj(obj: ManagedInstanceAnalyticSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagedInstanceAnalyticSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

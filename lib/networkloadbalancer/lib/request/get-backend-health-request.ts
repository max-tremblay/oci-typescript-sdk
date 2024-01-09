/**
 *
 *
 * OpenAPI spec version: 20200501
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/networkloadbalancer/GetBackendHealth.ts.html |here} to see how to use GetBackendHealthRequest.
 */
export interface GetBackendHealthRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network load balancer to update.
   */
  "networkLoadBalancerId": string;
  /**
 * The name of the backend set associated with the backend server for which to retrieve the health status.
* <p>
Example: `example_backend_set`
* 
 */
  "backendSetName": string;
  /**
 * The name of the backend server to retrieve health status for.
* If the backend was created with an explicitly specified name, that name should be used here.
* If the backend was created without explicitly specifying the name, but was created using ipAddress, this is specified as <ipAddress>:<port>.
* If the backend was created without explicitly specifying the name, but was created using targetId, this is specified as <targetId>:<port>.
* <p>
Example: `10.0.0.3:8080` or `ocid1.privateip..oc1.<var>&lt;unique_ID&gt;</var>:8080`
* 
 */
  "backendName": string;
  /**
   * The unique Oracle-assigned identifier for the request. If you must contact Oracle about a
   * particular request, then provide the request identifier.
   *
   */
  "opcRequestId"?: string;
}

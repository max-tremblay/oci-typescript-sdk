/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * Configuration details to update a load balancer.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface UpdateLoadBalancerDetails {
  /**
    * The user-friendly display name for the load balancer. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: {@code example_load_balancer}
* 
    */
  "displayName"?: string;
  /**
    * Whether or not the load balancer has delete protection enabled.
* <p>
If \"true\", the loadbalancer will be protected against deletion if configured to accept traffic.
* <p>
If \"false\", the loadbalancer will not be protected against deletion.
* <p>
If null or unset, the value for delete protection will not be changed.
* <p>
Example: {@code true}
* 
    */
  "isDeleteProtectionEnabled"?: boolean;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateLoadBalancerDetails {
  export function getJsonObj(obj: UpdateLoadBalancerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateLoadBalancerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

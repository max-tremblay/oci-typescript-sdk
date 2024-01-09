/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * Create backend set mapping properties for a network load balancer member.
 */
export interface NetworkLoadBalancerBackendSetMappingDetails {
  /**
    * This flag specifies if this backend set is used for traffic for non-movable compute instances.
* Backend sets that point to non-movable instances are only enabled or disabled during DR, their contents
* are not altered. For non-movable instances this flag should be set to 'true'.
* Backend sets that point to movable instances are emptied and their contents are transferred to the 
* destination region load balancer.  For movable instances this flag should be set to 'false'. 
* <p>
Example: `true`
* 
    */
  "isBackendSetForNonMovable": boolean;
  /**
    * The name of the source backend set.
* <p>
Example: `Source-BackendSet-1`
* 
    */
  "sourceBackendSetName": string;
  /**
    * The name of the destination backend set.
* <p>
Example: `Destination-BackendSet-1`
* 
    */
  "destinationBackendSetName": string;
}

export namespace NetworkLoadBalancerBackendSetMappingDetails {
  export function getJsonObj(obj: NetworkLoadBalancerBackendSetMappingDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NetworkLoadBalancerBackendSetMappingDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

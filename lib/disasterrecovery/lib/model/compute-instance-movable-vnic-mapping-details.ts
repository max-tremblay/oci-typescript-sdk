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
 * Source VNIC to destination subnet mapping for a movable compute instance.
 *
 */
export interface ComputeInstanceMovableVnicMappingDetails {
  /**
    * The OCID of the source VNIC.
* <p>
Example: `ocid1.vnic.oc1..uniqueID`
* 
    */
  "sourceVnicId": string;
  /**
    * The OCID of the destination subnet to which the source VNIC should connect.        
* <p>
Example: `ocid1.subnet.oc1..uniqueID`
* 
    */
  "destinationSubnetId": string;
  /**
    * The primary private IP address to be assigned to the source VNIC in the destination subnet. 
* This IP address must belong to the destination subnet.
* <p>
Example: `10.0.3.3`
* 
    */
  "destinationPrimaryPrivateIpAddress"?: string;
  /**
    * The hostname label to be assigned in the destination subnet for the primary private IP of the source VNIC.
* This label is the hostname portion of the private IP's fully qualified domain name (FQDN) 
* (for example, 'myhost1' in the FQDN 'myhost1.subnet123.vcn1.oraclevcn.com').
* <p>
Example: `myhost1`
* 
    */
  "destinationPrimaryPrivateIpHostnameLabel"?: string;
  /**
    * A list of OCIDs of network security groups (NSG) in the destination region which should be assigned to
* the source VNIC.
* <p>
Example: `[ ocid1.networksecuritygroup.oc1..uniqueID, ocid1.networksecuritygroup.oc1..uniqueID ]`
* 
    */
  "destinationNsgIdList"?: Array<string>;
}

export namespace ComputeInstanceMovableVnicMappingDetails {
  export function getJsonObj(obj: ComputeInstanceMovableVnicMappingDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComputeInstanceMovableVnicMappingDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

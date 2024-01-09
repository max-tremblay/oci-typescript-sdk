/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * The information about a new VirtualDeployment.
 */
export interface CreateVirtualDeploymentDetails {
  /**
   * The OCID of the service mesh in which this access policy is created.
   */
  "virtualServiceId": string;
  /**
    * A user-friendly name. The name must be unique within the same virtual service and cannot be changed after creation.
* Avoid entering confidential information.
* <p>
Example: `My unique resource name`
* 
    */
  "name": string;
  /**
    * Description of the resource. It can be changed after creation.
* Avoid entering confidential information.
* <p>
Example: `This is my new resource`
* 
    */
  "description"?: string;
  "serviceDiscovery"?:
    | model.DnsServiceDiscoveryConfiguration
    | model.DisabledServiceDiscoveryConfiguration;
  /**
   * The listeners for the virtual deployment.
   */
  "listeners"?: Array<model.VirtualDeploymentListener>;
  "accessLogging"?: model.AccessLoggingConfiguration;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   *
   */
  "compartmentId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateVirtualDeploymentDetails {
  export function getJsonObj(obj: CreateVirtualDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "serviceDiscovery": obj.serviceDiscovery
          ? model.ServiceDiscoveryConfiguration.getJsonObj(obj.serviceDiscovery)
          : undefined,
        "listeners": obj.listeners
          ? obj.listeners.map(item => {
              return model.VirtualDeploymentListener.getJsonObj(item);
            })
          : undefined,
        "accessLogging": obj.accessLogging
          ? model.AccessLoggingConfiguration.getJsonObj(obj.accessLogging)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateVirtualDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "serviceDiscovery": obj.serviceDiscovery
          ? model.ServiceDiscoveryConfiguration.getDeserializedJsonObj(obj.serviceDiscovery)
          : undefined,
        "listeners": obj.listeners
          ? obj.listeners.map(item => {
              return model.VirtualDeploymentListener.getDeserializedJsonObj(item);
            })
          : undefined,
        "accessLogging": obj.accessLogging
          ? model.AccessLoggingConfiguration.getDeserializedJsonObj(obj.accessLogging)
          : undefined
      }
    };

    return jsonObj;
  }
}

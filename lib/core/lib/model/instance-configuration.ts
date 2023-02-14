/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
 * An instance configuration is a template that defines the settings to use when creating Compute instances.
 * For more information about instance configurations, see
 * [Managing Compute Instances](https://docs.cloud.oracle.com/iaas/Content/Compute/Concepts/instancemanagement.htm).
 *
 */
export interface InstanceConfiguration {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment
   * containing the instance configuration.
   *
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the instance configuration.
   */
  "id": string;
  "instanceDetails"?: model.ComputeInstanceDetails;
  /**
   * Parameters that were not specified when the instance configuration was created, but that
   * are required to launch an instance from the instance configuration. See the
   * {@link #launchInstanceConfiguration(LaunchInstanceConfigurationRequest) launchInstanceConfiguration} operation.
   *
   */
  "deferredFields"?: Array<string>;
  /**
    * The date and time the instance configuration was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
}

export namespace InstanceConfiguration {
  export function getJsonObj(obj: InstanceConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceDetails": obj.instanceDetails
          ? model.InstanceConfigurationInstanceDetails.getJsonObj(obj.instanceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceDetails": obj.instanceDetails
          ? model.InstanceConfigurationInstanceDetails.getDeserializedJsonObj(obj.instanceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}

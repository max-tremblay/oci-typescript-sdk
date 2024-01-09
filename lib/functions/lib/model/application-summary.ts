/**
 * Functions Service API
 * API for the Functions service.

 * OpenAPI spec version: 20181201
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
 * Summary of an application.
 *
 */
export interface ApplicationSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the application.
   *
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the application.
   *
   */
  "compartmentId"?: string;
  /**
   * The display name of the application. The display name is unique within the compartment containing the application.
   *
   */
  "displayName"?: string;
  /**
   * The current state of the application.
   *
   */
  "lifecycleState"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)s of the subnets in which to run functions in the application.
   *
   */
  "subnetIds"?: Array<string>;
  /**
   * Valid values are `GENERIC_X86`, `GENERIC_ARM` and `GENERIC_X86_ARM`. Default is `GENERIC_X86`. Setting this to `GENERIC_X86`, will run the functions in the application on X86 processor architecture.
   * Setting this to `GENERIC_ARM`, will run the functions in the application on ARM processor architecture.
   * When set to `GENERIC_X86_ARM`, functions in the application are run on either X86 or ARM processor architecture.
   * Accepted values are:
   * `GENERIC_X86`, `GENERIC_ARM`, `GENERIC_X86_ARM`
   *
   */
  "shape"?: ApplicationSummary.Shape;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)s of the Network Security Groups to add the application to.
   *
   */
  "networkSecurityGroupIds"?: Array<string>;
  "traceConfig"?: model.ApplicationTraceConfig;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * The time the application was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: `2018-09-12T22:47:12.613Z`
* 
    */
  "timeCreated"?: Date;
  /**
   * The time the application was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format.
   * Example: `2018-09-12T22:47:12.613Z`
   *
   */
  "timeUpdated"?: Date;
  "imagePolicyConfig"?: model.ImagePolicyConfig;
}

export namespace ApplicationSummary {
  export enum Shape {
    GenericX86 = "GENERIC_X86",
    GenericArm = "GENERIC_ARM",
    GenericX86Arm = "GENERIC_X86_ARM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ApplicationSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "traceConfig": obj.traceConfig
          ? model.ApplicationTraceConfig.getJsonObj(obj.traceConfig)
          : undefined,

        "imagePolicyConfig": obj.imagePolicyConfig
          ? model.ImagePolicyConfig.getJsonObj(obj.imagePolicyConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApplicationSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "traceConfig": obj.traceConfig
          ? model.ApplicationTraceConfig.getDeserializedJsonObj(obj.traceConfig)
          : undefined,

        "imagePolicyConfig": obj.imagePolicyConfig
          ? model.ImagePolicyConfig.getDeserializedJsonObj(obj.imagePolicyConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}

/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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

export interface UpdateCpeDetails {
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
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
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
    * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the CPE device type. You can provide
* a value if you want to generate CPE device configuration content for IPSec connections
* that use this CPE. For a list of possible values, see
* {@link #listCpeDeviceShapes(ListCpeDeviceShapesRequest) listCpeDeviceShapes}.
* <p>
For more information about generating CPE device configuration content, see:
* <p>
  * {@link #getCpeDeviceConfigContent(GetCpeDeviceConfigContentRequest) getCpeDeviceConfigContent}
*   * {@link #getIpsecCpeDeviceConfigContent(GetIpsecCpeDeviceConfigContentRequest) getIpsecCpeDeviceConfigContent}
*   * {@link #getTunnelCpeDeviceConfigContent(GetTunnelCpeDeviceConfigContentRequest) getTunnelCpeDeviceConfigContent}
*   * {@link #getTunnelCpeDeviceConfig(GetTunnelCpeDeviceConfigRequest) getTunnelCpeDeviceConfig}
* 
    */
  "cpeDeviceShapeId"?: string;
}

export namespace UpdateCpeDetails {
  export function getJsonObj(obj: UpdateCpeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateCpeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

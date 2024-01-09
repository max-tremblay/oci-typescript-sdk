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

/**
 * Defines the security action taken on allowed traffic.
 *
 */
export interface AllowedSecurityAction extends model.SecurityAction {
  "allowedSecurityActionDetails"?: model.AllowedSecurityActionDetails;

  "action": string;
}

export namespace AllowedSecurityAction {
  export function getJsonObj(obj: AllowedSecurityAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.SecurityAction.getJsonObj(obj) as AllowedSecurityAction)),
      ...{
        "allowedSecurityActionDetails": obj.allowedSecurityActionDetails
          ? model.AllowedSecurityActionDetails.getJsonObj(obj.allowedSecurityActionDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const action = "ALLOWED";
  export function getDeserializedJsonObj(
    obj: AllowedSecurityAction,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SecurityAction.getDeserializedJsonObj(obj) as AllowedSecurityAction)),
      ...{
        "allowedSecurityActionDetails": obj.allowedSecurityActionDetails
          ? model.AllowedSecurityActionDetails.getDeserializedJsonObj(
              obj.allowedSecurityActionDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}

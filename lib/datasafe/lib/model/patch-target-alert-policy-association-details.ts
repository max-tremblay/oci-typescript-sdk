/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
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
 * The details used to create associations for target databases and audit policies.
 */
export interface PatchTargetAlertPolicyAssociationDetails {
  /**
   * An array of patch instructions.
   */
  "items": Array<model.PatchInstruction>;
  /**
   * The OCID of the compartment that contains the alerts.
   */
  "compartmentId": string;
}

export namespace PatchTargetAlertPolicyAssociationDetails {
  export function getJsonObj(obj: PatchTargetAlertPolicyAssociationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.PatchInstruction.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PatchTargetAlertPolicyAssociationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.PatchInstruction.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

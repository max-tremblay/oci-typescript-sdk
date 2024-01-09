/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Apply Exadata Fleet Update Action update details.
 *
 */
export interface UpdateApplyActionDetails extends model.UpdateFsuActionDetails {
  "scheduleDetails"?: model.NoneScheduleDetails | model.UpdateStartTimeScheduleDetails;

  "type": string;
}

export namespace UpdateApplyActionDetails {
  export function getJsonObj(obj: UpdateApplyActionDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateFsuActionDetails.getJsonObj(obj) as UpdateApplyActionDetails)),
      ...{
        "scheduleDetails": obj.scheduleDetails
          ? model.UpdateScheduleDetails.getJsonObj(obj.scheduleDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "APPLY";
  export function getDeserializedJsonObj(
    obj: UpdateApplyActionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateFsuActionDetails.getDeserializedJsonObj(obj) as UpdateApplyActionDetails)),
      ...{
        "scheduleDetails": obj.scheduleDetails
          ? model.UpdateScheduleDetails.getDeserializedJsonObj(obj.scheduleDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}

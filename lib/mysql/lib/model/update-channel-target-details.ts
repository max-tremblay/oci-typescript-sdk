/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Parameters detailing how to provision the target for the given Channel.
 */
export interface UpdateChannelTargetDetails {
  "targetType": string;
}

export namespace UpdateChannelTargetDetails {
  export function getJsonObj(obj: UpdateChannelTargetDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "targetType" in obj && obj.targetType) {
      switch (obj.targetType) {
        case "DBSYSTEM":
          return model.UpdateChannelTargetFromDbSystemDetails.getJsonObj(
            <model.UpdateChannelTargetFromDbSystemDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.targetType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateChannelTargetDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "targetType" in obj && obj.targetType) {
      switch (obj.targetType) {
        case "DBSYSTEM":
          return model.UpdateChannelTargetFromDbSystemDetails.getDeserializedJsonObj(
            <model.UpdateChannelTargetFromDbSystemDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.targetType}`);
      }
    }
    return jsonObj;
  }
}

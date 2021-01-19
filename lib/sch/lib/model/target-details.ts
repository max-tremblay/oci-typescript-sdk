/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * An object that represents the target of the flow defined by the service connector.
 * An example target is a stream.
 * For more information about flows defined by service connectors, see
 * [Service Connector Hub Overview](https://docs.cloud.oracle.com/iaas/Content/service-connector-hub/overview.htm).
 *
 */
export interface TargetDetails {
  "kind": string;
}

export namespace TargetDetails {
  export function getJsonObj(obj: TargetDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "notifications":
          return model.NotificationsTargetDetails.getJsonObj(
            <model.NotificationsTargetDetails>(<object>jsonObj),
            true
          );
        case "objectStorage":
          return model.ObjectStorageTargetDetails.getJsonObj(
            <model.ObjectStorageTargetDetails>(<object>jsonObj),
            true
          );
        case "monitoring":
          return model.MonitoringTargetDetails.getJsonObj(
            <model.MonitoringTargetDetails>(<object>jsonObj),
            true
          );
        case "functions":
          return model.FunctionsTargetDetails.getJsonObj(
            <model.FunctionsTargetDetails>(<object>jsonObj),
            true
          );
        case "loggingAnalytics":
          return model.LoggingAnalyticsTargetDetails.getJsonObj(
            <model.LoggingAnalyticsTargetDetails>(<object>jsonObj),
            true
          );
        case "streaming":
          return model.StreamingTargetDetails.getJsonObj(
            <model.StreamingTargetDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.kind);
      }
    }
    return jsonObj;
  }
}

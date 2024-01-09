/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
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
 * Configuration details for the BROWSER monitor type.
 */
export interface BrowserMonitorConfiguration extends model.MonitorConfiguration {
  /**
   * If certificate validation is enabled, then the call will fail in case of certification errors.
   */
  "isCertificateValidationEnabled"?: boolean;
  /**
   * If disabled, auto snapshots are not collected.
   */
  "isDefaultSnapshotEnabled"?: boolean;
  /**
   * Verifies all the search strings present in the response.
   * If any search string is not present in the response, then it will be considered as a failure.
   *
   */
  "verifyTexts"?: Array<model.VerifyText>;
  /**
   * Expected HTTP response codes. For status code range, set values such as 2xx, 3xx.
   *
   */
  "verifyResponseCodes"?: Array<string>;
  "networkConfiguration"?: model.NetworkConfiguration;

  "configType": string;
}

export namespace BrowserMonitorConfiguration {
  export function getJsonObj(obj: BrowserMonitorConfiguration, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitorConfiguration.getJsonObj(obj) as BrowserMonitorConfiguration)),
      ...{
        "verifyTexts": obj.verifyTexts
          ? obj.verifyTexts.map(item => {
              return model.VerifyText.getJsonObj(item);
            })
          : undefined,

        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
  export const configType = "BROWSER_CONFIG";
  export function getDeserializedJsonObj(
    obj: BrowserMonitorConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitorConfiguration.getDeserializedJsonObj(obj) as BrowserMonitorConfiguration)),
      ...{
        "verifyTexts": obj.verifyTexts
          ? obj.verifyTexts.map(item => {
              return model.VerifyText.getDeserializedJsonObj(item);
            })
          : undefined,

        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getDeserializedJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
}

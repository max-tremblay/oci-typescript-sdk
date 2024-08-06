/**
 * Java Management Service Fleets API
 * The APIs for the [Fleet Management](https://docs.oracle.com/en-us/iaas/jms/doc/fleet-management.html) feature of Java Management Service to monitor and manage the usage of Java in your enterprise. Use these APIs to manage fleets, configure managed instances to report to fleets, and gain insights into the Java workloads running on these instances by carrying out basic and advanced features.
 * OpenAPI spec version: 20210610
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
 * An summary of a announcement on Console Overview page
 */
export interface AnnouncementSummary {
  /**
   * Unique id of the announcement Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "key": number;
  /**
   * Summary text of the announcement
   */
  "summary": string;
  /**
   * URL to the announcement web page
   */
  "url": string;
  /**
   * Date time on which the announcement was released
   */
  "timeReleased": Date;
}

export namespace AnnouncementSummary {
  export function getJsonObj(obj: AnnouncementSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnnouncementSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

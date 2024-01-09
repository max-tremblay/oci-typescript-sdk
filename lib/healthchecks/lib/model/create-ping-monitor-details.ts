/**
 * Health Checks API
 * API for the Health Checks service. Use this API to manage endpoint probes and monitors.
For more information, see
[Overview of the Health Checks Service](/iaas/Content/HealthChecks/Concepts/healthchecks.htm).

 * OpenAPI spec version: 20180501
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
 * The request body used to create a Ping monitor.
 */
export interface CreatePingMonitorDetails {
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * A list of targets (hostnames or IP addresses) of the probe.
   */
  "targets": Array<string>;
  /**
   * A list of names of vantage points from which to execute the probe.
   */
  "vantagePointNames"?: Array<string>;
  /**
   * The port on which to probe endpoints. If unspecified, probes will use the
   * default port of their protocol.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The probe timeout in seconds. Valid values: 10, 20, 30, and 60.
   * The probe timeout must be less than or equal to `intervalInSeconds` for monitors.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeoutInSeconds"?: number;
  "protocol": model.PingProbeProtocol;
  /**
   * A user-friendly and mutable name suitable for display in a user interface.
   */
  "displayName": string;
  /**
   * The monitor interval in seconds. Valid values: 10, 30, and 60.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "intervalInSeconds": number;
  /**
   * Enables or disables the monitor. Set to 'true' to launch monitoring.
   *
   */
  "isEnabled"?: boolean;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace.  For more information,
   * see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreatePingMonitorDetails {
  export function getJsonObj(obj: CreatePingMonitorDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePingMonitorDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

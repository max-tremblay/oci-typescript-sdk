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
 * List of proxy properties to be configured in net.properties file.
 *
 */
export interface Proxies {
  /**
   * Sets \"java.net.useSystemProxies=true\" in net.properties when they exist.
   *
   */
  "useSystemProxies"?: boolean;
  /**
   * Http host to be set in net.properties file.
   *
   */
  "httpProxyHost"?: string;
  /**
   * Http port number to be set in net.properties file.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "httpProxyPort"?: number;
  /**
   * Https host to be set in net.properties file.
   *
   */
  "httpsProxyHost"?: string;
  /**
   * Https port number to be set in net.properties file.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "httpsProxyPort"?: number;
  /**
   * Ftp host to be set in net.properties file.
   *
   */
  "ftpProxyHost"?: string;
  /**
   * Ftp port number to be set in net.properties file.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ftpProxyPort"?: number;
  /**
   * Socks host to be set in net.properties file.
   *
   */
  "socksProxyHost"?: string;
  /**
   * Socks port number to be set in net.properties file.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "socksProxyPort"?: number;
}

export namespace Proxies {
  export function getJsonObj(obj: Proxies): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Proxies): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

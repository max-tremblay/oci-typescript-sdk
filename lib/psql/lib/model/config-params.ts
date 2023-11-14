/**
 * PGSQL Control Plane API
 * A description of the PGSQL Control Plane API
 * OpenAPI spec version: 20220915
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * DB Configuration
 */
export interface ConfigParams {
  /**
   * Key is the configuration key.
   */
  "configKey": string;
  /**
   * Default value
   */
  "defaultConfigValue": string;
  /**
   * User selected configuration value
   */
  "overridenConfigValue"?: string;
  /**
   * Range or list of allowed values
   */
  "allowedValues": string;
  /**
   * If true, modfying this configuration value will requires restart.
   */
  "isRestartRequired": boolean;
  /**
   * Describes about the Datatype value.
   */
  "dataType": string;
  /**
   * This flags tells whether the value is overridable or not.
   */
  "isOverridable": boolean;
  /**
   * Details about the Postgresql params.
   */
  "description": string;
}

export namespace ConfigParams {
  export function getJsonObj(obj: ConfigParams): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigParams): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

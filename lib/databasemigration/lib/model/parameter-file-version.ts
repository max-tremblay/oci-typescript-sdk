/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
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
 * A parameter file detatails
 */
export interface ParameterFileVersion {
  /**
   * A unique name associated with the current migration/job and extract/replicat name
   */
  "name": string;
  /**
   * Describes the current parameter file version
   */
  "description"?: string;
  /**
   * Return boolean true/false for the currently in-use parameter file (factory or a versioned file)
   */
  "isCurrent": boolean;
  /**
   * Return true/false for whether the parameter file is oracle provided (Factory)
   */
  "isFactory": boolean;
  /**
   * Indicator of Parameter File 'kind' (for an EXTRACT or a REPLICAT)
   */
  "kind": model.JobParameterFileVersionKind;
  /**
   * The time when this parameter file was applied on the process
   *
   */
  "timeCreated": Date;
  /**
   * The content in base64 encoded character string containing the value of the parameter file
   */
  "content": string;
}

export namespace ParameterFileVersion {
  export function getJsonObj(obj: ParameterFileVersion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ParameterFileVersion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

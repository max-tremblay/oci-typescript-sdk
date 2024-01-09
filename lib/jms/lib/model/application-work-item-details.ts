/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
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
 * The work item details with JFR related information.
 */
export interface ApplicationWorkItemDetails extends model.WorkItemDetails {
  /**
   * The unique key of the application of the JFR.
   */
  "applicationKey": string;
  /**
   * The unique key of the application installation of the JFR.
   */
  "applicationInstallationKey"?: string;
  /**
   * The application name.
   */
  "applicationName": string;
  /**
   * The full path on which application installation was detected.
   */
  "applicationInstallationPath"?: string;

  "kind": string;
}

export namespace ApplicationWorkItemDetails {
  export function getJsonObj(obj: ApplicationWorkItemDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WorkItemDetails.getJsonObj(obj) as ApplicationWorkItemDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "APPLICATION";
  export function getDeserializedJsonObj(
    obj: ApplicationWorkItemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WorkItemDetails.getDeserializedJsonObj(obj) as ApplicationWorkItemDetails)),
      ...{}
    };

    return jsonObj;
  }
}

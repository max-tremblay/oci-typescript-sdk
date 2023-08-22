/**
 * Compute Cloud@Customer API
 * Use the Compute Cloud@Customer API to manage Compute Cloud@Customer Infrastructure deployments
and scheduled upgrades. For more information see 
[Compute Cloud@Customer documentation](/iaas/Content/compute-cloud-at-customer/home.htm).

 * OpenAPI spec version: 20221208
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
 * The configuration details for creating Compute Cloud@Customer infrastructure.
 */
export interface CreateCccInfrastructureDetails {
  /**
   * The name that will be used to display the Compute Cloud@Customer infrastructure
   * in the Oracle Cloud Infrastructure console. Does not have to be unique and can be changed.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * A mutable client-meaningful text description of the Compute Cloud@Customer infrastructure.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * The compartment [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) associated with
   * the infrastructure.
   *
   */
  "compartmentId": string;
  /**
   * Identifier for network subnet that will be used to communicate with Compute Cloud@Customer infrastructure.
   */
  "subnetId": string;
  /**
   * The current connection state of the Compute Cloud@Customer infrastructure. This value
   * will default to REJECT if the value is not provided. The only valid value at creation
   * time is REJECT.
   *
   */
  "connectionState"?: string;
  /**
   * A message describing the current connection state in more detail.
   *
   */
  "connectionDetails"?: string;
  /**
   * Schedule used for upgrades. If no schedule is associated with the infrastructure,
   * it can be upgraded at any time.
   *
   */
  "cccUpgradeScheduleId"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateCccInfrastructureDetails {
  export function getJsonObj(obj: CreateCccInfrastructureDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateCccInfrastructureDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

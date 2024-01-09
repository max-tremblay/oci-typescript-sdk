/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20230401
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
 * Base subscription type, which carries shared properties for any subscription version.
 */
export interface Subscription {
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the subscription.
   */
  "id": string;
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the owning compartment. Always a tenancy OCID.
   */
  "compartmentId": string;
  /**
   * The type of subscription, such as 'UCM', 'SAAS', 'ERP', 'CRM'.
   */
  "serviceName": string;
  /**
   * The date and time of creation, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeCreated": Date;
  /**
   * The date and time of update, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeUpdated": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };

  "entityVersion": string;
}

export namespace Subscription {
  export function getJsonObj(obj: Subscription): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entityVersion" in obj && obj.entityVersion) {
      switch (obj.entityVersion) {
        case "V1":
          return model.ClassicSubscription.getJsonObj(
            <model.ClassicSubscription>(<object>jsonObj),
            true
          );
        case "V2":
          return model.CloudSubscription.getJsonObj(
            <model.CloudSubscription>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entityVersion}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Subscription): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entityVersion" in obj && obj.entityVersion) {
      switch (obj.entityVersion) {
        case "V1":
          return model.ClassicSubscription.getDeserializedJsonObj(
            <model.ClassicSubscription>(<object>jsonObj),
            true
          );
        case "V2":
          return model.CloudSubscription.getDeserializedJsonObj(
            <model.CloudSubscription>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entityVersion}`);
      }
    }
    return jsonObj;
  }
}

/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The information about new monitored resource to be created.
 * The combination of monitored resource name and type should be unique across tenancy.
 *
 */
export interface CreateMonitoredResourceDetails {
  /**
   * Monitored Resource Name.
   *
   */
  "name": string;
  /**
   * Monitored resource display name.
   */
  "displayName"?: string;
  /**
   * Monitored Resource Type.
   *
   */
  "type": string;
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "compartmentId": string;
  /**
   * Host name of the monitored resource.
   *
   */
  "hostName"?: string;
  /**
   * External resource is any OCI resource identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   * which is not a Stack Monitoring service resource.
   * Currently supports only OCI compute instance.
   *
   */
  "externalId"?: string;
  /**
   * Management Agent Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "managementAgentId"?: string;
  /**
   * Time zone in the form of tz database canonical zone ID. Specifies the preference with
   * a value that uses the IANA Time Zone Database format (x-obmcs-time-zone).
   * For example - America/Los_Angeles
   *
   */
  "resourceTimeZone"?: string;
  /**
   * License edition of the monitored resource. If not provided
   * the default license type for the compartment will be used.
   *
   */
  "license"?: model.LicenseType;
  /**
   * List of monitored resource properties.
   *
   */
  "properties"?: Array<model.MonitoredResourceProperty>;
  "databaseConnectionDetails"?: model.ConnectionDetails;
  "credentials"?:
    | model.PreExistingCredentials
    | model.EncryptedCredentials
    | model.PlainTextCredentials;
  "aliases"?: model.MonitoredResourceAliasCredential;
  /**
   * List of MonitoredResourceCredentials. This property complements the existing
   * \"credentials\" property by allowing user to specify more than one credential.
   * If both \"credential\" and \"additionalCredentials\" are specified, union of the
   * values is used as list of credentials applicable for this resource.
   * If any duplicate found in the combined list of \"credentials\" and \"additionalCredentials\",
   * an error will be thrown.
   *
   */
  "additionalCredentials"?: Array<model.MonitoredResourceCredential>;
  /**
   * List of MonitoredResourceAliasCredentials. This property complements the existing
   * \"aliases\" property by allowing user to specify more than one credential alias.
   * If both \"aliases\" and \"additionalAliases\" are specified, union of the
   * values is used as list of aliases applicable for this resource.
   * If any duplicate found in the combined list of \"alias\" and \"additionalAliases\",
   * an error will be thrown.
   *
   */
  "additionalAliases"?: Array<model.MonitoredResourceAliasCredential>;
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

export namespace CreateMonitoredResourceDetails {
  export function getJsonObj(obj: CreateMonitoredResourceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.MonitoredResourceProperty.getJsonObj(item);
            })
          : undefined,
        "databaseConnectionDetails": obj.databaseConnectionDetails
          ? model.ConnectionDetails.getJsonObj(obj.databaseConnectionDetails)
          : undefined,
        "credentials": obj.credentials
          ? model.MonitoredResourceCredential.getJsonObj(obj.credentials)
          : undefined,
        "aliases": obj.aliases
          ? model.MonitoredResourceAliasCredential.getJsonObj(obj.aliases)
          : undefined,
        "additionalCredentials": obj.additionalCredentials
          ? obj.additionalCredentials.map(item => {
              return model.MonitoredResourceCredential.getJsonObj(item);
            })
          : undefined,
        "additionalAliases": obj.additionalAliases
          ? obj.additionalAliases.map(item => {
              return model.MonitoredResourceAliasCredential.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateMonitoredResourceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.MonitoredResourceProperty.getDeserializedJsonObj(item);
            })
          : undefined,
        "databaseConnectionDetails": obj.databaseConnectionDetails
          ? model.ConnectionDetails.getDeserializedJsonObj(obj.databaseConnectionDetails)
          : undefined,
        "credentials": obj.credentials
          ? model.MonitoredResourceCredential.getDeserializedJsonObj(obj.credentials)
          : undefined,
        "aliases": obj.aliases
          ? model.MonitoredResourceAliasCredential.getDeserializedJsonObj(obj.aliases)
          : undefined,
        "additionalCredentials": obj.additionalCredentials
          ? obj.additionalCredentials.map(item => {
              return model.MonitoredResourceCredential.getDeserializedJsonObj(item);
            })
          : undefined,
        "additionalAliases": obj.additionalAliases
          ? obj.additionalAliases.map(item => {
              return model.MonitoredResourceAliasCredential.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

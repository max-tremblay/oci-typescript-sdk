/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Represents the metadata description of a database used by deployments in the same compartment.
 *
 */
export interface DatabaseRegistration {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the databaseRegistration being
   * referenced.
   *
   */
  "id": string;
  /**
   * An object's Display Name.
   *
   */
  "displayName": string;
  /**
   * Metadata about this specific object.
   *
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment being referenced.
   *
   */
  "compartmentId": string;
  /**
   * The time the resource was created. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as `2016-08-25T21:10:29.600Z`.
   *
   */
  "timeCreated"?: Date;
  /**
   * The time the resource was last updated. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as `2016-08-25T21:10:29.600Z`.
   *
   */
  "timeUpdated"?: Date;
  /**
   * Possible lifecycle states.
   *
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Describes the object's current state in detail. For example, it can be used to provide
   * actionable information for a resource in a Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
    * A simple key-value pair that is applied without any predefined name, type, or scope. Exists
* for cross-compatibility only.
* <p>
Example: `{\"bar-key\": \"value\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Tags defined for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A three-label Fully Qualified Domain Name (FQDN) for a resource.
   *
   */
  "fqdn": string;
  /**
   * The private IP address in the customer's VCN of the customer's endpoint, typically a
   * database.
   *
   */
  "ipAddress": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the target subnet of the dedicated connection.
   *
   */
  "subnetId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database being referenced.
   *
   */
  "databaseId"?: string;
  /**
   * A Private Endpoint IP address created in the customer's subnet.
   * A customer database can expect network traffic initiated by GoldenGate Service from this IP address.
   * It can also send network traffic to this IP address, typically in response to requests from GoldenGate Service.
   * The customer may use this IP address in Security Lists or Network Security Groups (NSG) as needed.
   *
   */
  "rcePrivateIp"?: string;
  /**
    * The system tags associated with this resource, if any. The system tags are set by Oracle
* Cloud Infrastructure services. Each key is predefined and scoped to namespaces.  For more
* information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{orcl-cloud: {free-tier-retain: true}}`
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The username Oracle GoldenGate uses to connect the associated system of the given technology.
   * This username must already exist and be available by the system/application to be connected to
   * and must conform to the case sensitivty requirments defined in it.
   *
   */
  "username": string;
  /**
   * Connect descriptor or Easy Connect Naming method used to connect to a database.
   *
   */
  "connectionString"?: string;
  /**
   * The mode of the database connection session to be established by the data client.
   * 'REDIRECT' - for a RAC database, 'DIRECT' - for a non-RAC database.
   * Connection to a RAC database involves a redirection received from the SCAN listeners
   * to the database node to connect to. By default the mode would be DIRECT.
   *
   */
  "sessionMode"?: DatabaseRegistration.SessionMode;
  /**
   * Credential store alias.
   *
   */
  "aliasName": string;
  /**
   * Refers to the customer's vault OCID.
   * If provided, it references a vault where GoldenGate can manage secrets. Customers must add policies to permit GoldenGate
   * to manage secrets contained within this vault.
   *
   */
  "vaultId"?: string;
  /**
   * Refers to the customer's master key OCID.
   * If provided, it references a key to manage secrets. Customers must add policies to permit GoldenGate to use this key.
   *
   */
  "keyId"?: string;
  /**
   * The OCID of the compartment where the GoldenGate Secret will be created.
   * If provided, it references a key to manage secrets. Customers must add policies to permit GoldenGate to use this key.
   *
   */
  "secretCompartmentId"?: string;
  /**
   * The OCID of the customer's GoldenGate Service Secret.
   * If provided, it references a key that customers will be required to ensure the policies are established
   * to permit GoldenGate to use this Secret.
   *
   */
  "secretId"?: string;
}

export namespace DatabaseRegistration {
  export enum SessionMode {
    Direct = "DIRECT",
    Redirect = "REDIRECT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DatabaseRegistration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseRegistration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

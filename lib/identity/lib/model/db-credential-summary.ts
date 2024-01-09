/**
 * Identity and Access Management Service API
 * Use the Identity and Access Management Service API to manage users, groups, identity domains, compartments, policies, tagging, and limits. For information about managing users, groups, compartments, and policies, see [Identity and Access Management (without identity domains)](/iaas/Content/Identity/Concepts/overview.htm). For information about tagging and service limits, see [Tagging](/iaas/Content/Tagging/Concepts/taggingoverview.htm) and [Service Limits](/iaas/Content/General/Concepts/servicelimits.htm). For information about creating, modifying, and deleting identity domains, see [Identity and Access Management (with identity domains)](/iaas/Content/Identity/home.htm).
 * OpenAPI spec version: 20160918
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
 * As the name suggests, an `DbCredentialSummary` object contains information about an `DbCredential`.
 * The DB credential is used for DB authentication with
 * the [DB Service].
 *
 */
export interface DbCredentialSummary {
  /**
   * The OCID of the DB credential.
   */
  "id"?: string;
  /**
   * The OCID of the user the DB credential belongs to.
   */
  "userId"?: string;
  /**
    * The description you assign to the DB credential. Does not have to be unique, and it's changeable.
* <p>
(For tenancies that support identity domains) You can have an empty description.
* 
    */
  "description"?: string;
  /**
    * Date and time the `DbCredential` object was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
    * Date and time when this credential will expire, in the format defined by RFC3339.
* Null if it never expires.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeExpires"?: Date;
  /**
   * The credential's current state. After creating a DB credential, make sure its `lifecycleState` changes from
   * CREATING to ACTIVE before using it.
   *
   */
  "lifecycleState"?: string;
}

export namespace DbCredentialSummary {
  export function getJsonObj(obj: DbCredentialSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbCredentialSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

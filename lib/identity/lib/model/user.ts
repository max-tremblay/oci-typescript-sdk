/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
* An individual employee or system that needs to manage or use your company's Oracle Cloud Infrastructure
* resources. Users might need to launch instances, manage remote disks, work with your cloud network, etc. Users
* have one or more IAM Service credentials ({@link ApiKey},
* {@link UIPassword}, {@link SwiftPassword} and
* {@link AuthToken}).
* For more information, see [User Credentials](https://docs.cloud.oracle.com/Content/Identity/Concepts/usercredentials.htm)). End users of your
* application are not typically IAM Service users. For conceptual information about users and other IAM Service
* components, see [Overview of the IAM Service](https://docs.cloud.oracle.com/Content/Identity/Concepts/overview.htm).
* <p>
These users are created directly within the Oracle Cloud Infrastructure system, via the IAM service.
* They are different from *federated users*, who authenticate themselves to the Oracle Cloud Infrastructure
* Console via an identity provider. For more information, see
* [Identity Providers and Federation](https://docs.cloud.oracle.com/Content/Identity/Concepts/federation.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access,
* see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values
* using the API.
* 
*/
export interface User {
  /**
   * The OCID of the user.
   */
  "id": string;
  /**
   * The OCID of the tenancy containing the user.
   */
  "compartmentId": string;
  /**
   * The name you assign to the user during creation. This is the user's login for the Console.
   * The name must be unique across all users in the tenancy and cannot be changed.
   *
   */
  "name": string;
  /**
   * The description you assign to the user. Does not have to be unique, and it's changeable.
   */
  "description": string;
  /**
   * The email address you assign to the user.
   * The email address must be unique across all users in the tenancy.
   *
   */
  "email"?: string;
  /**
   * Whether the email address has been validated.
   */
  "emailVerified"?: boolean;
  /**
   * The OCID of the `IdentityProvider` this user belongs to.
   */
  "identityProviderId"?: string;
  /**
   * Identifier of the user in the identity provider
   */
  "externalIdentifier"?: string;
  /**
    * Date and time the user was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The user's current state. After creating a user, make sure its `lifecycleState` changes from CREATING to
   * ACTIVE before using it.
   *
   */
  "lifecycleState": User.LifecycleState;
  /**
    * Returned only if the user's `lifecycleState` is INACTIVE. A 16-bit value showing the reason why the user
* is inactive:
* <p>
- bit 0: SUSPENDED (reserved for future use)
* - bit 1: DISABLED (reserved for future use)
* - bit 2: BLOCKED (the user has exceeded the maximum number of failed login attempts for the Console)
* 
    */
  "inactiveStatus"?: number;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
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
  "capabilities"?: model.UserCapabilities;
  /**
   * Flag indicates if MFA has been activated for the user.
   */
  "isMfaActivated": boolean;
  /**
    * The date and time of when the user most recently logged in the
* format defined by RFC3339 (ex. `2016-08-25T21:10:29.600Z`).
* If there is no login history, this field is null.
* <p>
For illustrative purposes, suppose we have a user who has logged in
* at July 1st, 2020 at 1200 PST and logged out 30 minutes later.
* They then login again on July 2nd, 2020 at 1500 PST.
* <p>
Their previousSuccessfulLoginTime would be `2020-07-01:19:00.000Z`.
* <p>
Their lastSuccessfulLoginTime would be `2020-07-02:22:00.000Z`.
* 
    */
  "lastSuccessfulLoginTime"?: Date;
  /**
    * The date and time of when the user most recently logged in the
* format defined by RFC3339 (ex. `2016-08-25T21:10:29.600Z`).
* If there is no login history, this field is null.
* <p>
For illustrative purposes, suppose we have a user who has logged in
* at July 1st, 2020 at 1200 PST and logged out 30 minutes later.
* They then login again on July 2nd, 2020 at 1500 PST.
* <p>
Their previousSuccessfulLoginTime would be `2020-07-01:19:00.000Z`.
* <p>
Their lastSuccessfulLoginTime would be `2020-07-02:22:00.000Z`.
* 
    */
  "previousSuccessfulLoginTime"?: Date;
}

export namespace User {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: User): object {
    const jsonObj = {
      ...obj,
      ...{
        "capabilities": obj.capabilities
          ? model.UserCapabilities.getJsonObj(obj.capabilities)
          : undefined
      }
    };

    return jsonObj;
  }
}

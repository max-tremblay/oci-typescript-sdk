/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm).
Use this pattern to construct endpoints for identity domains: `https://<domainURL>/admin/v1/`. See [Finding an Identity Domain URL](https://docs.oracle.com/en-us/iaas/Content/Identity/api-getstarted/locate-identity-domain-url.htm) to locate the domain URL you need.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
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
 * Schema for AccountMgmtInfo resource.
 */
export interface AccountMgmtInfo {
  /**
   * Unique identifier for the SCIM Resource as defined by the Service Provider. Each representation of the Resource MUST include a non-empty id value. This identifier MUST be unique across the Service Provider's entire set of Resources. It MUST be a stable, non-reassignable identifier that does not change when the same Resource is returned in subsequent requests. The value of the id attribute is always issued by the Service Provider and MUST never be specified by the Service Consumer. bulkId: is a reserved keyword and MUST NOT be used in the unique identifier.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: always
   *  - type: string
   *  - uniqueness: global
   */
  "id"?: string;
  /**
   * Unique OCI identifier for the SCIM Resource.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: global
   */
  "ocid"?: string;
  /**
   * REQUIRED. The schemas attribute is an array of Strings which allows introspection of the supported schema version for a SCIM representation as well any schema extensions supported by that representation. Each String value must be a unique URI. This specification defines URIs for User, Group, and a standard \\\"enterprise\\\" extension. All representations of SCIM schema MUST include a non-zero value array with value(s) of the URIs supported by that representation. Duplicate values MUST NOT be included. Value order is not specified and MUST not impact behavior.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "schemas": Array<string>;
  "meta"?: model.Meta;
  "idcsCreatedBy"?: model.IdcsCreatedBy;
  "idcsLastModifiedBy"?: model.IdcsLastModifiedBy;
  /**
   * Each value of this attribute specifies an operation that only an internal client may perform on this particular resource.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "idcsPreventedOperations"?: Array<AccountMgmtInfo.IdcsPreventedOperations>;
  /**
   * A list of tags on this resource.
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [key, value]
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: request
   *  - type: complex
   *  - uniqueness: none
   */
  "tags"?: Array<model.Tags>;
  /**
   * A boolean flag indicating this resource in the process of being deleted. Usually set to true when synchronous deletion of the resource would take too long.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "deleteInProgress"?: boolean;
  /**
   * The release number when the resource was upgraded.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "idcsLastUpgradedInRelease"?: string;
  /**
   * OCI Domain Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "domainOcid"?: string;
  /**
   * OCI Compartment Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "compartmentOcid"?: string;
  /**
   * OCI Tenant Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "tenancyOcid"?: string;
  /**
   * Unique identifier of the Account
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "uid"?: string;
  /**
   * Name of the Account
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "name"?: string;
  /**
   * Unique key for this AccountMgmtInfo, which is used to prevent duplicate AccountMgmtInfo resources. Key is composed of a subset of app, owner and accountType.
   * <p>
   **Added In:** 18.1.2
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: server
   */
  "compositeKey"?: string;
  /**
   * If true, the account is activated
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "active"?: boolean;
  /**
   * Type of Account
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "accountType"?: string;
  /**
   * If true, indicates that this managed object is an account, which is an identity that represents a user in the context of a specific application
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "isAccount"?: boolean;
  /**
   * If true, this account has been marked as a favorite of the User who owns it
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "favorite"?: boolean;
  /**
   * If true, the operation will not be performed on the target
   * <p>
   **Added In:** 17.4.6
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "doNotPerformActionOnTarget"?: boolean;
  /**
   * If true, a back-fill grant will not be created for a connected managed app as part of account creation.
   * <p>
   **Added In:** 18.2.6
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "doNotBackFillGrants"?: boolean;
  /**
   * Last accessed timestamp of an application
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: dateTime
   *  - uniqueness: none
   */
  "lastAccessed"?: string;
  /**
   * Last sync timestamp of the account
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: dateTime
   *  - uniqueness: none
   */
  "syncTimestamp"?: string;
  /**
   * Last recorded sync situation for the account
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "syncSituation"?: AccountMgmtInfo.SyncSituation;
  /**
   * Last recorded sync response for the account
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "syncResponse"?: string;
  /**
   * If true, then the response to the account creation operation on a connected managed app returns a preview of the account data that is evaluated by the attribute value generation policy. Note that an account will not be created on the target application when this attribute is set to true.
   * <p>
   **Added In:** 18.2.6
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "previewOnly"?: boolean;
  /**
   * The context in which the operation is performed on the account.
   * <p>
   **Added In:** 19.1.4
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "operationContext"?: AccountMgmtInfo.OperationContext;
  "objectClass"?: model.AccountMgmtInfoObjectClass;
  "resourceType"?: model.AccountMgmtInfoResourceType;
  /**
   * Matching owning users of the account
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [value]
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: complex
   *  - uniqueness: none
   */
  "matchingOwners"?: Array<model.AccountMgmtInfoMatchingOwners>;
  "userWalletArtifact"?: model.AccountMgmtInfoUserWalletArtifact;
  "app": model.AccountMgmtInfoApp;
  "owner"?: model.AccountMgmtInfoOwner;
}

export namespace AccountMgmtInfo {
  export enum IdcsPreventedOperations {
    Replace = "replace",
    Update = "update",
    Delete = "delete",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SyncSituation {
    Found = "Found",
    Matched = "Matched",
    Unmatched = "Unmatched",
    Lost = "Lost",
    Disputed = "Disputed",
    Confirmed = "Confirmed",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OperationContext {
    LifeCycleEvent = "LifeCycleEvent",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AccountMgmtInfo): object {
    const jsonObj = {
      ...obj,
      ...{
        "meta": obj.meta ? model.Meta.getJsonObj(obj.meta) : undefined,
        "idcsCreatedBy": obj.idcsCreatedBy
          ? model.IdcsCreatedBy.getJsonObj(obj.idcsCreatedBy)
          : undefined,
        "idcsLastModifiedBy": obj.idcsLastModifiedBy
          ? model.IdcsLastModifiedBy.getJsonObj(obj.idcsLastModifiedBy)
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tags.getJsonObj(item);
            })
          : undefined,

        "objectClass": obj.objectClass
          ? model.AccountMgmtInfoObjectClass.getJsonObj(obj.objectClass)
          : undefined,
        "resourceType": obj.resourceType
          ? model.AccountMgmtInfoResourceType.getJsonObj(obj.resourceType)
          : undefined,
        "matchingOwners": obj.matchingOwners
          ? obj.matchingOwners.map(item => {
              return model.AccountMgmtInfoMatchingOwners.getJsonObj(item);
            })
          : undefined,
        "userWalletArtifact": obj.userWalletArtifact
          ? model.AccountMgmtInfoUserWalletArtifact.getJsonObj(obj.userWalletArtifact)
          : undefined,
        "app": obj.app ? model.AccountMgmtInfoApp.getJsonObj(obj.app) : undefined,
        "owner": obj.owner ? model.AccountMgmtInfoOwner.getJsonObj(obj.owner) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AccountMgmtInfo): object {
    const jsonObj = {
      ...obj,
      ...{
        "meta": obj.meta ? model.Meta.getDeserializedJsonObj(obj.meta) : undefined,
        "idcsCreatedBy": obj.idcsCreatedBy
          ? model.IdcsCreatedBy.getDeserializedJsonObj(obj.idcsCreatedBy)
          : undefined,
        "idcsLastModifiedBy": obj.idcsLastModifiedBy
          ? model.IdcsLastModifiedBy.getDeserializedJsonObj(obj.idcsLastModifiedBy)
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tags.getDeserializedJsonObj(item);
            })
          : undefined,

        "objectClass": obj.objectClass
          ? model.AccountMgmtInfoObjectClass.getDeserializedJsonObj(obj.objectClass)
          : undefined,
        "resourceType": obj.resourceType
          ? model.AccountMgmtInfoResourceType.getDeserializedJsonObj(obj.resourceType)
          : undefined,
        "matchingOwners": obj.matchingOwners
          ? obj.matchingOwners.map(item => {
              return model.AccountMgmtInfoMatchingOwners.getDeserializedJsonObj(item);
            })
          : undefined,
        "userWalletArtifact": obj.userWalletArtifact
          ? model.AccountMgmtInfoUserWalletArtifact.getDeserializedJsonObj(obj.userWalletArtifact)
          : undefined,
        "app": obj.app ? model.AccountMgmtInfoApp.getDeserializedJsonObj(obj.app) : undefined,
        "owner": obj.owner
          ? model.AccountMgmtInfoOwner.getDeserializedJsonObj(obj.owner)
          : undefined
      }
    };

    return jsonObj;
  }
}

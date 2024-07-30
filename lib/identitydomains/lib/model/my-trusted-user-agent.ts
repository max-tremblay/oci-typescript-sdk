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
 * This schema defines the attributes of Trusted User Agents owned by users. Multi-Factor Authentication uses Trusted User Agents to authenticate users.  A User Agent is software application that a user uses to issue requests.\r
 *    For example, a User Agent could be a particular browser (possibly one of several executing on a desktop or laptop) or a particular mobile application (again, one of several executing on a particular mobile device). \r
 *    A User Agent is trusted once the Multi-Factor Authentication has verified it in some way.
 */
export interface MyTrustedUserAgent {
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
  "idcsPreventedOperations"?: Array<MyTrustedUserAgent.IdcsPreventedOperations>;
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
   * The name of the User Agent that the user wants the system to trust and to use in Multi-Factor Authentication.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: immutable
   *  - idcsRequiresWriteForAccessFlows: true
   *  - required: true
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "name": string;
  /**
   * Trust token for the user agent. This is a random string value that will be updated whenever a token that has been issued is verified successfully.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - idcsSensitive: none
   *  - multiValued: false
   *  - mutability: readOnly
   *  - idcsRequiresWriteForAccessFlows: true
   *  - required: true
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "trustToken": string;
  /**
   * Trust token issued geo-location.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: immutable
   *  - idcsRequiresWriteForAccessFlows: true
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "location"?: string;
  /**
   * User agent platform for which the trust token has been issued.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - idcsRequiresWriteForAccessFlows: true
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "platform"?: string;
  /**
   * Validation period of the trust token.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - idcsRequiresWriteForAccessFlows: true
   *  - required: false
   *  - returned: default
   *  - type: dateTime
   *  - uniqueness: none
   */
  "expiryTime"?: string;
  /**
   * Indicates when this token was used lastime.
   * <p>
   **Added In:** 2111190457
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - idcsRequiresWriteForAccessFlows: true
   *  - required: false
   *  - returned: default
   *  - type: dateTime
   *  - uniqueness: none
   */
  "lastUsedOn"?: string;
  /**
   * The token type being created. This token is used as trusted and kmsi token.
   * <p>
   **Added In:** 2111190457
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - idcsRequiresWriteForAccessFlows: true
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "tokenType"?: MyTrustedUserAgent.TokenType;
  /**
   * Trusted 2FA Factors
   * <p>
   **Added In:** 19.2.1
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsCompositeKey: [type]
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: complex
   */
  "trustedFactors"?: Array<model.MyTrustedUserAgentTrustedFactors>;
  "user": model.MyTrustedUserAgentUser;
}

export namespace MyTrustedUserAgent {
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

  export enum TokenType {
    Kmsi = "KMSI",
    Trusted = "TRUSTED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MyTrustedUserAgent): object {
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

        "trustedFactors": obj.trustedFactors
          ? obj.trustedFactors.map(item => {
              return model.MyTrustedUserAgentTrustedFactors.getJsonObj(item);
            })
          : undefined,
        "user": obj.user ? model.MyTrustedUserAgentUser.getJsonObj(obj.user) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MyTrustedUserAgent): object {
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

        "trustedFactors": obj.trustedFactors
          ? obj.trustedFactors.map(item => {
              return model.MyTrustedUserAgentTrustedFactors.getDeserializedJsonObj(item);
            })
          : undefined,
        "user": obj.user ? model.MyTrustedUserAgentUser.getDeserializedJsonObj(obj.user) : undefined
      }
    };

    return jsonObj;
  }
}

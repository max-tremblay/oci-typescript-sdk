/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
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
 * Federation trusted partner Identity Provider
 */
export interface IdentityProvider {
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
  "idcsPreventedOperations"?: Array<IdentityProvider.IdcsPreventedOperations>;
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
   * An identifier for the Resource as defined by the Service Consumer. The externalId may simplify identification of the Resource between Service Consumer and Service Provider by allowing the Consumer to refer to the Resource with its own identifier, obviating the need to store a local mapping between the local identifier of the Resource and the identifier used by the Service Provider. Each Resource MAY include a non-empty externalId value. The value of the externalId attribute is always issued by the Service Consumer and can never be specified by the Service Provider. The Service Provider MUST always interpret the externalId as scoped to the Service Consumer's tenant.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "externalId"?: string;
  /**
   * Unique name of the trusted Identity Provider.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: always
   *  - type: string
   *  - uniqueness: server
   */
  "partnerName": string;
  /**
   * Description
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
  "description"?: string;
  /**
   * Metadata
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "metadata"?: string;
  /**
   * Provider ID
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: server
   */
  "partnerProviderId"?: string;
  /**
   * The alternate Provider ID to be used as the Oracle Identity Cloud Service providerID (instead of the one in SamlSettings) when interacting with this IdP.
   * <p>
   **Added In:** 19.2.1
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "tenantProviderId"?: string;
  /**
   * Succinct ID
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: server
   */
  "succinctId"?: string;
  /**
   * Identity Provider SSO URL
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
  "idpSsoUrl"?: string;
  /**
   * Logout request URL
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
  "logoutRequestUrl"?: string;
  /**
   * Logout response URL
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
  "logoutResponseUrl"?: string;
  /**
   * Signing certificate
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "signingCertificate"?: string;
  /**
   * Encryption certificate
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "encryptionCertificate"?: string;
  /**
   * Default authentication request name ID format.
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
  "nameIdFormat"?: string;
  /**
   * Set to true to include the signing certificate in the signature.
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
  "includeSigningCertInSignature"?: boolean;
  /**
   * HTTP binding to use for authentication requests.
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
  "authnRequestBinding"?: IdentityProvider.AuthnRequestBinding;
  /**
   * HTTP binding to use for logout.
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
  "logoutBinding"?: IdentityProvider.LogoutBinding;
  /**
   * Set to true to enable logout.
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
  "logoutEnabled"?: boolean;
  /**
   * Signature hash algorithm.
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
  "signatureHashAlgorithm"?: IdentityProvider.SignatureHashAlgorithm;
  /**
   * Set to true to indicate Partner enabled.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "enabled": boolean;
  /**
   * Identity Provider Icon URL.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "iconUrl"?: string;
  /**
   * Set to true to indicate whether to show IdP in login page or not.
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
  "shownOnLoginPage"?: boolean;
  /**
   * Set to true to indicate JIT User Provisioning is enabled
   * <p>
   **Added In:** 20.1.3
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
  "jitUserProvEnabled"?: boolean;
  /**
   * Set to true to indicate JIT User Provisioning Groups should be assigned based on assertion attribute
   * <p>
   **Added In:** 20.1.3
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
  "jitUserProvGroupAssertionAttributeEnabled"?: boolean;
  /**
   * Set to true to indicate JIT User Provisioning Groups should be assigned from a static list
   * <p>
   **Added In:** 20.1.3
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
  "jitUserProvGroupStaticListEnabled"?: boolean;
  /**
   * Set to true to indicate JIT User Creation is enabled
   * <p>
   **Added In:** 20.1.3
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
  "jitUserProvCreateUserEnabled"?: boolean;
  /**
   * Set to true to indicate JIT User Creation is enabled
   * <p>
   **Added In:** 20.1.3
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
  "jitUserProvAttributeUpdateEnabled"?: boolean;
  /**
   * The default value is 'Overwrite', which tells Just-In-Time user-provisioning to replace any current group-assignments for a User with those assigned by assertions and/or those assigned statically. Specify 'Merge' if you want Just-In-Time user-provisioning to combine its group-assignments with those the user already has.
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "jitUserProvGroupAssignmentMethod"?: IdentityProvider.JitUserProvGroupAssignmentMethod;
  /**
   * Property to indicate the mode of group mapping
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "jitUserProvGroupMappingMode"?: IdentityProvider.JitUserProvGroupMappingMode;
  /**
   * Name of the assertion attribute containing the users groups
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "jitUserProvGroupSAMLAttributeName"?: string;
  /**
   * The serviceInstanceIdentifier of the App that hosts this IdP. This value will match the opcServiceInstanceGUID of any service-instance that the IdP represents.
   * <p>
   **Added In:** 18.2.6
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: never
   *  - type: string
   *  - uniqueness: server
   */
  "serviceInstanceIdentifier"?: string;
  /**
   * User mapping method.
   * <p>
   **Deprecated Since: 20.1.3**
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
   *  - idcsValuePersistedInOtherAttribute: true
   */
  "userMappingMethod"?: IdentityProvider.UserMappingMethod;
  /**
   * This property specifies the userstore attribute value that must match the incoming assertion attribute value or the incoming nameid attribute value in order to identify the user during SSO.<br>You can construct the userMappingStoreAttribute value by specifying attributes from the Oracle Identity Cloud Service Core Users schema. For examples of how to construct the userMappingStoreAttribute value, see the <b>Example of a Request Body</b> section of the Examples tab for the <a href='./op-admin-v1-identityproviders-post.html'>POST</a> and <a href='./op-admin-v1-identityproviders-id-put.html'>PUT</a> methods of the /IdentityProviders endpoint.
   * <p>
   **Deprecated Since: 20.1.3**
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
   *  - idcsValuePersistedInOtherAttribute: true
   */
  "userMappingStoreAttribute"?: string;
  /**
   * Assertion attribute name.
   * <p>
   **Deprecated Since: 20.1.3**
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
   *  - idcsValuePersistedInOtherAttribute: true
   */
  "assertionAttribute"?: string;
  /**
   * Identity Provider Type
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "type"?: IdentityProvider.Type;
  /**
   * This SP requires requests SAML IdP to enforce re-authentication.
   * <p>
   **Added In:** 2102181953
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "requireForceAuthn"?: boolean;
  /**
   * SAML SP must accept encrypted assertion only.
   * <p>
   **Added In:** 2102181953
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "requiresEncryptedAssertion"?: boolean;
  /**
   * SAML SP HoK Enabled.
   * <p>
   **Added In:** 2102181953
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "samlHoKRequired"?: boolean;
  /**
   * SAML SP authentication type.
   * <p>
   **Added In:** 2102181953
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "requestedAuthenticationContext"?: Array<string>;
  /**
   * Set to true to indicate ignoring absence of group while provisioning
   * <p>
   **Added In:** 2111112015
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsAddedSinceVersion: 30
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "jitUserProvIgnoreErrorOnAbsentGroups"?: boolean;
  /**
   * Records the notification timestamp for the IdP whose signing certificate is about to expire
   * <p>
   **Added In:** 2302092332
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: dateTime
   *  - uniqueness: none
   */
  "lastNotificationSentTime"?: string;
  /**
   * The list of mappings between the Identity Domain Group and the IDP group.
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [idpGroup]
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: complex
   *  - uniqueness: none
   */
  "jitUserProvGroupMappings"?: Array<model.IdentityProviderJitUserProvGroupMappings>;
  "jitUserProvAttributes"?: model.IdentityProviderJitUserProvAttributes;
  /**
   * Refers to every group of which a JIT-provisioned User should be a member.  Just-in-Time user-provisioning applies this static list when jitUserProvGroupStaticListEnabled:true.
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [value]
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: complex
   *  - uniqueness: none
   */
  "jitUserProvAssignedGroups"?: Array<model.IdentityProviderJitUserProvAssignedGroups>;
  "correlationPolicy"?: model.IdentityProviderCorrelationPolicy;
  "urnIetfParamsScimSchemasOracleIdcsExtensionSocialIdentityProvider"?: model.ExtensionSocialIdentityProvider;
  "urnIetfParamsScimSchemasOracleIdcsExtensionX509IdentityProvider"?: model.ExtensionX509IdentityProvider;
}

export namespace IdentityProvider {
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

  export enum AuthnRequestBinding {
    Redirect = "Redirect",
    Post = "Post",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LogoutBinding {
    Redirect = "Redirect",
    Post = "Post",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SignatureHashAlgorithm {
    Sha1 = "SHA-1",
    Sha256 = "SHA-256",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum JitUserProvGroupAssignmentMethod {
    Overwrite = "Overwrite",
    Merge = "Merge",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum JitUserProvGroupMappingMode {
    Implicit = "implicit",
    Explicit = "explicit",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum UserMappingMethod {
    NameIdToUserAttribute = "NameIDToUserAttribute",
    AssertionAttributeToUserAttribute = "AssertionAttributeToUserAttribute",
    CorrelationPolicyRule = "CorrelationPolicyRule",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Type {
    Saml = "SAML",
    Social = "SOCIAL",
    Iwa = "IWA",
    X509 = "X509",
    Local = "LOCAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IdentityProvider): object {
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

        "jitUserProvGroupMappings": obj.jitUserProvGroupMappings
          ? obj.jitUserProvGroupMappings.map(item => {
              return model.IdentityProviderJitUserProvGroupMappings.getJsonObj(item);
            })
          : undefined,
        "jitUserProvAttributes": obj.jitUserProvAttributes
          ? model.IdentityProviderJitUserProvAttributes.getJsonObj(obj.jitUserProvAttributes)
          : undefined,
        "jitUserProvAssignedGroups": obj.jitUserProvAssignedGroups
          ? obj.jitUserProvAssignedGroups.map(item => {
              return model.IdentityProviderJitUserProvAssignedGroups.getJsonObj(item);
            })
          : undefined,
        "correlationPolicy": obj.correlationPolicy
          ? model.IdentityProviderCorrelationPolicy.getJsonObj(obj.correlationPolicy)
          : undefined,
        "urn:ietf:params:scim:schemas:oracle:idcs:extension:social:IdentityProvider": obj.urnIetfParamsScimSchemasOracleIdcsExtensionSocialIdentityProvider
          ? model.ExtensionSocialIdentityProvider.getJsonObj(
              obj.urnIetfParamsScimSchemasOracleIdcsExtensionSocialIdentityProvider
            )
          : undefined,
        "urn:ietf:params:scim:schemas:oracle:idcs:extension:x509:IdentityProvider": obj.urnIetfParamsScimSchemasOracleIdcsExtensionX509IdentityProvider
          ? model.ExtensionX509IdentityProvider.getJsonObj(
              obj.urnIetfParamsScimSchemasOracleIdcsExtensionX509IdentityProvider
            )
          : undefined
      }
    };

    delete (jsonObj as Partial<IdentityProvider>)
      .urnIetfParamsScimSchemasOracleIdcsExtensionSocialIdentityProvider;
    delete (jsonObj as Partial<IdentityProvider>)
      .urnIetfParamsScimSchemasOracleIdcsExtensionX509IdentityProvider;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IdentityProvider): object {
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

        "jitUserProvGroupMappings": obj.jitUserProvGroupMappings
          ? obj.jitUserProvGroupMappings.map(item => {
              return model.IdentityProviderJitUserProvGroupMappings.getDeserializedJsonObj(item);
            })
          : undefined,
        "jitUserProvAttributes": obj.jitUserProvAttributes
          ? model.IdentityProviderJitUserProvAttributes.getDeserializedJsonObj(
              obj.jitUserProvAttributes
            )
          : undefined,
        "jitUserProvAssignedGroups": obj.jitUserProvAssignedGroups
          ? obj.jitUserProvAssignedGroups.map(item => {
              return model.IdentityProviderJitUserProvAssignedGroups.getDeserializedJsonObj(item);
            })
          : undefined,
        "correlationPolicy": obj.correlationPolicy
          ? model.IdentityProviderCorrelationPolicy.getDeserializedJsonObj(obj.correlationPolicy)
          : undefined,
        "urnIetfParamsScimSchemasOracleIdcsExtensionSocialIdentityProvider": (obj as any)[
          "urn:ietf:params:scim:schemas:oracle:idcs:extension:social:IdentityProvider"
        ]
          ? model.ExtensionSocialIdentityProvider.getDeserializedJsonObj(
              (obj as any)[
                "urn:ietf:params:scim:schemas:oracle:idcs:extension:social:IdentityProvider"
              ]
            )
          : undefined,
        "urnIetfParamsScimSchemasOracleIdcsExtensionX509IdentityProvider": (obj as any)[
          "urn:ietf:params:scim:schemas:oracle:idcs:extension:x509:IdentityProvider"
        ]
          ? model.ExtensionX509IdentityProvider.getDeserializedJsonObj(
              (obj as any)[
                "urn:ietf:params:scim:schemas:oracle:idcs:extension:x509:IdentityProvider"
              ]
            )
          : undefined
      }
    };

    delete (jsonObj as any)[
      "urn:ietf:params:scim:schemas:oracle:idcs:extension:social:IdentityProvider"
    ];
    delete (jsonObj as any)[
      "urn:ietf:params:scim:schemas:oracle:idcs:extension:x509:IdentityProvider"
    ];

    return jsonObj;
  }
}

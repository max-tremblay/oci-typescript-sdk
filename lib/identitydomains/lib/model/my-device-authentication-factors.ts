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
 * Authentication Factors
 */
export interface MyDeviceAuthenticationFactors {
  /**
   * Authentication Factor Type
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   *  - idcsRequiresWriteForAccessFlows: true
   *  - idcsRequiresImmediateReadAfterWriteForAccessFlows: true
   */
  "type": MyDeviceAuthenticationFactors.Type;
  /**
   * Authentication Factor Status
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   *  - idcsRequiresWriteForAccessFlows: true
   *  - idcsRequiresImmediateReadAfterWriteForAccessFlows: true
   */
  "status"?: MyDeviceAuthenticationFactors.Status;
  /**
   * Authentication Factor public key issued by client
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   *  - idcsRequiresWriteForAccessFlows: true
   *  - idcsRequiresImmediateReadAfterWriteForAccessFlows: true
   */
  "publicKey"?: string;
}

export namespace MyDeviceAuthenticationFactors {
  export enum Type {
    Email = "EMAIL",
    Sms = "SMS",
    Totp = "TOTP",
    Push = "PUSH",
    Offlinetotp = "OFFLINETOTP",
    Voice = "VOICE",
    PhoneCall = "PHONE_CALL",
    Thirdparty = "THIRDPARTY",
    FidoAuthenticator = "FIDO_AUTHENTICATOR",
    YubicoOtp = "YUBICO_OTP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Initiated = "INITIATED",
    Inprogress = "INPROGRESS",
    Enrolled = "ENROLLED",
    Locked = "LOCKED",
    Inactive = "INACTIVE",
    Blocked = "BLOCKED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MyDeviceAuthenticationFactors): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MyDeviceAuthenticationFactors): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

/**
 * Vault Secret Management API
 * Use the Secret Management API to manage secrets and secret versions. For more information, see [Managing Secrets](/Content/KeyManagement/Tasks/managingsecrets.htm).
 * OpenAPI spec version: 20180608
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
 * Details for updating a secret.
 */
export interface UpdateSecretDetails {
  /**
   * Details to update the secret version of the specified secret. The secret contents,
   * version number, and rules can't be specified at the same time.
   * Updating the secret contents automatically creates a new secret version.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "currentVersionNumber"?: number;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A brief description of the secret. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Additional metadata that you can use to provide context about how to use the secret or during rotation or
   * other administrative tasks. For example, for a secret that you use to connect to a database, the additional
   * metadata might specify the connection endpoint and the connection string. Provide additional metadata as key-value pairs.
   *
   */
  "metadata"?: { [key: string]: any };
  "secretContent"?: model.Base64SecretContentDetails;
  /**
   * A list of rules to control how the secret is used and managed.
   */
  "secretRules"?: Array<model.SecretRule>;
}

export namespace UpdateSecretDetails {
  export function getJsonObj(obj: UpdateSecretDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "secretContent": obj.secretContent
          ? model.SecretContentDetails.getJsonObj(obj.secretContent)
          : undefined,
        "secretRules": obj.secretRules
          ? obj.secretRules.map(item => {
              return model.SecretRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSecretDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "secretContent": obj.secretContent
          ? model.SecretContentDetails.getDeserializedJsonObj(obj.secretContent)
          : undefined,
        "secretRules": obj.secretRules
          ? obj.secretRules.map(item => {
              return model.SecretRule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

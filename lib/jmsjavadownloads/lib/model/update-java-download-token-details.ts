/**
 * Java Management Service Download API
 * The APIs for the download engine of the Java Management Service.
 * OpenAPI spec version: 20230601
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
 * The attributes of the JavaDownloadToken to be updated.
 */
export interface UpdateJavaDownloadTokenDetails {
  /**
   * User provided display name of the JavaDownloadToken.
   */
  "displayName"?: string;
  /**
   * User provided description of the JavaDownloadToken.
   */
  "description"?: string;
  /**
   * Update the token default status.
   */
  "isDefault"?: boolean;
  /**
   * Expiry time of the token.
   */
  "timeExpires"?: Date;
  /**
   * The license type(s) associated with the JavaDownloadToken.
   */
  "licenseType"?: Array<model.LicenseType>;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`. (See [Managing Tags and Tag Namespaces](https://docs.cloud.oracle.com/Content/Tagging/Concepts/understandingfreeformtags.htm).)
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`. (See [Understanding Free-form Tags](https://docs.cloud.oracle.com/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm)).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateJavaDownloadTokenDetails {
  export function getJsonObj(obj: UpdateJavaDownloadTokenDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "licenseType": obj.licenseType
          ? obj.licenseType.map(item => {
              return model.LicenseType.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateJavaDownloadTokenDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "licenseType": obj.licenseType
          ? obj.licenseType.map(item => {
              return model.LicenseType.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

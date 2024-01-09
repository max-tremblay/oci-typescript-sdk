/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Validate keytabs request details.
 */
export interface ValidateKeyTabsDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the mount target whose keytabs are to be validated.
   */
  "mountTargetId"?: string;
  "keyTabSecretDetails"?: model.KeyTabSecretDetails;
}

export namespace ValidateKeyTabsDetails {
  export function getJsonObj(obj: ValidateKeyTabsDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyTabSecretDetails": obj.keyTabSecretDetails
          ? model.KeyTabSecretDetails.getJsonObj(obj.keyTabSecretDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ValidateKeyTabsDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyTabSecretDetails": obj.keyTabSecretDetails
          ? model.KeyTabSecretDetails.getDeserializedJsonObj(obj.keyTabSecretDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}

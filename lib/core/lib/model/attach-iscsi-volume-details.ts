/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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

export interface AttachIScsiVolumeDetails extends model.AttachVolumeDetails {
  /**
   * Whether to use CHAP authentication for the volume attachment. Defaults to false.
   *
   */
  "useChap"?: boolean;
  /**
   * Refer the top-level definition of encryptionInTransitType.
   * The default value is NONE.
   *
   */
  "encryptionInTransitType"?: model.EncryptionInTransitType;
  /**
   * Whether to enable Oracle Cloud Agent to perform the iSCSI login and logout commands after the volume attach or detach operations for non multipath-enabled iSCSI attachments.
   *
   */
  "isAgentAutoIscsiLoginEnabled"?: boolean;

  "type": string;
}

export namespace AttachIScsiVolumeDetails {
  export function getJsonObj(obj: AttachIScsiVolumeDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AttachVolumeDetails.getJsonObj(obj) as AttachIScsiVolumeDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "iscsi";
  export function getDeserializedJsonObj(
    obj: AttachIScsiVolumeDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AttachVolumeDetails.getDeserializedJsonObj(obj) as AttachIScsiVolumeDetails)),
      ...{}
    };

    return jsonObj;
  }
}

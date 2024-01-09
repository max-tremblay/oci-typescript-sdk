/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
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
 * The details for updating a private subordinate certificate authority (CA) which is issued by a private CA.
 * Note: This operation automatically rotates the private key.
 *
 */
export interface UpdateSubordinateCaIssuedByInternalCaConfigDetails
  extends model.UpdateCertificateAuthorityConfigDetails {
  "validity"?: model.Validity;

  "configType": string;
}

export namespace UpdateSubordinateCaIssuedByInternalCaConfigDetails {
  export function getJsonObj(
    obj: UpdateSubordinateCaIssuedByInternalCaConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateCertificateAuthorityConfigDetails.getJsonObj(
            obj
          ) as UpdateSubordinateCaIssuedByInternalCaConfigDetails)),
      ...{
        "validity": obj.validity ? model.Validity.getJsonObj(obj.validity) : undefined
      }
    };

    return jsonObj;
  }
  export const configType = "SUBORDINATE_CA_ISSUED_BY_INTERNAL_CA";
  export function getDeserializedJsonObj(
    obj: UpdateSubordinateCaIssuedByInternalCaConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateCertificateAuthorityConfigDetails.getDeserializedJsonObj(
            obj
          ) as UpdateSubordinateCaIssuedByInternalCaConfigDetails)),
      ...{
        "validity": obj.validity ? model.Validity.getDeserializedJsonObj(obj.validity) : undefined
      }
    };

    return jsonObj;
  }
}

/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * TLS configuration used by build service to verify TLS connection.
 */
export interface TlsVerifyConfig {
  "tlsVerifyMode": string;
}

export namespace TlsVerifyConfig {
  export function getJsonObj(obj: TlsVerifyConfig): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "tlsVerifyMode" in obj && obj.tlsVerifyMode) {
      switch (obj.tlsVerifyMode) {
        case "CA_CERTIFICATE_VERIFY":
          return model.CaCertVerify.getJsonObj(<model.CaCertVerify>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.tlsVerifyMode}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TlsVerifyConfig): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "tlsVerifyMode" in obj && obj.tlsVerifyMode) {
      switch (obj.tlsVerifyMode) {
        case "CA_CERTIFICATE_VERIFY":
          return model.CaCertVerify.getDeserializedJsonObj(
            <model.CaCertVerify>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.tlsVerifyMode}`);
      }
    }
    return jsonObj;
  }
}

/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * Mapped secret used on the firewall policy rules.
 */
export interface MappedSecret {
  /**
   * Name of the secret.
   */
  "name": string;
  /**
   * Type of the secrets mapped based on the policy.
   * <p>
   * `SSL_INBOUND_INSPECTION`: For Inbound inspection of SSL traffic.
   *  * `SSL_FORWARD_PROXY`: For forward proxy certificates for SSL inspection.
   *
   */
  "type": model.InspectionType;
  /**
   * OCID of the Network Firewall Policy this Mapped Secret belongs to.
   */
  "parentResourceId": string;

  "source": string;
}

export namespace MappedSecret {
  export function getJsonObj(obj: MappedSecret): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "source" in obj && obj.source) {
      switch (obj.source) {
        case "OCI_VAULT":
          return model.VaultMappedSecret.getJsonObj(
            <model.VaultMappedSecret>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.source}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MappedSecret): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "source" in obj && obj.source) {
      switch (obj.source) {
        case "OCI_VAULT":
          return model.VaultMappedSecret.getDeserializedJsonObj(
            <model.VaultMappedSecret>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.source}`);
      }
    }
    return jsonObj;
  }
}

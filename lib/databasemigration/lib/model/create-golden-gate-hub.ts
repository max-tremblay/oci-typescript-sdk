/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details about Oracle GoldenGate Microservices. Required for online logical migration.
 *
 */
export interface CreateGoldenGateHub {
  "restAdminCredentials": model.CreateAdminCredentials;
  "sourceDbAdminCredentials": model.CreateAdminCredentials;
  "sourceContainerDbAdminCredentials"?: model.CreateAdminCredentials;
  "targetDbAdminCredentials": model.CreateAdminCredentials;
  /**
   * Oracle GoldenGate Microservices hub's REST endpoint.
   * Refer to https://docs.oracle.com/en/middleware/goldengate/core/19.1/securing/network.html#GUID-A709DA55-111D-455E-8942-C9BDD1E38CAA
   *
   */
  "url": string;
  /**
   * Name of GoldenGate Microservices deployment to operate on source database
   *
   */
  "sourceMicroservicesDeploymentName": string;
  /**
   * Name of GoldenGate Microservices deployment to operate on target database
   *
   */
  "targetMicroservicesDeploymentName": string;
  /**
   * OCID of GoldenGate Microservices compute instance.
   *
   */
  "computeId"?: string;
}

export namespace CreateGoldenGateHub {
  export function getJsonObj(obj: CreateGoldenGateHub): object {
    const jsonObj = {
      ...obj,
      ...{
        "restAdminCredentials": obj.restAdminCredentials
          ? model.CreateAdminCredentials.getJsonObj(obj.restAdminCredentials)
          : undefined,
        "sourceDbAdminCredentials": obj.sourceDbAdminCredentials
          ? model.CreateAdminCredentials.getJsonObj(obj.sourceDbAdminCredentials)
          : undefined,
        "sourceContainerDbAdminCredentials": obj.sourceContainerDbAdminCredentials
          ? model.CreateAdminCredentials.getJsonObj(obj.sourceContainerDbAdminCredentials)
          : undefined,
        "targetDbAdminCredentials": obj.targetDbAdminCredentials
          ? model.CreateAdminCredentials.getJsonObj(obj.targetDbAdminCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
}

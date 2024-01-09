/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The job request details to implement the Optimizer Statistics Advisor task recommendations.
 */
export interface ImplementOptimizerStatisticsAdvisorRecommendationsJob {
  /**
   * The name of the job. Valid characters are uppercase or lowercase letters,
   * numbers, and \"_\". The name of the job cannot be modified. It must be unique
   * in the compartment and must begin with an alphabetic character.
   *
   */
  "name": string;
  /**
   * The name of the execution.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which the job resides.
   */
  "compartmentId": string;
  "resultLocation": model.ObjectStorageJobExecutionResultLocation;
  "credentials"?: model.ManagedDatabasePasswordCredential | model.ManagedDatabaseSecretCredential;
}

export namespace ImplementOptimizerStatisticsAdvisorRecommendationsJob {
  export function getJsonObj(obj: ImplementOptimizerStatisticsAdvisorRecommendationsJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "resultLocation": obj.resultLocation
          ? model.JobExecutionResultLocation.getJsonObj(obj.resultLocation)
          : undefined,
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getJsonObj(obj.credentials)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: ImplementOptimizerStatisticsAdvisorRecommendationsJob
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "resultLocation": obj.resultLocation
          ? model.JobExecutionResultLocation.getDeserializedJsonObj(obj.resultLocation)
          : undefined,
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getDeserializedJsonObj(obj.credentials)
          : undefined
      }
    };

    return jsonObj;
  }
}

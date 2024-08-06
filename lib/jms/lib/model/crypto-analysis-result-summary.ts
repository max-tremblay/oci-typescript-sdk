/**
 * Java Management Service Fleets API
 * The APIs for the [Fleet Management](https://docs.oracle.com/en-us/iaas/jms/doc/fleet-management.html) feature of Java Management Service to monitor and manage the usage of Java in your enterprise. Use these APIs to manage fleets, configure managed instances to report to fleets, and gain insights into the Java workloads running on these instances by carrying out basic and advanced features.
 * OpenAPI spec version: 20210610
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
 * Summary of a crypto analysis result. The actual output of the analysis is stored in the Object Storage object.
 */
export interface CryptoAnalysisResultSummary {
  /**
   * The OCID to identify this analysis results.
   */
  "id": string;
  /**
   * The OCID of the work request to start the analysis.
   */
  "workRequestId"?: string;
  /**
   * The result aggregation mode
   */
  "aggregationMode": model.CryptoAnalysisResultMode;
  /**
   * The fleet OCID.
   */
  "fleetId": string;
  /**
   * The managed instance OCID.
   */
  "managedInstanceId"?: string;
  /**
   * The hostname of the managed instance.
   */
  "hostName"?: string;
  /**
   * Time of the first event in the analysis.
   */
  "timeFirstEvent"?: Date;
  /**
   * Time of the last event in the analysis.
   */
  "timeLastEvent"?: Date;
  /**
   * Total number of events in the analysis. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalEventCount": number;
  /**
   * Total number of summarized events. Summarized events are deduplicated events of interest. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "summarizedEventCount": number;
  /**
   * Total number of findings with the analysis. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "findingCount": number;
  /**
   * Total number of non-compliant findings with the analysis. A non-compliant finding means the
   * application won't work properly with the changes introduced by the Crypto Roadmap version
   * used by the analysis.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nonCompliantFindingCount": number;
  /**
   * The time the result is compiled.
   */
  "timeCreated"?: Date;
  /**
   * The time the JFR recording has started.
   */
  "timeStarted"?: Date;
  /**
   * The time the JFR recording has finished.
   */
  "timeFinished"?: Date;
  /**
   * The Crypto Roadmap version used to perform the analysis.
   */
  "cryptoRoadmapVersion": string;
  /**
   * The Object Storage namespace of this analysis result.
   */
  "namespace": string;
  /**
   * The Object Storage bucket name of this analysis result.
   */
  "bucketName": string;
  /**
   * The Object Storage object name of this analysis result.
   */
  "objectName": string;
}

export namespace CryptoAnalysisResultSummary {
  export function getJsonObj(obj: CryptoAnalysisResultSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CryptoAnalysisResultSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

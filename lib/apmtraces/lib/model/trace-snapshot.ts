/**
 * Application Performance Monitoring Trace Explorer API
 * Use the Application Performance Monitoring Trace Explorer API to query traces and associated spans in Trace Explorer. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20200630
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
 * Definition of a trace snapshot object.
 *
 */
export interface TraceSnapshot {
  /**
   * Unique identifier (traceId) for the trace that represents the span set.  Note that this field is
   * defined as traceKey in the API and it maps to the traceId in the trace data in Application Performance
   * Monitoring.
   *
   */
  "key": string;
  /**
   * Start time of the trace.
   *
   */
  "timeStarted"?: Date;
  /**
   * End time of the trace.
   *
   */
  "timeEnded"?: Date;
  /**
   * Trace snapshots properties.
   *
   */
  "traceSnapshotDetails"?: Array<model.SnapshotDetail>;
  /**
   * List of spans.
   *
   */
  "spanSnapshots": Array<model.SpanSnapshot>;
}

export namespace TraceSnapshot {
  export function getJsonObj(obj: TraceSnapshot): object {
    const jsonObj = {
      ...obj,
      ...{
        "traceSnapshotDetails": obj.traceSnapshotDetails
          ? obj.traceSnapshotDetails.map(item => {
              return model.SnapshotDetail.getJsonObj(item);
            })
          : undefined,
        "spanSnapshots": obj.spanSnapshots
          ? obj.spanSnapshots.map(item => {
              return model.SpanSnapshot.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TraceSnapshot): object {
    const jsonObj = {
      ...obj,
      ...{
        "traceSnapshotDetails": obj.traceSnapshotDetails
          ? obj.traceSnapshotDetails.map(item => {
              return model.SnapshotDetail.getDeserializedJsonObj(item);
            })
          : undefined,
        "spanSnapshots": obj.spanSnapshots
          ? obj.spanSnapshots.map(item => {
              return model.SpanSnapshot.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

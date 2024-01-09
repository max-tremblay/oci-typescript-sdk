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
 * Thread snapshot.
 *
 */
export interface ThreadSnapshot {
  /**
   * Snapshot time.
   *
   */
  "timeStamp"?: Date;
  /**
   * Snapshot details.
   *
   */
  "threadSnapshotDetails"?: Array<model.SnapshotDetail>;
  /**
   * Stack trace.
   *
   */
  "stackTrace"?: Array<model.StackTraceElement>;
}

export namespace ThreadSnapshot {
  export function getJsonObj(obj: ThreadSnapshot): object {
    const jsonObj = {
      ...obj,
      ...{
        "threadSnapshotDetails": obj.threadSnapshotDetails
          ? obj.threadSnapshotDetails.map(item => {
              return model.SnapshotDetail.getJsonObj(item);
            })
          : undefined,
        "stackTrace": obj.stackTrace
          ? obj.stackTrace.map(item => {
              return model.StackTraceElement.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ThreadSnapshot): object {
    const jsonObj = {
      ...obj,
      ...{
        "threadSnapshotDetails": obj.threadSnapshotDetails
          ? obj.threadSnapshotDetails.map(item => {
              return model.SnapshotDetail.getDeserializedJsonObj(item);
            })
          : undefined,
        "stackTrace": obj.stackTrace
          ? obj.stackTrace.map(item => {
              return model.StackTraceElement.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

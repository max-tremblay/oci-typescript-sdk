/**
 * Logging Ingestion API
 * Use the Logging Ingestion API to ingest your application logs.
 * OpenAPI spec version: 20200831
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
 * A single batch of Log Entries.
 */
export interface LogEntryBatch {
  /**
   * List of data entries.
   */
  "entries": Array<model.LogEntry>;
  /**
   * Source of the logs that generated the message. This could be the
   * instance name, hostname, or the source used to read the event. For example, \"ServerA\".
   *
   */
  "source": string;
  /**
   * This field signifies the type of logs being ingested.
   * For example: ServerA.requestLogs.
   *
   */
  "type": string;
  /**
   * This optional field is useful for specifying the specific sub-resource
   * or input file used to read the event.
   * For example: \"/var/log/application.log\".
   *
   */
  "subject"?: string;
  /**
   * The timestamp for all log entries in this batch. This can be
   * considered as the default timestamp for each entry, unless it is
   * overwritten by the entry time. An RFC3339-formatted date-time string
   * with milliseconds precision.
   *
   */
  "defaultlogentrytime": Date;
}

export namespace LogEntryBatch {
  export function getJsonObj(obj: LogEntryBatch): object {
    const jsonObj = {
      ...obj,
      ...{
        "entries": obj.entries
          ? obj.entries.map(item => {
              return model.LogEntry.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogEntryBatch): object {
    const jsonObj = {
      ...obj,
      ...{
        "entries": obj.entries
          ? obj.entries.map(item => {
              return model.LogEntry.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

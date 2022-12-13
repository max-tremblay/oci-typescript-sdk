/**
 * Queue API
 * A description of the Queue API
 * OpenAPI spec version: 20210201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A list of the messages published in a queue.
 */
export interface PutMessages {
  /**
   * The messages that have been published in a queue.
   */
  "messages": Array<model.PutMessage>;
}

export namespace PutMessages {
  export function getJsonObj(obj: PutMessages): object {
    const jsonObj = {
      ...obj,
      ...{
        "messages": obj.messages
          ? obj.messages.map(item => {
              return model.PutMessage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PutMessages): object {
    const jsonObj = {
      ...obj,
      ...{
        "messages": obj.messages
          ? obj.messages.map(item => {
              return model.PutMessage.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

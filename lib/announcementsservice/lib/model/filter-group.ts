/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
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
 * A group of filters to match announcements against.
 */
export interface FilterGroup {
  /**
   * The name of the group. The name must be unique and it cannot be changed. Avoid entering confidential information.
   */
  "name": string;
  /**
   * A list of filters against which the Announcements service matches announcements. You cannot combine the RESOURCE_ID filter with any other type of filter within a given filter group. For filter types that support multiple values, specify the values individually.
   */
  "filters": Array<model.Filter>;
}

export namespace FilterGroup {
  export function getJsonObj(obj: FilterGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "filters": obj.filters
          ? obj.filters.map(item => {
              return model.Filter.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FilterGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "filters": obj.filters
          ? obj.filters.map(item => {
              return model.Filter.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

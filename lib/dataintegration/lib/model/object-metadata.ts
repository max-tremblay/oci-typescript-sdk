/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * A summary type containing information about the object including its key, name and when/who created/updated it.
 */
export interface ObjectMetadata {
  /**
   * The user that created the object.
   */
  "createdBy"?: string;
  /**
   * The user that created the object.
   */
  "createdByName"?: string;
  /**
   * The user that updated the object.
   */
  "updatedBy"?: string;
  /**
   * The user that updated the object.
   */
  "updatedByName"?: string;
  /**
   * The date and time that the object was created.
   */
  "timeCreated"?: Date;
  /**
   * The date and time that the object was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The owning object key for this object.
   */
  "aggregatorKey"?: string;
  "aggregator"?: model.AggregatorSummary;
  /**
   * The full path to identify this object.
   */
  "identifierPath"?: string;
  /**
   * Information property fields.
   */
  "infoFields"?: { [key: string]: string };
  /**
   * The registry version of the object. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "registryVersion"?: number;
  /**
   * Labels are keywords or tags that you can add to data assets, dataflows and so on. You can define your own labels and use them to categorize content.
   */
  "labels"?: Array<string>;
  /**
   * Specifies whether this object is a favorite or not.
   */
  "isFavorite"?: boolean;
  "countStatistics"?: model.CountStatistic;
}

export namespace ObjectMetadata {
  export function getJsonObj(obj: ObjectMetadata): object {
    const jsonObj = {
      ...obj,
      ...{
        "aggregator": obj.aggregator
          ? model.AggregatorSummary.getJsonObj(obj.aggregator)
          : undefined,

        "countStatistics": obj.countStatistics
          ? model.CountStatistic.getJsonObj(obj.countStatistics)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ObjectMetadata): object {
    const jsonObj = {
      ...obj,
      ...{
        "aggregator": obj.aggregator
          ? model.AggregatorSummary.getDeserializedJsonObj(obj.aggregator)
          : undefined,

        "countStatistics": obj.countStatistics
          ? model.CountStatistic.getDeserializedJsonObj(obj.countStatistics)
          : undefined
      }
    };

    return jsonObj;
  }
}

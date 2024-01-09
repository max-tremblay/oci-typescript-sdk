/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Parameters detailing how to provision the target endpoint that is a DB System.
 */
export interface CreateChannelTargetFromDbSystemDetails extends model.CreateChannelTargetDetails {
  /**
   * The OCID of the target DB System.
   */
  "dbSystemId": string;
  /**
   * The case-insensitive name that identifies the replication channel. Channel names
   * must follow the rules defined for [MySQL identifiers](https://dev.mysql.com/doc/refman/8.0/en/identifiers.html).
   * The names of non-Deleted Channels must be unique for each DB System.
   *
   */
  "channelName"?: string;
  /**
   * The username for the replication applier of the target MySQL DB System.
   */
  "applierUsername"?: string;
  /**
   * Replication filter rules to be applied at the DB System Channel target.
   *
   */
  "filters"?: Array<model.ChannelFilter>;
  /**
   * Specifies how a replication channel handles the creation and alteration of tables
   * that do not have a primary key. The default value is set to ALLOW.
   *
   */
  "tablesWithoutPrimaryKeyHandling"?: string;
  /**
   * Specifies the amount of time, in seconds, that the channel waits before
   * applying a transaction received from the source.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "delayInSeconds"?: number;

  "targetType": string;
}

export namespace CreateChannelTargetFromDbSystemDetails {
  export function getJsonObj(
    obj: CreateChannelTargetFromDbSystemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelTargetDetails.getJsonObj(
            obj
          ) as CreateChannelTargetFromDbSystemDetails)),
      ...{
        "filters": obj.filters
          ? obj.filters.map(item => {
              return model.ChannelFilter.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const targetType = "DBSYSTEM";
  export function getDeserializedJsonObj(
    obj: CreateChannelTargetFromDbSystemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelTargetDetails.getDeserializedJsonObj(
            obj
          ) as CreateChannelTargetFromDbSystemDetails)),
      ...{
        "filters": obj.filters
          ? obj.filters.map(item => {
              return model.ChannelFilter.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

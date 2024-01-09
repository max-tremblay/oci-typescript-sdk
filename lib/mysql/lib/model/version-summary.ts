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
 * A summary of the supported MySQL Versions families, and a list of their supported minor versions.
 *
 */
export interface VersionSummary {
  /**
   * A descriptive summary of a group of versions.
   */
  "versionFamily"?: string;
  /**
   * The list of supported MySQL Versions.
   */
  "versions": Array<model.Version>;
}

export namespace VersionSummary {
  export function getJsonObj(obj: VersionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "versions": obj.versions
          ? obj.versions.map(item => {
              return model.Version.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VersionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "versions": obj.versions
          ? obj.versions.map(item => {
              return model.Version.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

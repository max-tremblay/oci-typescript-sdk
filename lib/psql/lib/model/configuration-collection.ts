/**
 * PGSQL Control Plane API
 * Use the OCI Database with PostgreSQL API to manage resources such as database systems, database nodes, backups, and configurations. 
For information, see the user guide documentation for the [service](/iaas/Content/postgresql/home.htm).

 * OpenAPI spec version: 20220915
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
 * Results of a configuration search. Contains the ConfigurationSummary items and other information, such as metadata.
 */
export interface ConfigurationCollection {
  /**
   * List of configurations.
   */
  "items": Array<model.ConfigurationSummary>;
}

export namespace ConfigurationCollection {
  export function getJsonObj(obj: ConfigurationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ConfigurationSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigurationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ConfigurationSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

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
 * List of default configuration values for databases.
 */
export interface DefaultConfigurationDetails {
  /**
   * List of ConfigParms object.
   */
  "items": Array<model.DefaultConfigParams>;
}

export namespace DefaultConfigurationDetails {
  export function getJsonObj(obj: DefaultConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DefaultConfigParams.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DefaultConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DefaultConfigParams.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

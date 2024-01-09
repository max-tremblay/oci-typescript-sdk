/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details for creating a Database Home if you are cloning a database from a another database system.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateDbHomeFromDbSystemDetails {
  /**
   * The user-provided name of the Database Home.
   */
  "displayName"?: string;
  "database": model.CreateDatabaseFromDbSystemDetails;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateDbHomeFromDbSystemDetails {
  export function getJsonObj(obj: CreateDbHomeFromDbSystemDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "database": obj.database
          ? model.CreateDatabaseFromDbSystemDetails.getJsonObj(obj.database)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDbHomeFromDbSystemDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "database": obj.database
          ? model.CreateDatabaseFromDbSystemDetails.getDeserializedJsonObj(obj.database)
          : undefined
      }
    };

    return jsonObj;
  }
}

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
 * Existing named credential used to connect to the database.
 *
 */
export interface DatabaseConnectionCredentailsByName extends model.DatabaseConnectionCredentials {
  /**
    * The name of the credential information that used to connect to the database. The name should be in \"x.y\" format, where
* the length of \"x\" has a maximum of 64 characters, and length of \"y\" has a maximum of 199 characters.
* The name strings can contain letters, numbers and the underscore character only. Other characters are not valid, except for
* the \".\" character that separates the \"x\" and \"y\" portions of the name.
* *IMPORTANT* - The name must be unique within the OCI region the credential is being created in. If you specify a name
* that duplicates the name of another credential within the same OCI region, you may overwrite or corrupt the credential that is already
* using the name.
* <p>
For example: inventorydb.abc112233445566778899
* 
    */
  "credentialName": string;

  "credentialType": string;
}

export namespace DatabaseConnectionCredentailsByName {
  export function getJsonObj(
    obj: DatabaseConnectionCredentailsByName,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConnectionCredentials.getJsonObj(
            obj
          ) as DatabaseConnectionCredentailsByName)),
      ...{}
    };

    return jsonObj;
  }
  export const credentialType = "NAME_REFERENCE";
  export function getDeserializedJsonObj(
    obj: DatabaseConnectionCredentailsByName,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConnectionCredentials.getDeserializedJsonObj(
            obj
          ) as DatabaseConnectionCredentailsByName)),
      ...{}
    };

    return jsonObj;
  }
}

/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Database Tools connection of a MySQL Server.
 */
export interface DatabaseToolsConnectionMySql extends model.DatabaseToolsConnection {
  "relatedResource"?: model.DatabaseToolsRelatedResourceMySql;
  /**
   * The connection string used to connect to the MySQL Server.
   */
  "connectionString": string;
  /**
   * The user name.
   */
  "userName"?: string;
  "userPassword"?: model.DatabaseToolsUserPasswordSecretId;
  /**
   * The advanced connection properties key-value pair (for example, `sslMode`).
   */
  "advancedProperties"?: { [key: string]: string };
  /**
   * The CA certificate to verify the server's certificate and
   * the client private key and associated certificate required for client authentication.
   *
   */
  "keyStores"?: Array<model.DatabaseToolsKeyStoreMySql>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Database Tools private endpoint used to access the database in the customer VCN.
   */
  "privateEndpointId"?: string;

  "type": string;
}

export namespace DatabaseToolsConnectionMySql {
  export function getJsonObj(obj: DatabaseToolsConnectionMySql, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsConnection.getJsonObj(obj) as DatabaseToolsConnectionMySql)),
      ...{
        "relatedResource": obj.relatedResource
          ? model.DatabaseToolsRelatedResourceMySql.getJsonObj(obj.relatedResource)
          : undefined,

        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPassword.getJsonObj(obj.userPassword)
          : undefined,

        "keyStores": obj.keyStores
          ? obj.keyStores.map(item => {
              return model.DatabaseToolsKeyStoreMySql.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "MYSQL";
  export function getDeserializedJsonObj(
    obj: DatabaseToolsConnectionMySql,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsConnection.getDeserializedJsonObj(
            obj
          ) as DatabaseToolsConnectionMySql)),
      ...{
        "relatedResource": obj.relatedResource
          ? model.DatabaseToolsRelatedResourceMySql.getDeserializedJsonObj(obj.relatedResource)
          : undefined,

        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPassword.getDeserializedJsonObj(obj.userPassword)
          : undefined,

        "keyStores": obj.keyStores
          ? obj.keyStores.map(item => {
              return model.DatabaseToolsKeyStoreMySql.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

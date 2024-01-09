/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * Proxy client information for user name based proxy authentication.
 */
export interface DatabaseToolsConnectionOracleDatabaseProxyClientUserNameSummary
  extends model.DatabaseToolsConnectionOracleDatabaseProxyClientSummary {
  /**
   * The user name.
   */
  "userName": string;
  "userPassword"?: model.DatabaseToolsUserPasswordSecretIdSummary;
  /**
   * A list of database roles for the client. These roles are enabled if the proxy is authorized to use the roles on behalf of the client.
   */
  "roles"?: Array<string>;

  "proxyAuthenticationType": string;
}

export namespace DatabaseToolsConnectionOracleDatabaseProxyClientUserNameSummary {
  export function getJsonObj(
    obj: DatabaseToolsConnectionOracleDatabaseProxyClientUserNameSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsConnectionOracleDatabaseProxyClientSummary.getJsonObj(
            obj
          ) as DatabaseToolsConnectionOracleDatabaseProxyClientUserNameSummary)),
      ...{
        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPasswordSummary.getJsonObj(obj.userPassword)
          : undefined
      }
    };

    return jsonObj;
  }
  export const proxyAuthenticationType = "USER_NAME";
  export function getDeserializedJsonObj(
    obj: DatabaseToolsConnectionOracleDatabaseProxyClientUserNameSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsConnectionOracleDatabaseProxyClientSummary.getDeserializedJsonObj(
            obj
          ) as DatabaseToolsConnectionOracleDatabaseProxyClientUserNameSummary)),
      ...{
        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPasswordSummary.getDeserializedJsonObj(obj.userPassword)
          : undefined
      }
    };

    return jsonObj;
  }
}

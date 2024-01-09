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
 * The related resource
 */
export interface UpdateDatabaseToolsRelatedResourcePostgresqlDetails {
  /**
   * The resource entity type.
   */
  "entityType"?: model.RelatedResourceEntityTypePostgresql;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the related resource.
   */
  "identifier"?: string;
}

export namespace UpdateDatabaseToolsRelatedResourcePostgresqlDetails {
  export function getJsonObj(obj: UpdateDatabaseToolsRelatedResourcePostgresqlDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: UpdateDatabaseToolsRelatedResourcePostgresqlDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

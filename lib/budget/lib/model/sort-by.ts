/**
 * Budgets API
 * Use the Budgets API to manage budgets and budget alerts. For more information, see [Budgets Overview](/iaas/Content/Billing/Concepts/budgetsoverview.htm).
 * OpenAPI spec version: 20190111
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
 * The field to sort by. If not specified, the default is timeCreated.
 * The default sort order for timeCreated is DESC.
 * The default sort order for displayName is ASC in alphanumeric order.
 *
 **/
export enum SortBy {
  TimeCreated = "timeCreated",
  DisplayName = "displayName"
}

export namespace SortBy {
  export function getJsonObj(obj: SortBy): SortBy {
    return obj;
  }
  export function getDeserializedJsonObj(obj: SortBy): SortBy {
    return obj;
  }
}

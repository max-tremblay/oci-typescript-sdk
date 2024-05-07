/**
 *
 *
 * OpenAPI spec version: 20160918
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

export interface ListIpInventoryResponse {
  /**
   * For optimistic concurrency control. See {@code if-match}.
   *
   */
  "etag": string;
  /**
   * For list pagination. When this header appears in the response, additional pages
   * of results remain. For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "opcNextPage": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * For list pagination. A pagination token to get the total number of results available.
   *
   */
  "opcTotalItems": number;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the work request.
   * Use [GetWorkRequest](https://docs.cloud.oracle.com/api/#/en/workrequests/latest/WorkRequest/GetWorkRequest)
   * with this ID to track the status of the request.
   *
   */
  "opcWorkRequestId": string;
  /**
   * The IpInventory API current state.
   */
  "lifecycleState": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the resource.
   * Use [GetWorkRequest](https://docs.cloud.oracle.com/api/#/en/workrequests/latest/WorkRequest/GetWorkRequest)
   * with this ID to track the status of the resource.
   *
   */
  "dataRequestId": string;
  /**
   * The returned model.IpInventoryCollection instance.
   */
  "ipInventoryCollection": model.IpInventoryCollection;
}

/**
 *
 *
 * OpenAPI spec version: 20160918
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/DeleteDbHome.ts.html |here} to see how to use DeleteDbHomeRequest.
 */
export interface DeleteDbHomeRequest extends common.BaseRequest {
  /**
   * The Database Home [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "dbHomeId": string;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match`
   * parameter to the value of the etag from a previous GET or POST response for that resource.  The resource
   * will be updated or deleted only if the etag you provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
 * Whether to perform a final backup of the database or not. Default is false.
* <p>
If you previously used RMAN or dbcli to configure backups and then you switch to using the Console or the API for backups, a new backup configuration is created and associated with your database. This means that you can no longer rely on your previously configured unmanaged backups to work.
* <p>
This parameter is used in multiple APIs. Refer to the API description for details on how the operation uses it.
* 
 */
  "performFinalBackup"?: boolean;
}

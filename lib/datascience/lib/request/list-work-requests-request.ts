/**
 *
 *
 * OpenAPI spec version: 20190101
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datascience/ListWorkRequests.ts.html |here} to see how to use ListWorkRequestsRequest.
 */
export interface ListWorkRequestsRequest extends common.BaseRequest {
  /**
   * <b>Filter</b> results by the [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * <b>Filter</b> results by [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm). Must be an OCID of the correct type for the resource type.
   *
   */
  "id"?: string;
  /**
   * <b>Filter</b> results by the type of the operation associated with the work request.
   */
  "operationType"?: ListWorkRequestsRequest.OperationType;
  /**
   * <b>Filter</b> results by work request status.
   */
  "status"?: ListWorkRequestsRequest.Status;
  /**
 * For list pagination. The maximum number of results per page,
* or items to return in a paginated \"List\" call.
* 1 is the minimum, 1000 is the maximum.
* See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/usingapi.htm#nine).
* <p>
Example: `500`
* 
 */
  "limit"?: number;
  /**
 * For list pagination. The value of the `opc-next-page` response
* header from the previous \"List\" call.
* <p>
See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/usingapi.htm#nine).
* 
 */
  "page"?: string;
  /**
   * Specifies sort order to use, either `ASC` (ascending) or `DESC` (descending).
   *
   */
  "sortOrder"?: ListWorkRequestsRequest.SortOrder;
  /**
   * Specifies the field to sort by. Accepts only one field. By default, when you sort by time fields, the results are shown in descending order. All other fields default to ascending order.
   *
   */
  "sortBy"?: ListWorkRequestsRequest.SortBy;
  /**
   * Unique Oracle assigned identifier for the request. If you need to contact Oracle about a particular request, then provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListWorkRequestsRequest {
  export enum OperationType {
    NotebookSessionCreate = "NOTEBOOK_SESSION_CREATE",
    NotebookSessionDelete = "NOTEBOOK_SESSION_DELETE",
    NotebookSessionActivate = "NOTEBOOK_SESSION_ACTIVATE",
    NotebookSessionDeactivate = "NOTEBOOK_SESSION_DEACTIVATE",
    ModelDeploymentCreate = "MODEL_DEPLOYMENT_CREATE",
    ModelDeploymentDelete = "MODEL_DEPLOYMENT_DELETE",
    ModelDeploymentActivate = "MODEL_DEPLOYMENT_ACTIVATE",
    ModelDeploymentDeactivate = "MODEL_DEPLOYMENT_DEACTIVATE",
    ModelDeploymentUpdate = "MODEL_DEPLOYMENT_UPDATE",
    ProjectDelete = "PROJECT_DELETE",
    WorkrequestCancel = "WORKREQUEST_CANCEL",
    JobDelete = "JOB_DELETE"
  }

  export enum Status {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Canceling = "CANCELING",
    Canceled = "CANCELED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    OperationType = "operationType",
    Status = "status",
    TimeAccepted = "timeAccepted"
  }
}

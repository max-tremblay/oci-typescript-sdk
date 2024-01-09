/**
 * Managed Access API
 * Use the Managed Access API to approve access requests, create and manage templates, and manage resource approval settings. For more information, see [Managed Access Overview](https://docs.oracle.com/iaas/Content/managed-access/home.htm).

Use the table of contents and search tool to explore the Managed Access API.

 * OpenAPI spec version: 20220126
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AccessContextAttribute from "./access-context-attribute";
export import AccessContextAttribute = AccessContextAttribute.AccessContextAttribute;
import * as AccessContextAttributeCollection from "./access-context-attribute-collection";
export import AccessContextAttributeCollection = AccessContextAttributeCollection.AccessContextAttributeCollection;
import * as AccessMaterials from "./access-materials";
export import AccessMaterials = AccessMaterials.AccessMaterials;
import * as AccessRequest from "./access-request";
export import AccessRequest = AccessRequest.AccessRequest;
import * as AccessRequestActionType from "./access-request-action-type";
export import AccessRequestActionType = AccessRequestActionType.AccessRequestActionType;
import * as AccessRequestCollection from "./access-request-collection";
export import AccessRequestCollection = AccessRequestCollection.AccessRequestCollection;
import * as AccessRequestSummary from "./access-request-summary";
export import AccessRequestSummary = AccessRequestSummary.AccessRequestSummary;
import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as ActivityLog from "./activity-log";
export import ActivityLog = ActivityLog.ActivityLog;
import * as ApprovalTemplate from "./approval-template";
export import ApprovalTemplate = ApprovalTemplate.ApprovalTemplate;
import * as ApprovalTemplateCollection from "./approval-template-collection";
export import ApprovalTemplateCollection = ApprovalTemplateCollection.ApprovalTemplateCollection;
import * as ApprovalTemplateSummary from "./approval-template-summary";
export import ApprovalTemplateSummary = ApprovalTemplateSummary.ApprovalTemplateSummary;
import * as ApproverInfo from "./approver-info";
export import ApproverInfo = ApproverInfo.ApproverInfo;
import * as ApproverLevels from "./approver-levels";
export import ApproverLevels = ApproverLevels.ApproverLevels;
import * as ApproverType from "./approver-type";
export import ApproverType = ApproverType.ApproverType;
import * as ChangeApprovalTemplateCompartmentDetails from "./change-approval-template-compartment-details";
export import ChangeApprovalTemplateCompartmentDetails = ChangeApprovalTemplateCompartmentDetails.ChangeApprovalTemplateCompartmentDetails;
import * as ChangeLockboxCompartmentDetails from "./change-lockbox-compartment-details";
export import ChangeLockboxCompartmentDetails = ChangeLockboxCompartmentDetails.ChangeLockboxCompartmentDetails;
import * as CreateAccessRequestDetails from "./create-access-request-details";
export import CreateAccessRequestDetails = CreateAccessRequestDetails.CreateAccessRequestDetails;
import * as CreateApprovalTemplateDetails from "./create-approval-template-details";
export import CreateApprovalTemplateDetails = CreateApprovalTemplateDetails.CreateApprovalTemplateDetails;
import * as CreateLockboxDetails from "./create-lockbox-details";
export import CreateLockboxDetails = CreateLockboxDetails.CreateLockboxDetails;
import * as ExportAccessRequestsDetails from "./export-access-requests-details";
export import ExportAccessRequestsDetails = ExportAccessRequestsDetails.ExportAccessRequestsDetails;
import * as HandleAccessRequestDetails from "./handle-access-request-details";
export import HandleAccessRequestDetails = HandleAccessRequestDetails.HandleAccessRequestDetails;
import * as Lockbox from "./lockbox";
export import Lockbox = Lockbox.Lockbox;
import * as LockboxAutoApprovalState from "./lockbox-auto-approval-state";
export import LockboxAutoApprovalState = LockboxAutoApprovalState.LockboxAutoApprovalState;
import * as LockboxCollection from "./lockbox-collection";
export import LockboxCollection = LockboxCollection.LockboxCollection;
import * as LockboxPartner from "./lockbox-partner";
export import LockboxPartner = LockboxPartner.LockboxPartner;
import * as LockboxSummary from "./lockbox-summary";
export import LockboxSummary = LockboxSummary.LockboxSummary;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as PersonaLevel from "./persona-level";
export import PersonaLevel = PersonaLevel.PersonaLevel;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as UpdateApprovalTemplateDetails from "./update-approval-template-details";
export import UpdateApprovalTemplateDetails = UpdateApprovalTemplateDetails.UpdateApprovalTemplateDetails;
import * as UpdateLockboxDetails from "./update-lockbox-details";
export import UpdateLockboxDetails = UpdateLockboxDetails.UpdateLockboxDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestLogEntryCollection from "./work-request-log-entry-collection";
export import WorkRequestLogEntryCollection = WorkRequestLogEntryCollection.WorkRequestLogEntryCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestResourceMetadataKey from "./work-request-resource-metadata-key";
export import WorkRequestResourceMetadataKey = WorkRequestResourceMetadataKey.WorkRequestResourceMetadataKey;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;
import * as WorkRequestSummaryCollection from "./work-request-summary-collection";
export import WorkRequestSummaryCollection = WorkRequestSummaryCollection.WorkRequestSummaryCollection;

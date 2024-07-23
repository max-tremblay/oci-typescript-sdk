/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Summary of a work request.
 */
export interface WorkRequestSummary {
  /**
   * The asynchronous operation tracked by this work request.
   */
  "operationType": WorkRequestSummary.OperationType;
  /**
   * The current status of the work request.
   */
  "status": WorkRequestSummary.Status;
  /**
   * The OCID of the work request.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the work request.
   *
   */
  "compartmentId": string;
  /**
   * The resources that are affected by the work request.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * Progress of the work request in percentage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time the work request was accepted, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time the work request transitioned from ACCEPTED to IN_PROGRESS, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the work request reached a terminal state, either FAILED or SUCCEEDED, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequestSummary {
  export enum OperationType {
    EnableDataSafeConfiguration = "ENABLE_DATA_SAFE_CONFIGURATION",
    CreatePrivateEndpoint = "CREATE_PRIVATE_ENDPOINT",
    UpdatePrivateEndpoint = "UPDATE_PRIVATE_ENDPOINT",
    DeletePrivateEndpoint = "DELETE_PRIVATE_ENDPOINT",
    ChangePrivateEndpointCompartment = "CHANGE_PRIVATE_ENDPOINT_COMPARTMENT",
    CreateOnpremConnector = "CREATE_ONPREM_CONNECTOR",
    UpdateOnpremConnector = "UPDATE_ONPREM_CONNECTOR",
    DeleteOnpremConnector = "DELETE_ONPREM_CONNECTOR",
    UpdateOnpremConnectorWallet = "UPDATE_ONPREM_CONNECTOR_WALLET",
    ChangeOnpremConnectorCompartment = "CHANGE_ONPREM_CONNECTOR_COMPARTMENT",
    ProvisionPolicy = "PROVISION_POLICY",
    RetrievePolicy = "RETRIEVE_POLICY",
    UpdatePolicy = "UPDATE_POLICY",
    ChangePolicyCompartment = "CHANGE_POLICY_COMPARTMENT",
    CreateTargetDatabase = "CREATE_TARGET_DATABASE",
    UpdateTargetDatabase = "UPDATE_TARGET_DATABASE",
    ActivateTargetDatabase = "ACTIVATE_TARGET_DATABASE",
    DeactivateTargetDatabase = "DEACTIVATE_TARGET_DATABASE",
    DeleteTargetDatabase = "DELETE_TARGET_DATABASE",
    ChangeTargetDatabaseCompartment = "CHANGE_TARGET_DATABASE_COMPARTMENT",
    CreatePeerTargetDatabase = "CREATE_PEER_TARGET_DATABASE",
    UpdatePeerTargetDatabase = "UPDATE_PEER_TARGET_DATABASE",
    DeletePeerTargetDatabase = "DELETE_PEER_TARGET_DATABASE",
    RefreshTargetDatabase = "REFRESH_TARGET_DATABASE",
    CreateUserAssessment = "CREATE_USER_ASSESSMENT",
    AssessUserAssessment = "ASSESS_USER_ASSESSMENT",
    CreateSnapshotUserAssessment = "CREATE_SNAPSHOT_USER_ASSESSMENT",
    CreateScheduleUserAssessment = "CREATE_SCHEDULE_USER_ASSESSMENT",
    CompareWithBaselineUserAssessment = "COMPARE_WITH_BASELINE_USER_ASSESSMENT",
    DeleteUserAssessment = "DELETE_USER_ASSESSMENT",
    UpdateUserAssessment = "UPDATE_USER_ASSESSMENT",
    ChangeUserAssessmentCompartment = "CHANGE_USER_ASSESSMENT_COMPARTMENT",
    SetUserAssessmentBaseline = "SET_USER_ASSESSMENT_BASELINE",
    UnsetUserAssessmentBaseline = "UNSET_USER_ASSESSMENT_BASELINE",
    GenerateUserAssessmentReport = "GENERATE_USER_ASSESSMENT_REPORT",
    CreateSecurityAssessment = "CREATE_SECURITY_ASSESSMENT",
    CreateSecurityAssessmentNow = "CREATE_SECURITY_ASSESSMENT_NOW",
    AssessSecurityAssessment = "ASSESS_SECURITY_ASSESSMENT",
    CreateSnapshotSecurityAssessment = "CREATE_SNAPSHOT_SECURITY_ASSESSMENT",
    CreateScheduleSecurityAssessment = "CREATE_SCHEDULE_SECURITY_ASSESSMENT",
    CompareWithBaselineSecurityAssessment = "COMPARE_WITH_BASELINE_SECURITY_ASSESSMENT",
    DeleteSecurityAssessment = "DELETE_SECURITY_ASSESSMENT",
    UpdateSecurityAssessment = "UPDATE_SECURITY_ASSESSMENT",
    UpdateFindingRisk = "UPDATE_FINDING_RISK",
    ChangeSecurityAssessmentCompartment = "CHANGE_SECURITY_ASSESSMENT_COMPARTMENT",
    SetSecurityAssessmentBaseline = "SET_SECURITY_ASSESSMENT_BASELINE",
    UnsetSecurityAssessmentBaseline = "UNSET_SECURITY_ASSESSMENT_BASELINE",
    GenerateSecurityAssessmentReport = "GENERATE_SECURITY_ASSESSMENT_REPORT",
    CalculateVolume = "CALCULATE_VOLUME",
    CalculateCollectedVolume = "CALCULATE_COLLECTED_VOLUME",
    CreateDbSecurityConfig = "CREATE_DB_SECURITY_CONFIG",
    RefreshDbSecurityConfig = "REFRESH_DB_SECURITY_CONFIG",
    UpdateDbSecurityConfig = "UPDATE_DB_SECURITY_CONFIG",
    ChangeDbSecurityConfigCompartment = "CHANGE_DB_SECURITY_CONFIG_COMPARTMENT",
    GenerateFirewallPolicy = "GENERATE_FIREWALL_POLICY",
    UpdateFirewallPolicy = "UPDATE_FIREWALL_POLICY",
    ChangeFirewallPolicyCompartment = "CHANGE_FIREWALL_POLICY_COMPARTMENT",
    DeleteFirewallPolicy = "DELETE_FIREWALL_POLICY",
    CreateSqlCollection = "CREATE_SQL_COLLECTION",
    UpdateSqlCollection = "UPDATE_SQL_COLLECTION",
    StartSqlCollection = "START_SQL_COLLECTION",
    StopSqlCollection = "STOP_SQL_COLLECTION",
    DeleteSqlCollection = "DELETE_SQL_COLLECTION",
    ChangeSqlCollectionCompartment = "CHANGE_SQL_COLLECTION_COMPARTMENT",
    RefreshSqlCollectionLogInsights = "REFRESH_SQL_COLLECTION_LOG_INSIGHTS",
    PurgeSqlCollectionLogs = "PURGE_SQL_COLLECTION_LOGS",
    RefreshViolations = "REFRESH_VIOLATIONS",
    CreateArchival = "CREATE_ARCHIVAL",
    UpdateSecurityPolicy = "UPDATE_SECURITY_POLICY",
    ChangeSecurityPolicyCompartment = "CHANGE_SECURITY_POLICY_COMPARTMENT",
    UpdateSecurityPolicyDeployment = "UPDATE_SECURITY_POLICY_DEPLOYMENT",
    ChangeSecurityPolicyDeploymentCompartment = "CHANGE_SECURITY_POLICY_DEPLOYMENT_COMPARTMENT",
    AuditTrail = "AUDIT_TRAIL",
    DeleteAuditTrail = "DELETE_AUDIT_TRAIL",
    DiscoverAuditTrails = "DISCOVER_AUDIT_TRAILS",
    UpdateAuditTrail = "UPDATE_AUDIT_TRAIL",
    UpdateAuditProfile = "UPDATE_AUDIT_PROFILE",
    AuditChangeCompartment = "AUDIT_CHANGE_COMPARTMENT",
    CreateReportDefinition = "CREATE_REPORT_DEFINITION",
    UpdateReportDefinition = "UPDATE_REPORT_DEFINITION",
    ChangeReportDefinitionCompartment = "CHANGE_REPORT_DEFINITION_COMPARTMENT",
    DeleteReportDefinition = "DELETE_REPORT_DEFINITION",
    GenerateReport = "GENERATE_REPORT",
    ChangeReportCompartment = "CHANGE_REPORT_COMPARTMENT",
    DeleteArchiveRetrieval = "DELETE_ARCHIVE_RETRIEVAL",
    CreateArchiveRetrieval = "CREATE_ARCHIVE_RETRIEVAL",
    UpdateArchiveRetrieval = "UPDATE_ARCHIVE_RETRIEVAL",
    ChangeArchiveRetrievalCompartment = "CHANGE_ARCHIVE_RETRIEVAL_COMPARTMENT",
    UpdateAlert = "UPDATE_ALERT",
    TargetAlertPolicyAssociation = "TARGET_ALERT_POLICY_ASSOCIATION",
    CreateSensitiveDataModel = "CREATE_SENSITIVE_DATA_MODEL",
    UpdateSensitiveDataModel = "UPDATE_SENSITIVE_DATA_MODEL",
    DeleteSensitiveDataModel = "DELETE_SENSITIVE_DATA_MODEL",
    UploadSensitiveDataModel = "UPLOAD_SENSITIVE_DATA_MODEL",
    GenerateSensitiveDataModelForDownload = "GENERATE_SENSITIVE_DATA_MODEL_FOR_DOWNLOAD",
    CreateSensitiveColumn = "CREATE_SENSITIVE_COLUMN",
    UpdateSensitiveColumn = "UPDATE_SENSITIVE_COLUMN",
    PatchSensitiveColumns = "PATCH_SENSITIVE_COLUMNS",
    CreateDiscoveryJob = "CREATE_DISCOVERY_JOB",
    DeleteDiscoveryJob = "DELETE_DISCOVERY_JOB",
    PatchDiscoveryJobResult = "PATCH_DISCOVERY_JOB_RESULT",
    ApplyDiscoveryJobResult = "APPLY_DISCOVERY_JOB_RESULT",
    GenerateDiscoveryReport = "GENERATE_DISCOVERY_REPORT",
    CreateSensitiveType = "CREATE_SENSITIVE_TYPE",
    UpdateSensitiveType = "UPDATE_SENSITIVE_TYPE",
    CreateMaskingPolicy = "CREATE_MASKING_POLICY",
    UpdateMaskingPolicy = "UPDATE_MASKING_POLICY",
    DeleteMaskingPolicy = "DELETE_MASKING_POLICY",
    UploadMaskingPolicy = "UPLOAD_MASKING_POLICY",
    GenerateMaskingPolicyForDownload = "GENERATE_MASKING_POLICY_FOR_DOWNLOAD",
    CreateMaskingColumn = "CREATE_MASKING_COLUMN",
    UpdateMaskingColumn = "UPDATE_MASKING_COLUMN",
    PatchMaskingColumns = "PATCH_MASKING_COLUMNS",
    GenerateMaskingReport = "GENERATE_MASKING_REPORT",
    CreateLibraryMaskingFormat = "CREATE_LIBRARY_MASKING_FORMAT",
    UpdateLibraryMaskingFormat = "UPDATE_LIBRARY_MASKING_FORMAT",
    AddColumnsFromSdm = "ADD_COLUMNS_FROM_SDM",
    MaskingJob = "MASKING_JOB",
    CreateDifference = "CREATE_DIFFERENCE",
    DeleteDifference = "DELETE_DIFFERENCE",
    UpdateDifference = "UPDATE_DIFFERENCE",
    PatchDifference = "PATCH_DIFFERENCE",
    ApplyDifference = "APPLY_DIFFERENCE",
    MaskPolicyGenerateHealthReport = "MASK_POLICY_GENERATE_HEALTH_REPORT",
    MaskPolicyDeleteHealthReport = "MASK_POLICY_DELETE_HEALTH_REPORT",
    AbortMasking = "ABORT_MASKING",
    CreateSecurityPolicyReport = "CREATE_SECURITY_POLICY_REPORT",
    RefreshSecurityPolicyCache = "REFRESH_SECURITY_POLICY_CACHE",
    DeleteSecurityPolicyCache = "DELETE_SECURITY_POLICY_CACHE",
    CreateSchedule = "CREATE_SCHEDULE",
    RemoveScheduleReport = "REMOVE_SCHEDULE_REPORT",
    UpdateAllAlert = "UPDATE_ALL_ALERT",
    PatchTargetAlertPolicyAssociation = "PATCH_TARGET_ALERT_POLICY_ASSOCIATION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    Suspending = "SUSPENDING",
    Suspended = "SUSPENDED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

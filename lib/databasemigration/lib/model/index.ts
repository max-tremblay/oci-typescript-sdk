/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AdminCredentials from "./admin-credentials";
export import AdminCredentials = AdminCredentials.AdminCredentials;
import * as AdvancedParameterDataTypes from "./advanced-parameter-data-types";
export import AdvancedParameterDataTypes = AdvancedParameterDataTypes.AdvancedParameterDataTypes;
import * as AdvisorReport from "./advisor-report";
export import AdvisorReport = AdvisorReport.AdvisorReport;
import * as AdvisorReportBucketDetails from "./advisor-report-bucket-details";
export import AdvisorReportBucketDetails = AdvisorReportBucketDetails.AdvisorReportBucketDetails;
import * as AdvisorReportLocationDetails from "./advisor-report-location-details";
export import AdvisorReportLocationDetails = AdvisorReportLocationDetails.AdvisorReportLocationDetails;
import * as AdvisorResults from "./advisor-results";
export import AdvisorResults = AdvisorResults.AdvisorResults;
import * as ChangeConnectionCompartmentDetails from "./change-connection-compartment-details";
export import ChangeConnectionCompartmentDetails = ChangeConnectionCompartmentDetails.ChangeConnectionCompartmentDetails;
import * as ChangeMigrationCompartmentDetails from "./change-migration-compartment-details";
export import ChangeMigrationCompartmentDetails = ChangeMigrationCompartmentDetails.ChangeMigrationCompartmentDetails;
import * as CloneMigrationDetails from "./clone-migration-details";
export import CloneMigrationDetails = CloneMigrationDetails.CloneMigrationDetails;
import * as CompatibilityOption from "./compatibility-option";
export import CompatibilityOption = CompatibilityOption.CompatibilityOption;
import * as Connection from "./connection";
export import Connection = Connection.Connection;
import * as ConnectionCollection from "./connection-collection";
export import ConnectionCollection = ConnectionCollection.ConnectionCollection;
import * as ConnectionSummary from "./connection-summary";
export import ConnectionSummary = ConnectionSummary.ConnectionSummary;
import * as ConnectionType from "./connection-type";
export import ConnectionType = ConnectionType.ConnectionType;
import * as CreateAdminCredentials from "./create-admin-credentials";
export import CreateAdminCredentials = CreateAdminCredentials.CreateAdminCredentials;
import * as CreateConnectionDetails from "./create-connection-details";
export import CreateConnectionDetails = CreateConnectionDetails.CreateConnectionDetails;
import * as CreateDataPumpParameters from "./create-data-pump-parameters";
export import CreateDataPumpParameters = CreateDataPumpParameters.CreateDataPumpParameters;
import * as CreateDirectoryObject from "./create-directory-object";
export import CreateDirectoryObject = CreateDirectoryObject.CreateDirectoryObject;
import * as CreateExtract from "./create-extract";
export import CreateExtract = CreateExtract.CreateExtract;
import * as CreateGoldenGateHubDetails from "./create-golden-gate-hub-details";
export import CreateGoldenGateHubDetails = CreateGoldenGateHubDetails.CreateGoldenGateHubDetails;
import * as CreateHostDumpTransferDetails from "./create-host-dump-transfer-details";
export import CreateHostDumpTransferDetails = CreateHostDumpTransferDetails.CreateHostDumpTransferDetails;
import * as CreateMigrationDetails from "./create-migration-details";
export import CreateMigrationDetails = CreateMigrationDetails.CreateMigrationDetails;
import * as CreateMySqlAdvisorSettings from "./create-my-sql-advisor-settings";
export import CreateMySqlAdvisorSettings = CreateMySqlAdvisorSettings.CreateMySqlAdvisorSettings;
import * as CreateMySqlDataTransferMediumDetails from "./create-my-sql-data-transfer-medium-details";
export import CreateMySqlDataTransferMediumDetails = CreateMySqlDataTransferMediumDetails.CreateMySqlDataTransferMediumDetails;
import * as CreateMySqlGgsDeploymentDetails from "./create-my-sql-ggs-deployment-details";
export import CreateMySqlGgsDeploymentDetails = CreateMySqlGgsDeploymentDetails.CreateMySqlGgsDeploymentDetails;
import * as CreateMySqlInitialLoadSettings from "./create-my-sql-initial-load-settings";
export import CreateMySqlInitialLoadSettings = CreateMySqlInitialLoadSettings.CreateMySqlInitialLoadSettings;
import * as CreateObjectStoreBucket from "./create-object-store-bucket";
export import CreateObjectStoreBucket = CreateObjectStoreBucket.CreateObjectStoreBucket;
import * as CreateOracleAdvisorSettings from "./create-oracle-advisor-settings";
export import CreateOracleAdvisorSettings = CreateOracleAdvisorSettings.CreateOracleAdvisorSettings;
import * as CreateOracleDataTransferMediumDetails from "./create-oracle-data-transfer-medium-details";
export import CreateOracleDataTransferMediumDetails = CreateOracleDataTransferMediumDetails.CreateOracleDataTransferMediumDetails;
import * as CreateOracleGgsDeploymentDetails from "./create-oracle-ggs-deployment-details";
export import CreateOracleGgsDeploymentDetails = CreateOracleGgsDeploymentDetails.CreateOracleGgsDeploymentDetails;
import * as CreateOracleInitialLoadSettings from "./create-oracle-initial-load-settings";
export import CreateOracleInitialLoadSettings = CreateOracleInitialLoadSettings.CreateOracleInitialLoadSettings;
import * as CreateParameterFileVersionDetails from "./create-parameter-file-version-details";
export import CreateParameterFileVersionDetails = CreateParameterFileVersionDetails.CreateParameterFileVersionDetails;
import * as CreateReplicat from "./create-replicat";
export import CreateReplicat = CreateReplicat.CreateReplicat;
import * as CreateTargetTypeTablespaceDetails from "./create-target-type-tablespace-details";
export import CreateTargetTypeTablespaceDetails = CreateTargetTypeTablespaceDetails.CreateTargetTypeTablespaceDetails;
import * as DataPumpEstimate from "./data-pump-estimate";
export import DataPumpEstimate = DataPumpEstimate.DataPumpEstimate;
import * as DataPumpExcludeParameters from "./data-pump-exclude-parameters";
export import DataPumpExcludeParameters = DataPumpExcludeParameters.DataPumpExcludeParameters;
import * as DataPumpParameters from "./data-pump-parameters";
export import DataPumpParameters = DataPumpParameters.DataPumpParameters;
import * as DataPumpTableExistsAction from "./data-pump-table-exists-action";
export import DataPumpTableExistsAction = DataPumpTableExistsAction.DataPumpTableExistsAction;
import * as DataPumpTablespaceBlockSizesInKb from "./data-pump-tablespace-block-sizes-in-kb";
export import DataPumpTablespaceBlockSizesInKb = DataPumpTablespaceBlockSizesInKb.DataPumpTablespaceBlockSizesInKb;
import * as DatabaseCombination from "./database-combination";
export import DatabaseCombination = DatabaseCombination.DatabaseCombination;
import * as DiagnosticsResult from "./diagnostics-result";
export import DiagnosticsResult = DiagnosticsResult.DiagnosticsResult;
import * as DirectoryObject from "./directory-object";
export import DirectoryObject = DirectoryObject.DirectoryObject;
import * as ExcludedObjectSummary from "./excluded-object-summary";
export import ExcludedObjectSummary = ExcludedObjectSummary.ExcludedObjectSummary;
import * as ExcludedObjectSummaryCollection from "./excluded-object-summary-collection";
export import ExcludedObjectSummaryCollection = ExcludedObjectSummaryCollection.ExcludedObjectSummaryCollection;
import * as Extract from "./extract";
export import Extract = Extract.Extract;
import * as ExtractPerformanceProfile from "./extract-performance-profile";
export import ExtractPerformanceProfile = ExtractPerformanceProfile.ExtractPerformanceProfile;
import * as GgsDeployment from "./ggs-deployment";
export import GgsDeployment = GgsDeployment.GgsDeployment;
import * as GoldenGateHubDetails from "./golden-gate-hub-details";
export import GoldenGateHubDetails = GoldenGateHubDetails.GoldenGateHubDetails;
import * as HandleGrantErrors from "./handle-grant-errors";
export import HandleGrantErrors = HandleGrantErrors.HandleGrantErrors;
import * as HostDumpTransferDetails from "./host-dump-transfer-details";
export import HostDumpTransferDetails = HostDumpTransferDetails.HostDumpTransferDetails;
import * as IngressIpDetails from "./ingress-ip-details";
export import IngressIpDetails = IngressIpDetails.IngressIpDetails;
import * as Job from "./job";
export import Job = Job.Job;
import * as JobCollection from "./job-collection";
export import JobCollection = JobCollection.JobCollection;
import * as JobLifecycleStates from "./job-lifecycle-states";
export import JobLifecycleStates = JobLifecycleStates.JobLifecycleStates;
import * as JobModeMySql from "./job-mode-my-sql";
export import JobModeMySql = JobModeMySql.JobModeMySql;
import * as JobModeOracle from "./job-mode-oracle";
export import JobModeOracle = JobModeOracle.JobModeOracle;
import * as JobOutputSummary from "./job-output-summary";
export import JobOutputSummary = JobOutputSummary.JobOutputSummary;
import * as JobOutputSummaryCollection from "./job-output-summary-collection";
export import JobOutputSummaryCollection = JobOutputSummaryCollection.JobOutputSummaryCollection;
import * as JobParameterFileVersionKind from "./job-parameter-file-version-kind";
export import JobParameterFileVersionKind = JobParameterFileVersionKind.JobParameterFileVersionKind;
import * as JobPhaseStatus from "./job-phase-status";
export import JobPhaseStatus = JobPhaseStatus.JobPhaseStatus;
import * as JobSummary from "./job-summary";
export import JobSummary = JobSummary.JobSummary;
import * as JobTypes from "./job-types";
export import JobTypes = JobTypes.JobTypes;
import * as LifecycleStates from "./lifecycle-states";
export import LifecycleStates = LifecycleStates.LifecycleStates;
import * as LogLocationBucketDetails from "./log-location-bucket-details";
export import LogLocationBucketDetails = LogLocationBucketDetails.LogLocationBucketDetails;
import * as MetadataRemap from "./metadata-remap";
export import MetadataRemap = MetadataRemap.MetadataRemap;
import * as Migration from "./migration";
export import Migration = Migration.Migration;
import * as MigrationCollection from "./migration-collection";
export import MigrationCollection = MigrationCollection.MigrationCollection;
import * as MigrationDatabaseTargetTypes from "./migration-database-target-types";
export import MigrationDatabaseTargetTypes = MigrationDatabaseTargetTypes.MigrationDatabaseTargetTypes;
import * as MigrationDatabaseTargetTypesUpdate from "./migration-database-target-types-update";
export import MigrationDatabaseTargetTypesUpdate = MigrationDatabaseTargetTypesUpdate.MigrationDatabaseTargetTypesUpdate;
import * as MigrationJobProgressResource from "./migration-job-progress-resource";
export import MigrationJobProgressResource = MigrationJobProgressResource.MigrationJobProgressResource;
import * as MigrationJobProgressSummary from "./migration-job-progress-summary";
export import MigrationJobProgressSummary = MigrationJobProgressSummary.MigrationJobProgressSummary;
import * as MigrationLifecycleStates from "./migration-lifecycle-states";
export import MigrationLifecycleStates = MigrationLifecycleStates.MigrationLifecycleStates;
import * as MigrationObjectCollection from "./migration-object-collection";
export import MigrationObjectCollection = MigrationObjectCollection.MigrationObjectCollection;
import * as MigrationObjectTypeSummary from "./migration-object-type-summary";
export import MigrationObjectTypeSummary = MigrationObjectTypeSummary.MigrationObjectTypeSummary;
import * as MigrationObjectTypeSummaryCollection from "./migration-object-type-summary-collection";
export import MigrationObjectTypeSummaryCollection = MigrationObjectTypeSummaryCollection.MigrationObjectTypeSummaryCollection;
import * as MigrationParameterBase from "./migration-parameter-base";
export import MigrationParameterBase = MigrationParameterBase.MigrationParameterBase;
import * as MigrationParameterDetails from "./migration-parameter-details";
export import MigrationParameterDetails = MigrationParameterDetails.MigrationParameterDetails;
import * as MigrationParameterSummary from "./migration-parameter-summary";
export import MigrationParameterSummary = MigrationParameterSummary.MigrationParameterSummary;
import * as MigrationParameterSummaryCollection from "./migration-parameter-summary-collection";
export import MigrationParameterSummaryCollection = MigrationParameterSummaryCollection.MigrationParameterSummaryCollection;
import * as MigrationPhaseCollection from "./migration-phase-collection";
export import MigrationPhaseCollection = MigrationPhaseCollection.MigrationPhaseCollection;
import * as MigrationPhaseSummary from "./migration-phase-summary";
export import MigrationPhaseSummary = MigrationPhaseSummary.MigrationPhaseSummary;
import * as MigrationStatus from "./migration-status";
export import MigrationStatus = MigrationStatus.MigrationStatus;
import * as MigrationSummary from "./migration-summary";
export import MigrationSummary = MigrationSummary.MigrationSummary;
import * as MigrationTypes from "./migration-types";
export import MigrationTypes = MigrationTypes.MigrationTypes;
import * as MySqlAdvisorSettings from "./my-sql-advisor-settings";
export import MySqlAdvisorSettings = MySqlAdvisorSettings.MySqlAdvisorSettings;
import * as MySqlDataTransferMediumDetails from "./my-sql-data-transfer-medium-details";
export import MySqlDataTransferMediumDetails = MySqlDataTransferMediumDetails.MySqlDataTransferMediumDetails;
import * as MySqlDatabaseObject from "./my-sql-database-object";
export import MySqlDatabaseObject = MySqlDatabaseObject.MySqlDatabaseObject;
import * as MySqlDatabaseObjectSummary from "./my-sql-database-object-summary";
export import MySqlDatabaseObjectSummary = MySqlDatabaseObjectSummary.MySqlDatabaseObjectSummary;
import * as MySqlGgsDeploymentDetails from "./my-sql-ggs-deployment-details";
export import MySqlGgsDeploymentDetails = MySqlGgsDeploymentDetails.MySqlGgsDeploymentDetails;
import * as MySqlInitialLoadSettings from "./my-sql-initial-load-settings";
export import MySqlInitialLoadSettings = MySqlInitialLoadSettings.MySqlInitialLoadSettings;
import * as NameValuePair from "./name-value-pair";
export import NameValuePair = NameValuePair.NameValuePair;
import * as ObjectStatus from "./object-status";
export import ObjectStatus = ObjectStatus.ObjectStatus;
import * as ObjectStoreBucket from "./object-store-bucket";
export import ObjectStoreBucket = ObjectStoreBucket.ObjectStoreBucket;
import * as OdmsJobPhases from "./odms-job-phases";
export import OdmsJobPhases = OdmsJobPhases.OdmsJobPhases;
import * as OdmsPhaseActions from "./odms-phase-actions";
export import OdmsPhaseActions = OdmsPhaseActions.OdmsPhaseActions;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationTypes from "./operation-types";
export import OperationTypes = OperationTypes.OperationTypes;
import * as OracleAdvisorSettings from "./oracle-advisor-settings";
export import OracleAdvisorSettings = OracleAdvisorSettings.OracleAdvisorSettings;
import * as OracleDataTransferMediumDetails from "./oracle-data-transfer-medium-details";
export import OracleDataTransferMediumDetails = OracleDataTransferMediumDetails.OracleDataTransferMediumDetails;
import * as OracleDatabaseObject from "./oracle-database-object";
export import OracleDatabaseObject = OracleDatabaseObject.OracleDatabaseObject;
import * as OracleDatabaseObjectSummary from "./oracle-database-object-summary";
export import OracleDatabaseObjectSummary = OracleDatabaseObjectSummary.OracleDatabaseObjectSummary;
import * as OracleGgsDeploymentDetails from "./oracle-ggs-deployment-details";
export import OracleGgsDeploymentDetails = OracleGgsDeploymentDetails.OracleGgsDeploymentDetails;
import * as OracleInitialLoadSettings from "./oracle-initial-load-settings";
export import OracleInitialLoadSettings = OracleInitialLoadSettings.OracleInitialLoadSettings;
import * as ParameterFileVersion from "./parameter-file-version";
export import ParameterFileVersion = ParameterFileVersion.ParameterFileVersion;
import * as ParameterFileVersionCollection from "./parameter-file-version-collection";
export import ParameterFileVersionCollection = ParameterFileVersionCollection.ParameterFileVersionCollection;
import * as ParameterFileVersionSummary from "./parameter-file-version-summary";
export import ParameterFileVersionSummary = ParameterFileVersionSummary.ParameterFileVersionSummary;
import * as PhaseExtractEntry from "./phase-extract-entry";
export import PhaseExtractEntry = PhaseExtractEntry.PhaseExtractEntry;
import * as PhaseExtractTypes from "./phase-extract-types";
export import PhaseExtractTypes = PhaseExtractTypes.PhaseExtractTypes;
import * as PhaseStatus from "./phase-status";
export import PhaseStatus = PhaseStatus.PhaseStatus;
import * as PrimaryKeyCompatibility from "./primary-key-compatibility";
export import PrimaryKeyCompatibility = PrimaryKeyCompatibility.PrimaryKeyCompatibility;
import * as ReasonKeywords from "./reason-keywords";
export import ReasonKeywords = ReasonKeywords.ReasonKeywords;
import * as Replicat from "./replicat";
export import Replicat = Replicat.Replicat;
import * as ReplicatPerformanceProfile from "./replicat-performance-profile";
export import ReplicatPerformanceProfile = ReplicatPerformanceProfile.ReplicatPerformanceProfile;
import * as ResultError from "./result-error";
export import ResultError = ResultError.ResultError;
import * as ResultType from "./result-type";
export import ResultType = ResultType.ResultType;
import * as ResumeJobDetails from "./resume-job-details";
export import ResumeJobDetails = ResumeJobDetails.ResumeJobDetails;
import * as SortOrders from "./sort-orders";
export import SortOrders = SortOrders.SortOrders;
import * as StartMigrationDetails from "./start-migration-details";
export import StartMigrationDetails = StartMigrationDetails.StartMigrationDetails;
import * as TargetTypeTablespaceDetails from "./target-type-tablespace-details";
export import TargetTypeTablespaceDetails = TargetTypeTablespaceDetails.TargetTypeTablespaceDetails;
import * as TechnologyType from "./technology-type";
export import TechnologyType = TechnologyType.TechnologyType;
import * as UnsupportedDatabaseObject from "./unsupported-database-object";
export import UnsupportedDatabaseObject = UnsupportedDatabaseObject.UnsupportedDatabaseObject;
import * as UpdateAdminCredentials from "./update-admin-credentials";
export import UpdateAdminCredentials = UpdateAdminCredentials.UpdateAdminCredentials;
import * as UpdateConnectionDetails from "./update-connection-details";
export import UpdateConnectionDetails = UpdateConnectionDetails.UpdateConnectionDetails;
import * as UpdateDataPumpParameters from "./update-data-pump-parameters";
export import UpdateDataPumpParameters = UpdateDataPumpParameters.UpdateDataPumpParameters;
import * as UpdateDirectoryObject from "./update-directory-object";
export import UpdateDirectoryObject = UpdateDirectoryObject.UpdateDirectoryObject;
import * as UpdateExtract from "./update-extract";
export import UpdateExtract = UpdateExtract.UpdateExtract;
import * as UpdateGoldenGateHubDetails from "./update-golden-gate-hub-details";
export import UpdateGoldenGateHubDetails = UpdateGoldenGateHubDetails.UpdateGoldenGateHubDetails;
import * as UpdateHostDumpTransferDetails from "./update-host-dump-transfer-details";
export import UpdateHostDumpTransferDetails = UpdateHostDumpTransferDetails.UpdateHostDumpTransferDetails;
import * as UpdateJobDetails from "./update-job-details";
export import UpdateJobDetails = UpdateJobDetails.UpdateJobDetails;
import * as UpdateMigrationDetails from "./update-migration-details";
export import UpdateMigrationDetails = UpdateMigrationDetails.UpdateMigrationDetails;
import * as UpdateMySqlAdvisorSettings from "./update-my-sql-advisor-settings";
export import UpdateMySqlAdvisorSettings = UpdateMySqlAdvisorSettings.UpdateMySqlAdvisorSettings;
import * as UpdateMySqlDataTransferMediumDetails from "./update-my-sql-data-transfer-medium-details";
export import UpdateMySqlDataTransferMediumDetails = UpdateMySqlDataTransferMediumDetails.UpdateMySqlDataTransferMediumDetails;
import * as UpdateMySqlGgsDeploymentDetails from "./update-my-sql-ggs-deployment-details";
export import UpdateMySqlGgsDeploymentDetails = UpdateMySqlGgsDeploymentDetails.UpdateMySqlGgsDeploymentDetails;
import * as UpdateMySqlInitialLoadSettings from "./update-my-sql-initial-load-settings";
export import UpdateMySqlInitialLoadSettings = UpdateMySqlInitialLoadSettings.UpdateMySqlInitialLoadSettings;
import * as UpdateObjectStoreBucket from "./update-object-store-bucket";
export import UpdateObjectStoreBucket = UpdateObjectStoreBucket.UpdateObjectStoreBucket;
import * as UpdateOracleAdvisorSettings from "./update-oracle-advisor-settings";
export import UpdateOracleAdvisorSettings = UpdateOracleAdvisorSettings.UpdateOracleAdvisorSettings;
import * as UpdateOracleDataTransferMediumDetails from "./update-oracle-data-transfer-medium-details";
export import UpdateOracleDataTransferMediumDetails = UpdateOracleDataTransferMediumDetails.UpdateOracleDataTransferMediumDetails;
import * as UpdateOracleGgsDeploymentDetails from "./update-oracle-ggs-deployment-details";
export import UpdateOracleGgsDeploymentDetails = UpdateOracleGgsDeploymentDetails.UpdateOracleGgsDeploymentDetails;
import * as UpdateOracleInitialLoadSettings from "./update-oracle-initial-load-settings";
export import UpdateOracleInitialLoadSettings = UpdateOracleInitialLoadSettings.UpdateOracleInitialLoadSettings;
import * as UpdateReplicat from "./update-replicat";
export import UpdateReplicat = UpdateReplicat.UpdateReplicat;
import * as UpdateTargetTypeTablespaceDetails from "./update-target-type-tablespace-details";
export import UpdateTargetTypeTablespaceDetails = UpdateTargetTypeTablespaceDetails.UpdateTargetTypeTablespaceDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestCollection from "./work-request-collection";
export import WorkRequestCollection = WorkRequestCollection.WorkRequestCollection;
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
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;

import * as ADBDedicatedAutoCreateTablespaceDetails from "./a-db-dedicated-auto-create-tablespace-details";
export import ADBDedicatedAutoCreateTablespaceDetails = ADBDedicatedAutoCreateTablespaceDetails.ADBDedicatedAutoCreateTablespaceDetails;
import * as ADBDedicatedRemapTargetTablespaceDetails from "./a-db-dedicated-remap-target-tablespace-details";
export import ADBDedicatedRemapTargetTablespaceDetails = ADBDedicatedRemapTargetTablespaceDetails.ADBDedicatedRemapTargetTablespaceDetails;
import * as ADBServerlesTablespaceDetails from "./a-db-serverles-tablespace-details";
export import ADBServerlesTablespaceDetails = ADBServerlesTablespaceDetails.ADBServerlesTablespaceDetails;
import * as CreateADBDedicatedAutoCreateTablespaceDetails from "./create-ad-bdedicated-auto-create-tablespace-details";
export import CreateADBDedicatedAutoCreateTablespaceDetails = CreateADBDedicatedAutoCreateTablespaceDetails.CreateADBDedicatedAutoCreateTablespaceDetails;
import * as CreateADBDedicatedRemapTargetTablespaceDetails from "./create-ad-bdedicated-remap-target-tablespace-details";
export import CreateADBDedicatedRemapTargetTablespaceDetails = CreateADBDedicatedRemapTargetTablespaceDetails.CreateADBDedicatedRemapTargetTablespaceDetails;
import * as CreateADBServerlesTablespaceDetails from "./create-ad-bserverles-tablespace-details";
export import CreateADBServerlesTablespaceDetails = CreateADBServerlesTablespaceDetails.CreateADBServerlesTablespaceDetails;
import * as CreateCurlTransferDetails from "./create-curl-transfer-details";
export import CreateCurlTransferDetails = CreateCurlTransferDetails.CreateCurlTransferDetails;
import * as CreateMySqlMigrationDetails from "./create-my-sql-migration-details";
export import CreateMySqlMigrationDetails = CreateMySqlMigrationDetails.CreateMySqlMigrationDetails;
import * as CreateMySqlObjectStorageDataTransferMediumDetails from "./create-my-sql-object-storage-data-transfer-medium-details";
export import CreateMySqlObjectStorageDataTransferMediumDetails = CreateMySqlObjectStorageDataTransferMediumDetails.CreateMySqlObjectStorageDataTransferMediumDetails;
import * as CreateMysqlConnectionDetails from "./create-mysql-connection-details";
export import CreateMysqlConnectionDetails = CreateMysqlConnectionDetails.CreateMysqlConnectionDetails;
import * as CreateNonADBAutoCreateTablespaceDetails from "./create-non-ad-bauto-create-tablespace-details";
export import CreateNonADBAutoCreateTablespaceDetails = CreateNonADBAutoCreateTablespaceDetails.CreateNonADBAutoCreateTablespaceDetails;
import * as CreateNonADBRemapTablespaceDetails from "./create-non-ad-bremap-tablespace-details";
export import CreateNonADBRemapTablespaceDetails = CreateNonADBRemapTablespaceDetails.CreateNonADBRemapTablespaceDetails;
import * as CreateOciCliDumpTransferDetails from "./create-oci-cli-dump-transfer-details";
export import CreateOciCliDumpTransferDetails = CreateOciCliDumpTransferDetails.CreateOciCliDumpTransferDetails;
import * as CreateOracleAwsS3DataTransferMediumDetails from "./create-oracle-aws-s3-data-transfer-medium-details";
export import CreateOracleAwsS3DataTransferMediumDetails = CreateOracleAwsS3DataTransferMediumDetails.CreateOracleAwsS3DataTransferMediumDetails;
import * as CreateOracleConnectionDetails from "./create-oracle-connection-details";
export import CreateOracleConnectionDetails = CreateOracleConnectionDetails.CreateOracleConnectionDetails;
import * as CreateOracleDbLinkDataTransferMediumDetails from "./create-oracle-db-link-data-transfer-medium-details";
export import CreateOracleDbLinkDataTransferMediumDetails = CreateOracleDbLinkDataTransferMediumDetails.CreateOracleDbLinkDataTransferMediumDetails;
import * as CreateOracleMigrationDetails from "./create-oracle-migration-details";
export import CreateOracleMigrationDetails = CreateOracleMigrationDetails.CreateOracleMigrationDetails;
import * as CreateOracleNfsDataTransferMediumDetails from "./create-oracle-nfs-data-transfer-medium-details";
export import CreateOracleNfsDataTransferMediumDetails = CreateOracleNfsDataTransferMediumDetails.CreateOracleNfsDataTransferMediumDetails;
import * as CreateOracleObjectStorageDataTransferMediumDetails from "./create-oracle-object-storage-data-transfer-medium-details";
export import CreateOracleObjectStorageDataTransferMediumDetails = CreateOracleObjectStorageDataTransferMediumDetails.CreateOracleObjectStorageDataTransferMediumDetails;
import * as CurlTransferDetails from "./curl-transfer-details";
export import CurlTransferDetails = CurlTransferDetails.CurlTransferDetails;
import * as MySqlCloneMigrationDetails from "./my-sql-clone-migration-details";
export import MySqlCloneMigrationDetails = MySqlCloneMigrationDetails.MySqlCloneMigrationDetails;
import * as MySqlMigration from "./my-sql-migration";
export import MySqlMigration = MySqlMigration.MySqlMigration;
import * as MySqlMigrationObjectCollection from "./my-sql-migration-object-collection";
export import MySqlMigrationObjectCollection = MySqlMigrationObjectCollection.MySqlMigrationObjectCollection;
import * as MySqlMigrationSummary from "./my-sql-migration-summary";
export import MySqlMigrationSummary = MySqlMigrationSummary.MySqlMigrationSummary;
import * as MySqlObjectStorageDataTransferMediumDetails from "./my-sql-object-storage-data-transfer-medium-details";
export import MySqlObjectStorageDataTransferMediumDetails = MySqlObjectStorageDataTransferMediumDetails.MySqlObjectStorageDataTransferMediumDetails;
import * as MysqlConnection from "./mysql-connection";
export import MysqlConnection = MysqlConnection.MysqlConnection;
import * as MysqlConnectionSummary from "./mysql-connection-summary";
export import MysqlConnectionSummary = MysqlConnectionSummary.MysqlConnectionSummary;
import * as NonADBAutoCreateTablespaceDetails from "./non-ad-bauto-create-tablespace-details";
export import NonADBAutoCreateTablespaceDetails = NonADBAutoCreateTablespaceDetails.NonADBAutoCreateTablespaceDetails;
import * as NonADBRemapTablespaceDetails from "./non-ad-bremap-tablespace-details";
export import NonADBRemapTablespaceDetails = NonADBRemapTablespaceDetails.NonADBRemapTablespaceDetails;
import * as OciCliDumpTransferDetails from "./oci-cli-dump-transfer-details";
export import OciCliDumpTransferDetails = OciCliDumpTransferDetails.OciCliDumpTransferDetails;
import * as OracleAwsS3DataTransferMediumDetails from "./oracle-aws-s3-data-transfer-medium-details";
export import OracleAwsS3DataTransferMediumDetails = OracleAwsS3DataTransferMediumDetails.OracleAwsS3DataTransferMediumDetails;
import * as OracleCloneMigrationDetails from "./oracle-clone-migration-details";
export import OracleCloneMigrationDetails = OracleCloneMigrationDetails.OracleCloneMigrationDetails;
import * as OracleConnection from "./oracle-connection";
export import OracleConnection = OracleConnection.OracleConnection;
import * as OracleConnectionSummary from "./oracle-connection-summary";
export import OracleConnectionSummary = OracleConnectionSummary.OracleConnectionSummary;
import * as OracleDbLinkDataTransferMediumDetails from "./oracle-db-link-data-transfer-medium-details";
export import OracleDbLinkDataTransferMediumDetails = OracleDbLinkDataTransferMediumDetails.OracleDbLinkDataTransferMediumDetails;
import * as OracleMigration from "./oracle-migration";
export import OracleMigration = OracleMigration.OracleMigration;
import * as OracleMigrationObjectCollection from "./oracle-migration-object-collection";
export import OracleMigrationObjectCollection = OracleMigrationObjectCollection.OracleMigrationObjectCollection;
import * as OracleMigrationSummary from "./oracle-migration-summary";
export import OracleMigrationSummary = OracleMigrationSummary.OracleMigrationSummary;
import * as OracleNfsDataTransferMediumDetails from "./oracle-nfs-data-transfer-medium-details";
export import OracleNfsDataTransferMediumDetails = OracleNfsDataTransferMediumDetails.OracleNfsDataTransferMediumDetails;
import * as OracleObjectStorageDataTransferMediumDetails from "./oracle-object-storage-data-transfer-medium-details";
export import OracleObjectStorageDataTransferMediumDetails = OracleObjectStorageDataTransferMediumDetails.OracleObjectStorageDataTransferMediumDetails;
import * as UpdateADBDedicatedAutoCreateTablespaceDetails from "./update-ad-bdedicated-auto-create-tablespace-details";
export import UpdateADBDedicatedAutoCreateTablespaceDetails = UpdateADBDedicatedAutoCreateTablespaceDetails.UpdateADBDedicatedAutoCreateTablespaceDetails;
import * as UpdateADBDedicatedRemapTargetTablespaceDetails from "./update-ad-bdedicated-remap-target-tablespace-details";
export import UpdateADBDedicatedRemapTargetTablespaceDetails = UpdateADBDedicatedRemapTargetTablespaceDetails.UpdateADBDedicatedRemapTargetTablespaceDetails;
import * as UpdateADBServerlesTablespaceDetails from "./update-ad-bserverles-tablespace-details";
export import UpdateADBServerlesTablespaceDetails = UpdateADBServerlesTablespaceDetails.UpdateADBServerlesTablespaceDetails;
import * as UpdateCurlTransferDetails from "./update-curl-transfer-details";
export import UpdateCurlTransferDetails = UpdateCurlTransferDetails.UpdateCurlTransferDetails;
import * as UpdateMySqlMigrationDetails from "./update-my-sql-migration-details";
export import UpdateMySqlMigrationDetails = UpdateMySqlMigrationDetails.UpdateMySqlMigrationDetails;
import * as UpdateMySqlObjectStorageDataTransferMediumDetails from "./update-my-sql-object-storage-data-transfer-medium-details";
export import UpdateMySqlObjectStorageDataTransferMediumDetails = UpdateMySqlObjectStorageDataTransferMediumDetails.UpdateMySqlObjectStorageDataTransferMediumDetails;
import * as UpdateMysqlConnectionDetails from "./update-mysql-connection-details";
export import UpdateMysqlConnectionDetails = UpdateMysqlConnectionDetails.UpdateMysqlConnectionDetails;
import * as UpdateNonADBAutoCreateTablespaceDetails from "./update-non-ad-bauto-create-tablespace-details";
export import UpdateNonADBAutoCreateTablespaceDetails = UpdateNonADBAutoCreateTablespaceDetails.UpdateNonADBAutoCreateTablespaceDetails;
import * as UpdateNonADBRemapTablespaceDetails from "./update-non-ad-bremap-tablespace-details";
export import UpdateNonADBRemapTablespaceDetails = UpdateNonADBRemapTablespaceDetails.UpdateNonADBRemapTablespaceDetails;
import * as UpdateOciCliDumpTransferDetails from "./update-oci-cli-dump-transfer-details";
export import UpdateOciCliDumpTransferDetails = UpdateOciCliDumpTransferDetails.UpdateOciCliDumpTransferDetails;
import * as UpdateOracleAwsS3DataTransferMediumDetails from "./update-oracle-aws-s3-data-transfer-medium-details";
export import UpdateOracleAwsS3DataTransferMediumDetails = UpdateOracleAwsS3DataTransferMediumDetails.UpdateOracleAwsS3DataTransferMediumDetails;
import * as UpdateOracleConnectionDetails from "./update-oracle-connection-details";
export import UpdateOracleConnectionDetails = UpdateOracleConnectionDetails.UpdateOracleConnectionDetails;
import * as UpdateOracleDbLinkDataTransferMediumDetails from "./update-oracle-db-link-data-transfer-medium-details";
export import UpdateOracleDbLinkDataTransferMediumDetails = UpdateOracleDbLinkDataTransferMediumDetails.UpdateOracleDbLinkDataTransferMediumDetails;
import * as UpdateOracleMigrationDetails from "./update-oracle-migration-details";
export import UpdateOracleMigrationDetails = UpdateOracleMigrationDetails.UpdateOracleMigrationDetails;
import * as UpdateOracleNfsDataTransferMediumDetails from "./update-oracle-nfs-data-transfer-medium-details";
export import UpdateOracleNfsDataTransferMediumDetails = UpdateOracleNfsDataTransferMediumDetails.UpdateOracleNfsDataTransferMediumDetails;
import * as UpdateOracleObjectStorageDataTransferMediumDetails from "./update-oracle-object-storage-data-transfer-medium-details";
export import UpdateOracleObjectStorageDataTransferMediumDetails = UpdateOracleObjectStorageDataTransferMediumDetails.UpdateOracleObjectStorageDataTransferMediumDetails;
import * as UpdateTargetDefaultsAutoCreateTablespaceDetails from "./update-target-defaults-auto-create-tablespace-details";
export import UpdateTargetDefaultsAutoCreateTablespaceDetails = UpdateTargetDefaultsAutoCreateTablespaceDetails.UpdateTargetDefaultsAutoCreateTablespaceDetails;
import * as UpdateTargetDefaultsRemapTablespaceDetails from "./update-target-defaults-remap-tablespace-details";
export import UpdateTargetDefaultsRemapTablespaceDetails = UpdateTargetDefaultsRemapTablespaceDetails.UpdateTargetDefaultsRemapTablespaceDetails;

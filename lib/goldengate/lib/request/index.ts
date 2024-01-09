/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as CancelDeploymentBackupRequest from "./cancel-deployment-backup-request";
export import CancelDeploymentBackupRequest = CancelDeploymentBackupRequest.CancelDeploymentBackupRequest;
import * as CancelDeploymentUpgradeRequest from "./cancel-deployment-upgrade-request";
export import CancelDeploymentUpgradeRequest = CancelDeploymentUpgradeRequest.CancelDeploymentUpgradeRequest;
import * as CancelSnoozeDeploymentUpgradeRequest from "./cancel-snooze-deployment-upgrade-request";
export import CancelSnoozeDeploymentUpgradeRequest = CancelSnoozeDeploymentUpgradeRequest.CancelSnoozeDeploymentUpgradeRequest;
import * as ChangeConnectionCompartmentRequest from "./change-connection-compartment-request";
export import ChangeConnectionCompartmentRequest = ChangeConnectionCompartmentRequest.ChangeConnectionCompartmentRequest;
import * as ChangeDatabaseRegistrationCompartmentRequest from "./change-database-registration-compartment-request";
export import ChangeDatabaseRegistrationCompartmentRequest = ChangeDatabaseRegistrationCompartmentRequest.ChangeDatabaseRegistrationCompartmentRequest;
import * as ChangeDeploymentBackupCompartmentRequest from "./change-deployment-backup-compartment-request";
export import ChangeDeploymentBackupCompartmentRequest = ChangeDeploymentBackupCompartmentRequest.ChangeDeploymentBackupCompartmentRequest;
import * as ChangeDeploymentCompartmentRequest from "./change-deployment-compartment-request";
export import ChangeDeploymentCompartmentRequest = ChangeDeploymentCompartmentRequest.ChangeDeploymentCompartmentRequest;
import * as CollectDeploymentDiagnosticRequest from "./collect-deployment-diagnostic-request";
export import CollectDeploymentDiagnosticRequest = CollectDeploymentDiagnosticRequest.CollectDeploymentDiagnosticRequest;
import * as CopyDeploymentBackupRequest from "./copy-deployment-backup-request";
export import CopyDeploymentBackupRequest = CopyDeploymentBackupRequest.CopyDeploymentBackupRequest;
import * as CreateCertificateRequest from "./create-certificate-request";
export import CreateCertificateRequest = CreateCertificateRequest.CreateCertificateRequest;
import * as CreateConnectionRequest from "./create-connection-request";
export import CreateConnectionRequest = CreateConnectionRequest.CreateConnectionRequest;
import * as CreateConnectionAssignmentRequest from "./create-connection-assignment-request";
export import CreateConnectionAssignmentRequest = CreateConnectionAssignmentRequest.CreateConnectionAssignmentRequest;
import * as CreateDatabaseRegistrationRequest from "./create-database-registration-request";
export import CreateDatabaseRegistrationRequest = CreateDatabaseRegistrationRequest.CreateDatabaseRegistrationRequest;
import * as CreateDeploymentRequest from "./create-deployment-request";
export import CreateDeploymentRequest = CreateDeploymentRequest.CreateDeploymentRequest;
import * as CreateDeploymentBackupRequest from "./create-deployment-backup-request";
export import CreateDeploymentBackupRequest = CreateDeploymentBackupRequest.CreateDeploymentBackupRequest;
import * as DeleteCertificateRequest from "./delete-certificate-request";
export import DeleteCertificateRequest = DeleteCertificateRequest.DeleteCertificateRequest;
import * as DeleteConnectionRequest from "./delete-connection-request";
export import DeleteConnectionRequest = DeleteConnectionRequest.DeleteConnectionRequest;
import * as DeleteConnectionAssignmentRequest from "./delete-connection-assignment-request";
export import DeleteConnectionAssignmentRequest = DeleteConnectionAssignmentRequest.DeleteConnectionAssignmentRequest;
import * as DeleteDatabaseRegistrationRequest from "./delete-database-registration-request";
export import DeleteDatabaseRegistrationRequest = DeleteDatabaseRegistrationRequest.DeleteDatabaseRegistrationRequest;
import * as DeleteDeploymentRequest from "./delete-deployment-request";
export import DeleteDeploymentRequest = DeleteDeploymentRequest.DeleteDeploymentRequest;
import * as DeleteDeploymentBackupRequest from "./delete-deployment-backup-request";
export import DeleteDeploymentBackupRequest = DeleteDeploymentBackupRequest.DeleteDeploymentBackupRequest;
import * as DeploymentWalletExistsRequest from "./deployment-wallet-exists-request";
export import DeploymentWalletExistsRequest = DeploymentWalletExistsRequest.DeploymentWalletExistsRequest;
import * as ExportDeploymentWalletRequest from "./export-deployment-wallet-request";
export import ExportDeploymentWalletRequest = ExportDeploymentWalletRequest.ExportDeploymentWalletRequest;
import * as GetCertificateRequest from "./get-certificate-request";
export import GetCertificateRequest = GetCertificateRequest.GetCertificateRequest;
import * as GetConnectionRequest from "./get-connection-request";
export import GetConnectionRequest = GetConnectionRequest.GetConnectionRequest;
import * as GetConnectionAssignmentRequest from "./get-connection-assignment-request";
export import GetConnectionAssignmentRequest = GetConnectionAssignmentRequest.GetConnectionAssignmentRequest;
import * as GetDatabaseRegistrationRequest from "./get-database-registration-request";
export import GetDatabaseRegistrationRequest = GetDatabaseRegistrationRequest.GetDatabaseRegistrationRequest;
import * as GetDeploymentRequest from "./get-deployment-request";
export import GetDeploymentRequest = GetDeploymentRequest.GetDeploymentRequest;
import * as GetDeploymentBackupRequest from "./get-deployment-backup-request";
export import GetDeploymentBackupRequest = GetDeploymentBackupRequest.GetDeploymentBackupRequest;
import * as GetDeploymentUpgradeRequest from "./get-deployment-upgrade-request";
export import GetDeploymentUpgradeRequest = GetDeploymentUpgradeRequest.GetDeploymentUpgradeRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ImportDeploymentWalletRequest from "./import-deployment-wallet-request";
export import ImportDeploymentWalletRequest = ImportDeploymentWalletRequest.ImportDeploymentWalletRequest;
import * as ListCertificatesRequest from "./list-certificates-request";
export import ListCertificatesRequest = ListCertificatesRequest.ListCertificatesRequest;
import * as ListConnectionAssignmentsRequest from "./list-connection-assignments-request";
export import ListConnectionAssignmentsRequest = ListConnectionAssignmentsRequest.ListConnectionAssignmentsRequest;
import * as ListConnectionsRequest from "./list-connections-request";
export import ListConnectionsRequest = ListConnectionsRequest.ListConnectionsRequest;
import * as ListDatabaseRegistrationsRequest from "./list-database-registrations-request";
export import ListDatabaseRegistrationsRequest = ListDatabaseRegistrationsRequest.ListDatabaseRegistrationsRequest;
import * as ListDeploymentBackupsRequest from "./list-deployment-backups-request";
export import ListDeploymentBackupsRequest = ListDeploymentBackupsRequest.ListDeploymentBackupsRequest;
import * as ListDeploymentTypesRequest from "./list-deployment-types-request";
export import ListDeploymentTypesRequest = ListDeploymentTypesRequest.ListDeploymentTypesRequest;
import * as ListDeploymentUpgradesRequest from "./list-deployment-upgrades-request";
export import ListDeploymentUpgradesRequest = ListDeploymentUpgradesRequest.ListDeploymentUpgradesRequest;
import * as ListDeploymentVersionsRequest from "./list-deployment-versions-request";
export import ListDeploymentVersionsRequest = ListDeploymentVersionsRequest.ListDeploymentVersionsRequest;
import * as ListDeploymentWalletsOperationsRequest from "./list-deployment-wallets-operations-request";
export import ListDeploymentWalletsOperationsRequest = ListDeploymentWalletsOperationsRequest.ListDeploymentWalletsOperationsRequest;
import * as ListDeploymentsRequest from "./list-deployments-request";
export import ListDeploymentsRequest = ListDeploymentsRequest.ListDeploymentsRequest;
import * as ListMessagesRequest from "./list-messages-request";
export import ListMessagesRequest = ListMessagesRequest.ListMessagesRequest;
import * as ListTrailFilesRequest from "./list-trail-files-request";
export import ListTrailFilesRequest = ListTrailFilesRequest.ListTrailFilesRequest;
import * as ListTrailSequencesRequest from "./list-trail-sequences-request";
export import ListTrailSequencesRequest = ListTrailSequencesRequest.ListTrailSequencesRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as RescheduleDeploymentUpgradeRequest from "./reschedule-deployment-upgrade-request";
export import RescheduleDeploymentUpgradeRequest = RescheduleDeploymentUpgradeRequest.RescheduleDeploymentUpgradeRequest;
import * as RestoreDeploymentRequest from "./restore-deployment-request";
export import RestoreDeploymentRequest = RestoreDeploymentRequest.RestoreDeploymentRequest;
import * as RollbackDeploymentUpgradeRequest from "./rollback-deployment-upgrade-request";
export import RollbackDeploymentUpgradeRequest = RollbackDeploymentUpgradeRequest.RollbackDeploymentUpgradeRequest;
import * as SnoozeDeploymentUpgradeRequest from "./snooze-deployment-upgrade-request";
export import SnoozeDeploymentUpgradeRequest = SnoozeDeploymentUpgradeRequest.SnoozeDeploymentUpgradeRequest;
import * as StartDeploymentRequest from "./start-deployment-request";
export import StartDeploymentRequest = StartDeploymentRequest.StartDeploymentRequest;
import * as StopDeploymentRequest from "./stop-deployment-request";
export import StopDeploymentRequest = StopDeploymentRequest.StopDeploymentRequest;
import * as TestConnectionAssignmentRequest from "./test-connection-assignment-request";
export import TestConnectionAssignmentRequest = TestConnectionAssignmentRequest.TestConnectionAssignmentRequest;
import * as UpdateConnectionRequest from "./update-connection-request";
export import UpdateConnectionRequest = UpdateConnectionRequest.UpdateConnectionRequest;
import * as UpdateDatabaseRegistrationRequest from "./update-database-registration-request";
export import UpdateDatabaseRegistrationRequest = UpdateDatabaseRegistrationRequest.UpdateDatabaseRegistrationRequest;
import * as UpdateDeploymentRequest from "./update-deployment-request";
export import UpdateDeploymentRequest = UpdateDeploymentRequest.UpdateDeploymentRequest;
import * as UpdateDeploymentBackupRequest from "./update-deployment-backup-request";
export import UpdateDeploymentBackupRequest = UpdateDeploymentBackupRequest.UpdateDeploymentBackupRequest;
import * as UpgradeDeploymentRequest from "./upgrade-deployment-request";
export import UpgradeDeploymentRequest = UpgradeDeploymentRequest.UpgradeDeploymentRequest;
import * as UpgradeDeploymentUpgradeRequest from "./upgrade-deployment-upgrade-request";
export import UpgradeDeploymentUpgradeRequest = UpgradeDeploymentUpgradeRequest.UpgradeDeploymentUpgradeRequest;

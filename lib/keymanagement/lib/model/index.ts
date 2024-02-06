/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as BackupKeyDetails from "./backup-key-details";
export import BackupKeyDetails = BackupKeyDetails.BackupKeyDetails;
import * as BackupLocation from "./backup-location";
export import BackupLocation = BackupLocation.BackupLocation;
import * as BackupVaultDetails from "./backup-vault-details";
export import BackupVaultDetails = BackupVaultDetails.BackupVaultDetails;
import * as ChangeHsmClusterCompartmentDetails from "./change-hsm-cluster-compartment-details";
export import ChangeHsmClusterCompartmentDetails = ChangeHsmClusterCompartmentDetails.ChangeHsmClusterCompartmentDetails;
import * as ChangeKeyCompartmentDetails from "./change-key-compartment-details";
export import ChangeKeyCompartmentDetails = ChangeKeyCompartmentDetails.ChangeKeyCompartmentDetails;
import * as ChangeVaultCompartmentDetails from "./change-vault-compartment-details";
export import ChangeVaultCompartmentDetails = ChangeVaultCompartmentDetails.ChangeVaultCompartmentDetails;
import * as CreateEkmsPrivateEndpointDetails from "./create-ekms-private-endpoint-details";
export import CreateEkmsPrivateEndpointDetails = CreateEkmsPrivateEndpointDetails.CreateEkmsPrivateEndpointDetails;
import * as CreateHsmClusterDetails from "./create-hsm-cluster-details";
export import CreateHsmClusterDetails = CreateHsmClusterDetails.CreateHsmClusterDetails;
import * as CreateKeyDetails from "./create-key-details";
export import CreateKeyDetails = CreateKeyDetails.CreateKeyDetails;
import * as CreateVaultDetails from "./create-vault-details";
export import CreateVaultDetails = CreateVaultDetails.CreateVaultDetails;
import * as CreateVaultReplicaDetails from "./create-vault-replica-details";
export import CreateVaultReplicaDetails = CreateVaultReplicaDetails.CreateVaultReplicaDetails;
import * as DecryptDataDetails from "./decrypt-data-details";
export import DecryptDataDetails = DecryptDataDetails.DecryptDataDetails;
import * as DecryptedData from "./decrypted-data";
export import DecryptedData = DecryptedData.DecryptedData;
import * as DeleteVaultReplicaDetails from "./delete-vault-replica-details";
export import DeleteVaultReplicaDetails = DeleteVaultReplicaDetails.DeleteVaultReplicaDetails;
import * as EkmsPrivateEndpoint from "./ekms-private-endpoint";
export import EkmsPrivateEndpoint = EkmsPrivateEndpoint.EkmsPrivateEndpoint;
import * as EkmsPrivateEndpointSummary from "./ekms-private-endpoint-summary";
export import EkmsPrivateEndpointSummary = EkmsPrivateEndpointSummary.EkmsPrivateEndpointSummary;
import * as EncryptDataDetails from "./encrypt-data-details";
export import EncryptDataDetails = EncryptDataDetails.EncryptDataDetails;
import * as EncryptedData from "./encrypted-data";
export import EncryptedData = EncryptedData.EncryptedData;
import * as ExportKeyDetails from "./export-key-details";
export import ExportKeyDetails = ExportKeyDetails.ExportKeyDetails;
import * as ExportedKeyData from "./exported-key-data";
export import ExportedKeyData = ExportedKeyData.ExportedKeyData;
import * as ExternalKeyManagerMetadata from "./external-key-manager-metadata";
export import ExternalKeyManagerMetadata = ExternalKeyManagerMetadata.ExternalKeyManagerMetadata;
import * as ExternalKeyManagerMetadataSummary from "./external-key-manager-metadata-summary";
export import ExternalKeyManagerMetadataSummary = ExternalKeyManagerMetadataSummary.ExternalKeyManagerMetadataSummary;
import * as ExternalKeyReference from "./external-key-reference";
export import ExternalKeyReference = ExternalKeyReference.ExternalKeyReference;
import * as ExternalKeyReferenceDetails from "./external-key-reference-details";
export import ExternalKeyReferenceDetails = ExternalKeyReferenceDetails.ExternalKeyReferenceDetails;
import * as ExternalKeyVersionReference from "./external-key-version-reference";
export import ExternalKeyVersionReference = ExternalKeyVersionReference.ExternalKeyVersionReference;
import * as GenerateKeyDetails from "./generate-key-details";
export import GenerateKeyDetails = GenerateKeyDetails.GenerateKeyDetails;
import * as GeneratedKey from "./generated-key";
export import GeneratedKey = GeneratedKey.GeneratedKey;
import * as HsmCluster from "./hsm-cluster";
export import HsmCluster = HsmCluster.HsmCluster;
import * as HsmClusterCollection from "./hsm-cluster-collection";
export import HsmClusterCollection = HsmClusterCollection.HsmClusterCollection;
import * as HsmClusterSummary from "./hsm-cluster-summary";
export import HsmClusterSummary = HsmClusterSummary.HsmClusterSummary;
import * as HsmPartition from "./hsm-partition";
export import HsmPartition = HsmPartition.HsmPartition;
import * as HsmPartitionCollection from "./hsm-partition-collection";
export import HsmPartitionCollection = HsmPartitionCollection.HsmPartitionCollection;
import * as HsmPartitionSummary from "./hsm-partition-summary";
export import HsmPartitionSummary = HsmPartitionSummary.HsmPartitionSummary;
import * as ImportKeyDetails from "./import-key-details";
export import ImportKeyDetails = ImportKeyDetails.ImportKeyDetails;
import * as ImportKeyVersionDetails from "./import-key-version-details";
export import ImportKeyVersionDetails = ImportKeyVersionDetails.ImportKeyVersionDetails;
import * as Key from "./key";
export import Key = Key.Key;
import * as KeyReplicaDetails from "./key-replica-details";
export import KeyReplicaDetails = KeyReplicaDetails.KeyReplicaDetails;
import * as KeyShape from "./key-shape";
export import KeyShape = KeyShape.KeyShape;
import * as KeySummary from "./key-summary";
export import KeySummary = KeySummary.KeySummary;
import * as KeyVersion from "./key-version";
export import KeyVersion = KeyVersion.KeyVersion;
import * as KeyVersionReplicaDetails from "./key-version-replica-details";
export import KeyVersionReplicaDetails = KeyVersionReplicaDetails.KeyVersionReplicaDetails;
import * as KeyVersionSummary from "./key-version-summary";
export import KeyVersionSummary = KeyVersionSummary.KeyVersionSummary;
import * as OauthMetadata from "./oauth-metadata";
export import OauthMetadata = OauthMetadata.OauthMetadata;
import * as OauthMetadataSummary from "./oauth-metadata-summary";
export import OauthMetadataSummary = OauthMetadataSummary.OauthMetadataSummary;
import * as PortInformation from "./port-information";
export import PortInformation = PortInformation.PortInformation;
import * as PreCoUserCredentials from "./pre-co-user-credentials";
export import PreCoUserCredentials = PreCoUserCredentials.PreCoUserCredentials;
import * as ReplicaDetails from "./replica-details";
export import ReplicaDetails = ReplicaDetails.ReplicaDetails;
import * as ReplicationStatusDetails from "./replication-status-details";
export import ReplicationStatusDetails = ReplicationStatusDetails.ReplicationStatusDetails;
import * as RestoreKeyFromObjectStoreDetails from "./restore-key-from-object-store-details";
export import RestoreKeyFromObjectStoreDetails = RestoreKeyFromObjectStoreDetails.RestoreKeyFromObjectStoreDetails;
import * as RestoreVaultFromObjectStoreDetails from "./restore-vault-from-object-store-details";
export import RestoreVaultFromObjectStoreDetails = RestoreVaultFromObjectStoreDetails.RestoreVaultFromObjectStoreDetails;
import * as ScheduleHsmClusterDeletionDetails from "./schedule-hsm-cluster-deletion-details";
export import ScheduleHsmClusterDeletionDetails = ScheduleHsmClusterDeletionDetails.ScheduleHsmClusterDeletionDetails;
import * as ScheduleKeyDeletionDetails from "./schedule-key-deletion-details";
export import ScheduleKeyDeletionDetails = ScheduleKeyDeletionDetails.ScheduleKeyDeletionDetails;
import * as ScheduleKeyVersionDeletionDetails from "./schedule-key-version-deletion-details";
export import ScheduleKeyVersionDeletionDetails = ScheduleKeyVersionDeletionDetails.ScheduleKeyVersionDeletionDetails;
import * as ScheduleVaultDeletionDetails from "./schedule-vault-deletion-details";
export import ScheduleVaultDeletionDetails = ScheduleVaultDeletionDetails.ScheduleVaultDeletionDetails;
import * as SignDataDetails from "./sign-data-details";
export import SignDataDetails = SignDataDetails.SignDataDetails;
import * as SignedData from "./signed-data";
export import SignedData = SignedData.SignedData;
import * as UpdateEkmsPrivateEndpointDetails from "./update-ekms-private-endpoint-details";
export import UpdateEkmsPrivateEndpointDetails = UpdateEkmsPrivateEndpointDetails.UpdateEkmsPrivateEndpointDetails;
import * as UpdateHsmClusterDetails from "./update-hsm-cluster-details";
export import UpdateHsmClusterDetails = UpdateHsmClusterDetails.UpdateHsmClusterDetails;
import * as UpdateKeyDetails from "./update-key-details";
export import UpdateKeyDetails = UpdateKeyDetails.UpdateKeyDetails;
import * as UpdateVaultDetails from "./update-vault-details";
export import UpdateVaultDetails = UpdateVaultDetails.UpdateVaultDetails;
import * as UploadPartitionCertificatesDetails from "./upload-partition-certificates-details";
export import UploadPartitionCertificatesDetails = UploadPartitionCertificatesDetails.UploadPartitionCertificatesDetails;
import * as Vault from "./vault";
export import Vault = Vault.Vault;
import * as VaultReplicaDetails from "./vault-replica-details";
export import VaultReplicaDetails = VaultReplicaDetails.VaultReplicaDetails;
import * as VaultReplicaSummary from "./vault-replica-summary";
export import VaultReplicaSummary = VaultReplicaSummary.VaultReplicaSummary;
import * as VaultSummary from "./vault-summary";
export import VaultSummary = VaultSummary.VaultSummary;
import * as VaultUsage from "./vault-usage";
export import VaultUsage = VaultUsage.VaultUsage;
import * as VerifiedData from "./verified-data";
export import VerifiedData = VerifiedData.VerifiedData;
import * as VerifyDataDetails from "./verify-data-details";
export import VerifyDataDetails = VerifyDataDetails.VerifyDataDetails;
import * as WrappedImportKey from "./wrapped-import-key";
export import WrappedImportKey = WrappedImportKey.WrappedImportKey;
import * as WrappingKey from "./wrapping-key";
export import WrappingKey = WrappingKey.WrappingKey;

import * as BackupLocationBucket from "./backup-location-bucket";
export import BackupLocationBucket = BackupLocationBucket.BackupLocationBucket;
import * as BackupLocationURI from "./backup-location-ur-i";
export import BackupLocationURI = BackupLocationURI.BackupLocationURI;

/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as AssertionDetails from "./assertion-details";
export import AssertionDetails = AssertionDetails.AssertionDetails;
import * as BatchDetectDominantLanguageDetails from "./batch-detect-dominant-language-details";
export import BatchDetectDominantLanguageDetails = BatchDetectDominantLanguageDetails.BatchDetectDominantLanguageDetails;
import * as BatchDetectDominantLanguageResult from "./batch-detect-dominant-language-result";
export import BatchDetectDominantLanguageResult = BatchDetectDominantLanguageResult.BatchDetectDominantLanguageResult;
import * as BatchDetectHealthEntityDetails from "./batch-detect-health-entity-details";
export import BatchDetectHealthEntityDetails = BatchDetectHealthEntityDetails.BatchDetectHealthEntityDetails;
import * as BatchDetectHealthEntityResult from "./batch-detect-health-entity-result";
export import BatchDetectHealthEntityResult = BatchDetectHealthEntityResult.BatchDetectHealthEntityResult;
import * as BatchDetectLanguageEntitiesDetails from "./batch-detect-language-entities-details";
export import BatchDetectLanguageEntitiesDetails = BatchDetectLanguageEntitiesDetails.BatchDetectLanguageEntitiesDetails;
import * as BatchDetectLanguageEntitiesResult from "./batch-detect-language-entities-result";
export import BatchDetectLanguageEntitiesResult = BatchDetectLanguageEntitiesResult.BatchDetectLanguageEntitiesResult;
import * as BatchDetectLanguageKeyPhrasesDetails from "./batch-detect-language-key-phrases-details";
export import BatchDetectLanguageKeyPhrasesDetails = BatchDetectLanguageKeyPhrasesDetails.BatchDetectLanguageKeyPhrasesDetails;
import * as BatchDetectLanguageKeyPhrasesResult from "./batch-detect-language-key-phrases-result";
export import BatchDetectLanguageKeyPhrasesResult = BatchDetectLanguageKeyPhrasesResult.BatchDetectLanguageKeyPhrasesResult;
import * as BatchDetectLanguagePiiEntitiesDetails from "./batch-detect-language-pii-entities-details";
export import BatchDetectLanguagePiiEntitiesDetails = BatchDetectLanguagePiiEntitiesDetails.BatchDetectLanguagePiiEntitiesDetails;
import * as BatchDetectLanguagePiiEntitiesResult from "./batch-detect-language-pii-entities-result";
export import BatchDetectLanguagePiiEntitiesResult = BatchDetectLanguagePiiEntitiesResult.BatchDetectLanguagePiiEntitiesResult;
import * as BatchDetectLanguageSentimentsDetails from "./batch-detect-language-sentiments-details";
export import BatchDetectLanguageSentimentsDetails = BatchDetectLanguageSentimentsDetails.BatchDetectLanguageSentimentsDetails;
import * as BatchDetectLanguageSentimentsResult from "./batch-detect-language-sentiments-result";
export import BatchDetectLanguageSentimentsResult = BatchDetectLanguageSentimentsResult.BatchDetectLanguageSentimentsResult;
import * as BatchDetectLanguageTextClassificationDetails from "./batch-detect-language-text-classification-details";
export import BatchDetectLanguageTextClassificationDetails = BatchDetectLanguageTextClassificationDetails.BatchDetectLanguageTextClassificationDetails;
import * as BatchDetectLanguageTextClassificationResult from "./batch-detect-language-text-classification-result";
export import BatchDetectLanguageTextClassificationResult = BatchDetectLanguageTextClassificationResult.BatchDetectLanguageTextClassificationResult;
import * as BatchLanguageTranslationDetails from "./batch-language-translation-details";
export import BatchLanguageTranslationDetails = BatchLanguageTranslationDetails.BatchLanguageTranslationDetails;
import * as BatchLanguageTranslationResult from "./batch-language-translation-result";
export import BatchLanguageTranslationResult = BatchLanguageTranslationResult.BatchLanguageTranslationResult;
import * as Capabilities from "./capabilities";
export import Capabilities = Capabilities.Capabilities;
import * as Capability from "./capability";
export import Capability = Capability.Capability;
import * as ChangeEndpointCompartmentDetails from "./change-endpoint-compartment-details";
export import ChangeEndpointCompartmentDetails = ChangeEndpointCompartmentDetails.ChangeEndpointCompartmentDetails;
import * as ChangeJobCompartmentDetails from "./change-job-compartment-details";
export import ChangeJobCompartmentDetails = ChangeJobCompartmentDetails.ChangeJobCompartmentDetails;
import * as ChangeModelCompartmentDetails from "./change-model-compartment-details";
export import ChangeModelCompartmentDetails = ChangeModelCompartmentDetails.ChangeModelCompartmentDetails;
import * as ChangeProjectCompartmentDetails from "./change-project-compartment-details";
export import ChangeProjectCompartmentDetails = ChangeProjectCompartmentDetails.ChangeProjectCompartmentDetails;
import * as ClassMetrics from "./class-metrics";
export import ClassMetrics = ClassMetrics.ClassMetrics;
import * as ClassificationType from "./classification-type";
export import ClassificationType = ClassificationType.ClassificationType;
import * as ConfigurationDetails from "./configuration-details";
export import ConfigurationDetails = ConfigurationDetails.ConfigurationDetails;
import * as ConfusionMatrixDetails from "./confusion-matrix-details";
export import ConfusionMatrixDetails = ConfusionMatrixDetails.ConfusionMatrixDetails;
import * as CreateEndpointDetails from "./create-endpoint-details";
export import CreateEndpointDetails = CreateEndpointDetails.CreateEndpointDetails;
import * as CreateJobDetails from "./create-job-details";
export import CreateJobDetails = CreateJobDetails.CreateJobDetails;
import * as CreateModelDetails from "./create-model-details";
export import CreateModelDetails = CreateModelDetails.CreateModelDetails;
import * as CreateProjectDetails from "./create-project-details";
export import CreateProjectDetails = CreateProjectDetails.CreateProjectDetails;
import * as DatasetDetails from "./dataset-details";
export import DatasetDetails = DatasetDetails.DatasetDetails;
import * as DetectDominantLanguageDetails from "./detect-dominant-language-details";
export import DetectDominantLanguageDetails = DetectDominantLanguageDetails.DetectDominantLanguageDetails;
import * as DetectDominantLanguageResult from "./detect-dominant-language-result";
export import DetectDominantLanguageResult = DetectDominantLanguageResult.DetectDominantLanguageResult;
import * as DetectLanguageEntitiesDetails from "./detect-language-entities-details";
export import DetectLanguageEntitiesDetails = DetectLanguageEntitiesDetails.DetectLanguageEntitiesDetails;
import * as DetectLanguageEntitiesResult from "./detect-language-entities-result";
export import DetectLanguageEntitiesResult = DetectLanguageEntitiesResult.DetectLanguageEntitiesResult;
import * as DetectLanguageKeyPhrasesDetails from "./detect-language-key-phrases-details";
export import DetectLanguageKeyPhrasesDetails = DetectLanguageKeyPhrasesDetails.DetectLanguageKeyPhrasesDetails;
import * as DetectLanguageKeyPhrasesResult from "./detect-language-key-phrases-result";
export import DetectLanguageKeyPhrasesResult = DetectLanguageKeyPhrasesResult.DetectLanguageKeyPhrasesResult;
import * as DetectLanguageSentimentsDetails from "./detect-language-sentiments-details";
export import DetectLanguageSentimentsDetails = DetectLanguageSentimentsDetails.DetectLanguageSentimentsDetails;
import * as DetectLanguageSentimentsResult from "./detect-language-sentiments-result";
export import DetectLanguageSentimentsResult = DetectLanguageSentimentsResult.DetectLanguageSentimentsResult;
import * as DetectLanguageTextClassificationDetails from "./detect-language-text-classification-details";
export import DetectLanguageTextClassificationDetails = DetectLanguageTextClassificationDetails.DetectLanguageTextClassificationDetails;
import * as DetectLanguageTextClassificationResult from "./detect-language-text-classification-result";
export import DetectLanguageTextClassificationResult = DetectLanguageTextClassificationResult.DetectLanguageTextClassificationResult;
import * as DetectedLanguage from "./detected-language";
export import DetectedLanguage = DetectedLanguage.DetectedLanguage;
import * as DocumentError from "./document-error";
export import DocumentError = DocumentError.DocumentError;
import * as DocumentsConfiguration from "./documents-configuration";
export import DocumentsConfiguration = DocumentsConfiguration.DocumentsConfiguration;
import * as DominantLanguageDocument from "./dominant-language-document";
export import DominantLanguageDocument = DominantLanguageDocument.DominantLanguageDocument;
import * as DominantLanguageDocumentResult from "./dominant-language-document-result";
export import DominantLanguageDocumentResult = DominantLanguageDocumentResult.DominantLanguageDocumentResult;
import * as Endpoint from "./endpoint";
export import Endpoint = Endpoint.Endpoint;
import * as EndpointCollection from "./endpoint-collection";
export import EndpointCollection = EndpointCollection.EndpointCollection;
import * as EndpointSummary from "./endpoint-summary";
export import EndpointSummary = EndpointSummary.EndpointSummary;
import * as Entity from "./entity";
export import Entity = Entity.Entity;
import * as EntityDocumentResult from "./entity-document-result";
export import EntityDocumentResult = EntityDocumentResult.EntityDocumentResult;
import * as EntityLabelErrorAnalysis from "./entity-label-error-analysis";
export import EntityLabelErrorAnalysis = EntityLabelErrorAnalysis.EntityLabelErrorAnalysis;
import * as EntityMetrics from "./entity-metrics";
export import EntityMetrics = EntityMetrics.EntityMetrics;
import * as ErrorDetails from "./error-details";
export import ErrorDetails = ErrorDetails.ErrorDetails;
import * as EvaluationResultCollection from "./evaluation-result-collection";
export import EvaluationResultCollection = EvaluationResultCollection.EvaluationResultCollection;
import * as EvaluationResultSummary from "./evaluation-result-summary";
export import EvaluationResultSummary = EvaluationResultSummary.EvaluationResultSummary;
import * as EvaluationResults from "./evaluation-results";
export import EvaluationResults = EvaluationResults.EvaluationResults;
import * as HealthEntity from "./health-entity";
export import HealthEntity = HealthEntity.HealthEntity;
import * as HealthEntityDocumentResult from "./health-entity-document-result";
export import HealthEntityDocumentResult = HealthEntityDocumentResult.HealthEntityDocumentResult;
import * as HierarchicalEntity from "./hierarchical-entity";
export import HierarchicalEntity = HierarchicalEntity.HierarchicalEntity;
import * as InputConfiguration from "./input-configuration";
export import InputConfiguration = InputConfiguration.InputConfiguration;
import * as InputLocation from "./input-location";
export import InputLocation = InputLocation.InputLocation;
import * as Job from "./job";
export import Job = Job.Job;
import * as JobCollection from "./job-collection";
export import JobCollection = JobCollection.JobCollection;
import * as JobSummary from "./job-summary";
export import JobSummary = JobSummary.JobSummary;
import * as KeyPhrase from "./key-phrase";
export import KeyPhrase = KeyPhrase.KeyPhrase;
import * as KeyPhraseDocumentResult from "./key-phrase-document-result";
export import KeyPhraseDocumentResult = KeyPhraseDocumentResult.KeyPhraseDocumentResult;
import * as LocationDetails from "./location-details";
export import LocationDetails = LocationDetails.LocationDetails;
import * as MelConcept from "./mel-concept";
export import MelConcept = MelConcept.MelConcept;
import * as MelConceptDetails from "./mel-concept-details";
export import MelConceptDetails = MelConceptDetails.MelConceptDetails;
import * as Model from "./model";
export import Model = Model.Model;
import * as ModelCollection from "./model-collection";
export import ModelCollection = ModelCollection.ModelCollection;
import * as ModelDetails from "./model-details";
export import ModelDetails = ModelDetails.ModelDetails;
import * as ModelMetadataDetails from "./model-metadata-details";
export import ModelMetadataDetails = ModelMetadataDetails.ModelMetadataDetails;
import * as ModelSummary from "./model-summary";
export import ModelSummary = ModelSummary.ModelSummary;
import * as ModelTypeInfo from "./model-type-info";
export import ModelTypeInfo = ModelTypeInfo.ModelTypeInfo;
import * as NamedEntityRecognitionModelMetrics from "./named-entity-recognition-model-metrics";
export import NamedEntityRecognitionModelMetrics = NamedEntityRecognitionModelMetrics.NamedEntityRecognitionModelMetrics;
import * as NerModelVersion from "./ner-model-version";
export import NerModelVersion = NerModelVersion.NerModelVersion;
import * as ObjectPrefixOutputLocation from "./object-prefix-output-location";
export import ObjectPrefixOutputLocation = ObjectPrefixOutputLocation.ObjectPrefixOutputLocation;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as PiiEntity from "./pii-entity";
export import PiiEntity = PiiEntity.PiiEntity;
import * as PiiEntityDocumentResult from "./pii-entity-document-result";
export import PiiEntityDocumentResult = PiiEntityDocumentResult.PiiEntityDocumentResult;
import * as PiiEntityMasking from "./pii-entity-masking";
export import PiiEntityMasking = PiiEntityMasking.PiiEntityMasking;
import * as PreDeployedLanguageModels from "./pre-deployed-language-models";
export import PreDeployedLanguageModels = PreDeployedLanguageModels.PreDeployedLanguageModels;
import * as Profile from "./profile";
export import Profile = Profile.Profile;
import * as Project from "./project";
export import Project = Project.Project;
import * as ProjectCollection from "./project-collection";
export import ProjectCollection = ProjectCollection.ProjectCollection;
import * as ProjectSummary from "./project-summary";
export import ProjectSummary = ProjectSummary.ProjectSummary;
import * as RelationEntity from "./relation-entity";
export import RelationEntity = RelationEntity.RelationEntity;
import * as ResolvedEntities from "./resolved-entities";
export import ResolvedEntities = ResolvedEntities.ResolvedEntities;
import * as ResolvedEntity from "./resolved-entity";
export import ResolvedEntity = ResolvedEntity.ResolvedEntity;
import * as SentimentAspect from "./sentiment-aspect";
export import SentimentAspect = SentimentAspect.SentimentAspect;
import * as SentimentDocumentResult from "./sentiment-document-result";
export import SentimentDocumentResult = SentimentDocumentResult.SentimentDocumentResult;
import * as SentimentSentence from "./sentiment-sentence";
export import SentimentSentence = SentimentSentence.SentimentSentence;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as TestStrategy from "./test-strategy";
export import TestStrategy = TestStrategy.TestStrategy;
import * as TextClassification from "./text-classification";
export import TextClassification = TextClassification.TextClassification;
import * as TextClassificationDocumentResult from "./text-classification-document-result";
export import TextClassificationDocumentResult = TextClassificationDocumentResult.TextClassificationDocumentResult;
import * as TextClassificationModelMetrics from "./text-classification-model-metrics";
export import TextClassificationModelMetrics = TextClassificationModelMetrics.TextClassificationModelMetrics;
import * as TextDocument from "./text-document";
export import TextDocument = TextDocument.TextDocument;
import * as TranslationDocumentResult from "./translation-document-result";
export import TranslationDocumentResult = TranslationDocumentResult.TranslationDocumentResult;
import * as UpdateEndpointDetails from "./update-endpoint-details";
export import UpdateEndpointDetails = UpdateEndpointDetails.UpdateEndpointDetails;
import * as UpdateJobDetails from "./update-job-details";
export import UpdateJobDetails = UpdateJobDetails.UpdateJobDetails;
import * as UpdateModelDetails from "./update-model-details";
export import UpdateModelDetails = UpdateModelDetails.UpdateModelDetails;
import * as UpdateProjectDetails from "./update-project-details";
export import UpdateProjectDetails = UpdateProjectDetails.UpdateProjectDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLog from "./work-request-log";
export import WorkRequestLog = WorkRequestLog.WorkRequestLog;
import * as WorkRequestLogCollection from "./work-request-log-collection";
export import WorkRequestLogCollection = WorkRequestLogCollection.WorkRequestLogCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;
import * as WorkRequestSummaryCollection from "./work-request-summary-collection";
export import WorkRequestSummaryCollection = WorkRequestSummaryCollection.WorkRequestSummaryCollection;

import * as ClassificationMultiClassModeDetails from "./classification-multi-class-mode-details";
export import ClassificationMultiClassModeDetails = ClassificationMultiClassModeDetails.ClassificationMultiClassModeDetails;
import * as ClassificationMultiLabelModeDetails from "./classification-multi-label-mode-details";
export import ClassificationMultiLabelModeDetails = ClassificationMultiLabelModeDetails.ClassificationMultiLabelModeDetails;
import * as DataScienceLabelingDataset from "./data-science-labeling-dataset";
export import DataScienceLabelingDataset = DataScienceLabelingDataset.DataScienceLabelingDataset;
import * as NamedEntityRecognitionEvaluationResult from "./named-entity-recognition-evaluation-result";
export import NamedEntityRecognitionEvaluationResult = NamedEntityRecognitionEvaluationResult.NamedEntityRecognitionEvaluationResult;
import * as NamedEntityRecognitionEvaluationResults from "./named-entity-recognition-evaluation-results";
export import NamedEntityRecognitionEvaluationResults = NamedEntityRecognitionEvaluationResults.NamedEntityRecognitionEvaluationResults;
import * as NamedEntityRecognitionModelDetails from "./named-entity-recognition-model-details";
export import NamedEntityRecognitionModelDetails = NamedEntityRecognitionModelDetails.NamedEntityRecognitionModelDetails;
import * as ObjectListDataset from "./object-list-dataset";
export import ObjectListDataset = ObjectListDataset.ObjectListDataset;
import * as ObjectStorageDataset from "./object-storage-dataset";
export import ObjectStorageDataset = ObjectStorageDataset.ObjectStorageDataset;
import * as ObjectStorageFileNameLocation from "./object-storage-file-name-location";
export import ObjectStorageFileNameLocation = ObjectStorageFileNameLocation.ObjectStorageFileNameLocation;
import * as ObjectStoragePrefixLocation from "./object-storage-prefix-location";
export import ObjectStoragePrefixLocation = ObjectStoragePrefixLocation.ObjectStoragePrefixLocation;
import * as PiiEntityMask from "./pii-entity-mask";
export import PiiEntityMask = PiiEntityMask.PiiEntityMask;
import * as PiiEntityRemove from "./pii-entity-remove";
export import PiiEntityRemove = PiiEntityRemove.PiiEntityRemove;
import * as PiiEntityReplace from "./pii-entity-replace";
export import PiiEntityReplace = PiiEntityReplace.PiiEntityReplace;
import * as PiiModelDetails from "./pii-model-details";
export import PiiModelDetails = PiiModelDetails.PiiModelDetails;
import * as PreTrainedHealthNluModelDetails from "./pre-trained-health-nlu-model-details";
export import PreTrainedHealthNluModelDetails = PreTrainedHealthNluModelDetails.PreTrainedHealthNluModelDetails;
import * as PreTrainedKeyPhraseExtractionModelDetails from "./pre-trained-key-phrase-extraction-model-details";
export import PreTrainedKeyPhraseExtractionModelDetails = PreTrainedKeyPhraseExtractionModelDetails.PreTrainedKeyPhraseExtractionModelDetails;
import * as PreTrainedLanguageDetectionModelDetails from "./pre-trained-language-detection-model-details";
export import PreTrainedLanguageDetectionModelDetails = PreTrainedLanguageDetectionModelDetails.PreTrainedLanguageDetectionModelDetails;
import * as PreTrainedNamedEntityRecognitionModelDetails from "./pre-trained-named-entity-recognition-model-details";
export import PreTrainedNamedEntityRecognitionModelDetails = PreTrainedNamedEntityRecognitionModelDetails.PreTrainedNamedEntityRecognitionModelDetails;
import * as PreTrainedPiiModelDetails from "./pre-trained-pii-model-details";
export import PreTrainedPiiModelDetails = PreTrainedPiiModelDetails.PreTrainedPiiModelDetails;
import * as PreTrainedSentimentAnalysisModelDetails from "./pre-trained-sentiment-analysis-model-details";
export import PreTrainedSentimentAnalysisModelDetails = PreTrainedSentimentAnalysisModelDetails.PreTrainedSentimentAnalysisModelDetails;
import * as PreTrainedSummarization from "./pre-trained-summarization";
export import PreTrainedSummarization = PreTrainedSummarization.PreTrainedSummarization;
import * as PreTrainedTextClassificationModelDetails from "./pre-trained-text-classification-model-details";
export import PreTrainedTextClassificationModelDetails = PreTrainedTextClassificationModelDetails.PreTrainedTextClassificationModelDetails;
import * as PreTrainedUniversalModel from "./pre-trained-universal-model";
export import PreTrainedUniversalModel = PreTrainedUniversalModel.PreTrainedUniversalModel;
import * as TestAndValidationDatasetStrategy from "./test-and-validation-dataset-strategy";
export import TestAndValidationDatasetStrategy = TestAndValidationDatasetStrategy.TestAndValidationDatasetStrategy;
import * as TextClassificationEvaluationResults from "./text-classification-evaluation-results";
export import TextClassificationEvaluationResults = TextClassificationEvaluationResults.TextClassificationEvaluationResults;
import * as TextClassificationModelDetails from "./text-classification-model-details";
export import TextClassificationModelDetails = TextClassificationModelDetails.TextClassificationModelDetails;
import * as TextClassificationModelEvaluationResult from "./text-classification-model-evaluation-result";
export import TextClassificationModelEvaluationResult = TextClassificationModelEvaluationResult.TextClassificationModelEvaluationResult;

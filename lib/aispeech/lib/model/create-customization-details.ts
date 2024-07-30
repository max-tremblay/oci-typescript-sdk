/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
 * The information about the new Customization.
 */
export interface CreateCustomizationDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want to create the job.
   */
  "compartmentId": string;
  /**
   * Customization Details Alias
   */
  "alias"?: string;
  /**
   * A user-friendly display name for the job.
   */
  "displayName"?: string;
  /**
   * A short description of the job.
   */
  "description"?: string;
  "modelDetails": model.CustomizationModelDetails;
  "trainingDataset": model.ObjectStorageDataset | model.EntityListDataset;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}.
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace-1\": {\"bar-key-1\": \"value-1\", \"bar-key-2\": \"value-2\"}, \"foo-namespace-2\": {\"bar-key-1\": \"value-1\", \"bar-key-2\": \"value-2\"}}}.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateCustomizationDetails {
  export function getJsonObj(obj: CreateCustomizationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.CustomizationModelDetails.getJsonObj(obj.modelDetails)
          : undefined,
        "trainingDataset": obj.trainingDataset
          ? model.CustomizationDatasetDetails.getJsonObj(obj.trainingDataset)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateCustomizationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.CustomizationModelDetails.getDeserializedJsonObj(obj.modelDetails)
          : undefined,
        "trainingDataset": obj.trainingDataset
          ? model.CustomizationDatasetDetails.getDeserializedJsonObj(obj.trainingDataset)
          : undefined
      }
    };

    return jsonObj;
  }
}

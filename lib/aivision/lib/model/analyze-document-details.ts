/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * The details of how to analyze a document.
 */
export interface AnalyzeDocumentDetails {
  /**
   * The types of document analysis requested.
   */
  "features": Array<model.DocumentFeature>;
  "document": model.ObjectStorageDocumentDetails | model.InlineDocumentDetails;
  /**
   * The OCID of the compartment that calls the API.
   */
  "compartmentId"?: string;
  "outputLocation"?: model.OutputLocation;
  /**
   * The document language, abbreviated according to ISO 639-2.
   */
  "language"?: model.DocumentLanguage;
  /**
   * The document type.
   */
  "documentType"?: model.DocumentType;
}

export namespace AnalyzeDocumentDetails {
  export function getJsonObj(obj: AnalyzeDocumentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "features": obj.features
          ? obj.features.map(item => {
              return model.DocumentFeature.getJsonObj(item);
            })
          : undefined,
        "document": obj.document ? model.DocumentDetails.getJsonObj(obj.document) : undefined,

        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnalyzeDocumentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "features": obj.features
          ? obj.features.map(item => {
              return model.DocumentFeature.getDeserializedJsonObj(item);
            })
          : undefined,
        "document": obj.document
          ? model.DocumentDetails.getDeserializedJsonObj(obj.document)
          : undefined,

        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getDeserializedJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}

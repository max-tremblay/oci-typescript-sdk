/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

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
 * Parameters needed to create a new model. Models are mathematical representations of the relationships between data. Models are represented by their associated metadata and artifact.
 */
export interface CreateModelDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to create the model in.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project to associate with the model.
   */
  "projectId": string;
  /**
   * A user-friendly display name for the resource. It does not have to be unique and can be modified. Avoid entering confidential information.
   * Example: `My Model`
   *
   */
  "displayName"?: string;
  /**
   * A short description of the model.
   */
  "description"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * An array of custom metadata details for the model.
   */
  "customMetadataList"?: Array<model.Metadata>;
  /**
   * An array of defined metadata details for the model.
   */
  "definedMetadataList"?: Array<model.Metadata>;
  /**
   * Input schema file content in String format
   */
  "inputSchema"?: string;
  /**
   * Output schema file content in String format
   */
  "outputSchema"?: string;
}

export namespace CreateModelDetails {
  export function getJsonObj(obj: CreateModelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customMetadataList": obj.customMetadataList
          ? obj.customMetadataList.map(item => {
              return model.Metadata.getJsonObj(item);
            })
          : undefined,
        "definedMetadataList": obj.definedMetadataList
          ? obj.definedMetadataList.map(item => {
              return model.Metadata.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateModelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customMetadataList": obj.customMetadataList
          ? obj.customMetadataList.map(item => {
              return model.Metadata.getDeserializedJsonObj(item);
            })
          : undefined,
        "definedMetadataList": obj.definedMetadataList
          ? obj.definedMetadataList.map(item => {
              return model.Metadata.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

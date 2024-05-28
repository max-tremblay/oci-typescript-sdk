/**
 * OciControlCenterCp API
 * A description of the OciControlCenterCp API
 * OpenAPI spec version: 20231107
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
 * Details of the availability catalog resource.
 */
export interface OccAvailabilityCatalog {
  /**
   * The OCID of the availability catalog.
   */
  "id": string;
  /**
   * The name of the OCI service in consideration. For example, Compute, Exadata, and so on.
   *
   */
  "namespace": model.Namespace;
  /**
   * The OCID of the tenancy where the availability catalog resides.
   */
  "compartmentId": string;
  /**
   * A user-friendly name for the availability catalog.
   */
  "displayName": string;
  /**
   * Text information about the availability catalog.
   */
  "description"?: string;
  /**
   * The customer group OCID to which the availability catalog belongs.
   */
  "occCustomerGroupId": string;
  /**
   * The different states associated with the availability catalog.
   */
  "catalogState": OccAvailabilityCatalog.CatalogState;
  "metadataDetails": model.MetadataDetails;
  /**
   * The time when the availability catalog was created.
   */
  "timeCreated": Date;
  /**
   * The time when the availability catalog was last updated.
   */
  "timeUpdated": Date;
  /**
   * The current lifecycle state of the resource.
   */
  "lifecycleState": OccAvailabilityCatalog.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in a Failed State.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Details about capacity available for different resources in catalog.
   */
  "details"?: Array<model.OccAvailabilitySummary>;
}

export namespace OccAvailabilityCatalog {
  export enum CatalogState {
    NotUploaded = "NOT_UPLOADED",
    UploadFailed = "UPLOAD_FAILED",
    Staged = "STAGED",
    Published = "PUBLISHED",
    Outdated = "OUTDATED",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OccAvailabilityCatalog): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadataDetails": obj.metadataDetails
          ? model.MetadataDetails.getJsonObj(obj.metadataDetails)
          : undefined,

        "details": obj.details
          ? obj.details.map(item => {
              return model.OccAvailabilitySummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OccAvailabilityCatalog): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadataDetails": obj.metadataDetails
          ? model.MetadataDetails.getDeserializedJsonObj(obj.metadataDetails)
          : undefined,

        "details": obj.details
          ? obj.details.map(item => {
              return model.OccAvailabilitySummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

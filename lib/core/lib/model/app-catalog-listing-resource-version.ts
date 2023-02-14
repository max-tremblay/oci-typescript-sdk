/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Listing Resource Version
 */
export interface AppCatalogListingResourceVersion {
  /**
   * The OCID of the listing this resource version belongs to.
   */
  "listingId"?: string;
  /**
   * Date and time the listing resource version was published, in [RFC3339](https://tools.ietf.org/html/rfc3339) format.
   * Example: `2018-03-20T12:32:53.532Z`
   *
   */
  "timePublished"?: Date;
  /**
   * OCID of the listing resource.
   */
  "listingResourceId"?: string;
  /**
   * Resource Version.
   */
  "listingResourceVersion"?: string;
  /**
    * List of regions that this listing resource version is available.
* <p>
For information about regions, see
* [Regions and Availability Domains](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/regions.htm).
* <p>
Example: `[\"us-ashburn-1\", \"us-phoenix-1\"]`
* 
    */
  "availableRegions"?: Array<string>;
  /**
    * Array of shapes compatible with this resource.
* <p>
You can enumerate all available shapes by calling {@link #listShapes(ListShapesRequest) listShapes}.
* <p>
Example: `[\"VM.Standard1.1\", \"VM.Standard1.2\"]`
* 
    */
  "compatibleShapes"?: Array<string>;
  /**
   * List of accessible ports for instances launched with this listing resource version.
   */
  "accessiblePorts"?: Array<number>;
  /**
   * Allowed actions for the listing resource.
   */
  "allowedActions"?: Array<AppCatalogListingResourceVersion.AllowedActions>;
}

export namespace AppCatalogListingResourceVersion {
  export enum AllowedActions {
    Snapshot = "SNAPSHOT",
    BootVolumeDetach = "BOOT_VOLUME_DETACH",
    PreserveBootVolume = "PRESERVE_BOOT_VOLUME",
    SerialConsoleAccess = "SERIAL_CONSOLE_ACCESS",
    BootRecovery = "BOOT_RECOVERY",
    BackupBootVolume = "BACKUP_BOOT_VOLUME",
    CaptureConsoleHistory = "CAPTURE_CONSOLE_HISTORY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AppCatalogListingResourceVersion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppCatalogListingResourceVersion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

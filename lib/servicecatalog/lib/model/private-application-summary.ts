/**
 * Service Catalog API
 * Manage solutions in Oracle Cloud Infrastructure Service Catalog.
 * OpenAPI spec version: 20210527
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
 * Brief data about an application or a solution, which lives inside the tenancy and may be included into service catalogs.
 *
 */
export interface PrivateApplicationSummary {
  /**
   * The lifecycle state of the private application.
   */
  "lifecycleState": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment where the private application resides.
   *
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the private application.
   */
  "id": string;
  /**
   * The name of the private application.
   */
  "displayName": string;
  /**
   * A short description of the private application.
   */
  "shortDescription"?: string;
  "logo"?: model.UploadData;
  /**
   * Type of the packages, which are hosted by the private application.
   */
  "packageType": model.PackageTypeEnum;
  /**
    * The date and time the private application was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: `2021-05-27T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
}

export namespace PrivateApplicationSummary {
  export function getJsonObj(obj: PrivateApplicationSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "logo": obj.logo ? model.UploadData.getJsonObj(obj.logo) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PrivateApplicationSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "logo": obj.logo ? model.UploadData.getDeserializedJsonObj(obj.logo) : undefined
      }
    };

    return jsonObj;
  }
}

/**
 * Support Management API
 * Use the Support Management API to manage support requests.
For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm).

**Note**: Before you can create service requests with this API, 
you need to have an Oracle Single Sign On (SSO) account, 
and you need to register your Customer Support Identifier (CSI) with My Oracle Support.

 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * Details about the resource associated with the support request.
 */
export interface IncidentResourceType {
  /**
   * A unique identifier for the resource.
   */
  "resourceTypeKey"?: string;
  /**
   * The display name of the resource.
   */
  "name"?: string;
  /**
   * The label associated with the resource.
   */
  "label": string;
  /**
   * The description of the resource.
   */
  "description"?: string;
  /**
   * The service category list.
   */
  "serviceCategoryList"?: Array<model.ServiceCategory>;
  /**
   * The map of services for MOS Taxonomy.
   */
  "service"?: { [key: string]: string };
  /**
   * The service categories list for MOS Taxonomy.
   */
  "serviceCategories"?: Array<model.ServiceCategories>;
}

export namespace IncidentResourceType {
  export function getJsonObj(obj: IncidentResourceType): object {
    const jsonObj = {
      ...obj,
      ...{
        "serviceCategoryList": obj.serviceCategoryList
          ? obj.serviceCategoryList.map(item => {
              return model.ServiceCategory.getJsonObj(item);
            })
          : undefined,

        "serviceCategories": obj.serviceCategories
          ? obj.serviceCategories.map(item => {
              return model.ServiceCategories.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IncidentResourceType): object {
    const jsonObj = {
      ...obj,
      ...{
        "serviceCategoryList": obj.serviceCategoryList
          ? obj.serviceCategoryList.map(item => {
              return model.ServiceCategory.getDeserializedJsonObj(item);
            })
          : undefined,

        "serviceCategories": obj.serviceCategories
          ? obj.serviceCategories.map(item => {
              return model.ServiceCategories.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

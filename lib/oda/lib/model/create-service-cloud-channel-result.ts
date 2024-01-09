/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * The configuration for a Service Cloud agent channel.
 */
export interface CreateServiceCloudChannelResult extends model.CreateChannelResult {
  /**
   * The domain name.
   *
   * If you have access to Oracle B2C Service, you can derive this value from the URL that you use to launch the
   * Agent Browser User Interface. For example, if the URL is sitename.exampledomain.com, then the host name prefix
   * is sitename and the domain name is exampledomain.com.
   *
   * If the channel is connecting to Oracle B2C Service version 19A or later, and you have multiple interfaces,
   * then you must include the interface ID in the host (site) name . For example, for the interface that has an ID of 2, you would use something like sitename-2.exampledomain.com.
   *
   */
  "domainName": string;
  /**
   * The host prefix.
   *
   * If you have access to Oracle B2C Service, you can derive this value from the URL that you use to launch the
   * Agent Browser User Interface. For example, if the URL is sitename.exampledomain.com, then the host name prefix
   * is sitename and the domain name is exampledomain.com.
   *
   * If the channel is connecting to Oracle B2C Service version 19A or later, and you have multiple interfaces,
   * then you must include the interface ID in the host (site) name . For example, for the interface that has an ID of 2, you would use something like sitename-2.exampledomain.com.
   *
   */
  "hostNamePrefix": string;
  /**
   * The user name for an Oracle B2C Service staff member who has the necessary profile permissions.
   */
  "userName": string;
  /**
   * The type of Service Cloud client.
   */
  "clientType": model.ServiceCloudClientType;

  "type": string;
}

export namespace CreateServiceCloudChannelResult {
  export function getJsonObj(
    obj: CreateServiceCloudChannelResult,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelResult.getJsonObj(obj) as CreateServiceCloudChannelResult)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "SERVICECLOUD";
  export function getDeserializedJsonObj(
    obj: CreateServiceCloudChannelResult,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelResult.getDeserializedJsonObj(
            obj
          ) as CreateServiceCloudChannelResult)),
      ...{}
    };

    return jsonObj;
  }
}

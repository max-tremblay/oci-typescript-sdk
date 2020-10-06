/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details for an Exadata Cloud@Customer VM cluster network.
 *
 */
export interface VmClusterNetworkDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The user-friendly name for the Exadata Cloud@Customer VM cluster network. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The SCAN details.
   */
  "scans": Array<model.ScanDetails>;
  /**
   * The list of DNS server IP addresses. Maximum of 3 allowed.
   */
  "dns"?: Array<string>;
  /**
   * The list of NTP server IP addresses. Maximum of 3 allowed.
   */
  "ntp"?: Array<string>;
  /**
   * Details of the client and backup networks.
   */
  "vmNetworks": Array<model.VmNetworkDetails>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace VmClusterNetworkDetails {
  export function getJsonObj(obj: VmClusterNetworkDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "scans": obj.scans
          ? obj.scans.map(item => {
              return model.ScanDetails.getJsonObj(item);
            })
          : undefined,

        "vmNetworks": obj.vmNetworks
          ? obj.vmNetworks.map(item => {
              return model.VmNetworkDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

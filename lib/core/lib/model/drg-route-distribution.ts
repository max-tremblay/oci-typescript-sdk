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
* A route distribution establishes how routes get imported into DRG route tables and exported through the DRG attachments.
* <p>
A route distribution is a list of statements. Each statement consists of a set of matches, all of which must be `True` in order for
* the statement's action to take place. Each statement determines which routes are propagated.
* <p>
You can assign a route distribution as a route table's import distribution. The statements in an import
* route distribution specify how how incoming route advertisements through a referenced attachment or all attachments of a certain type are inserted into the route table.
* <p>
You can assign a route distribution as a DRG attachment's export distribution unless the
* attachment has the type VCN. Exporting routes through a VCN attachment is unsupported. Export
* route distribution statements specify how routes in a DRG attachment's assigned table are
* advertised out through the attachment. When a DRG is created, a route distribution is created
* with a single ACCEPT statement with match criteria MATCH_ALL. By default, all DRG attachments
* (except for those of type VCN), are assigned this distribution.
* <p>

* The two auto-generated DRG route tables (one as the default for VCN attachments, and the other for all other types of attachments)
* are each assigned an auto generated import route distribution. The default VCN table's import distribution has a single statement with match criteria MATCH_ALL to import routes from
* each DRG attachment type. The other table's import distribution has a statement to import routes from attachments with the VCN type.
* <p>
The route distribution is always in the same compartment as the DRG.
* 
*/
export interface DrgRouteDistribution {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the DRG that contains this route distribution.
   *
   */
  "drgId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the route distribution.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The route distribution's Oracle ID ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)).
   */
  "id": string;
  /**
   * The route distribution's current state.
   */
  "lifecycleState": DrgRouteDistribution.LifecycleState;
  /**
    * The date and time the route distribution was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * Whether this distribution defines how routes get imported into route tables or exported through DRG attachments.
   *
   */
  "distributionType": DrgRouteDistribution.DistributionType;
}

export namespace DrgRouteDistribution {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DistributionType {
    Import = "IMPORT",
    Export = "EXPORT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DrgRouteDistribution): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrgRouteDistribution): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

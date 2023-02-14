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
* A DRG attachment serves as a link between a DRG and a network resource. A DRG can be attached to a VCN,
* IPSec tunnel, remote peering connection, or virtual circuit.
* <p>
For more information, see [Overview of the Networking Service](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/overview.htm).
* 
*/
export interface DrgAttachment {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the DRG attachment.
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the DRG.
   */
  "drgId": string;
  /**
   * The DRG attachment's Oracle ID ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)).
   */
  "id": string;
  /**
   * The DRG attachment's current state.
   */
  "lifecycleState": DrgAttachment.LifecycleState;
  /**
    * The date and time the DRG attachment was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
    * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the DRG route table that is assigned to this attachment.
* <p>
The DRG route table manages traffic inside the DRG.
* 
    */
  "drgRouteTableId"?: string;
  "networkDetails"?:
    | model.VcnDrgAttachmentNetworkDetails
    | model.IpsecTunnelDrgAttachmentNetworkDetails
    | model.VirtualCircuitDrgAttachmentNetworkDetails
    | model.RemotePeeringConnectionDrgAttachmentNetworkDetails;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the route table the DRG attachment is using.
* <p>
For information about why you would associate a route table with a DRG attachment, see:
* <p>
  * [Transit Routing: Access to Multiple VCNs in Same Region](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/transitrouting.htm)
*   * [Transit Routing: Private Access to Oracle Services](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/transitroutingoracleservices.htm)
* <p>
This field is deprecated. Instead, use the `networkDetails` field to view the [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the attached resource.
* 
    */
  "routeTableId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VCN.
   * This field is deprecated. Instead, use the `networkDetails` field to view the [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the attached resource.
   *
   */
  "vcnId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the export route distribution used to specify how routes in the assigned DRG route table
   * are advertised to the attachment.
   * If this value is null, no routes are advertised through this attachment.
   *
   */
  "exportDrgRouteDistributionId"?: string;
  /**
    * Indicates whether the DRG attachment and attached network live in a different tenancy than the DRG.
* <p>
Example: `false`
* 
    */
  "isCrossTenancy"?: boolean;
}

export namespace DrgAttachment {
  export enum LifecycleState {
    Attaching = "ATTACHING",
    Attached = "ATTACHED",
    Detaching = "DETACHING",
    Detached = "DETACHED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DrgAttachment): object {
    const jsonObj = {
      ...obj,
      ...{
        "networkDetails": obj.networkDetails
          ? model.DrgAttachmentNetworkDetails.getJsonObj(obj.networkDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrgAttachment): object {
    const jsonObj = {
      ...obj,
      ...{
        "networkDetails": obj.networkDetails
          ? model.DrgAttachmentNetworkDetails.getDeserializedJsonObj(obj.networkDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}

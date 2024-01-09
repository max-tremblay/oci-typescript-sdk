/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
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
 * Information about a RoverNode.
 */
export interface RoverNode {
  /**
   * The OCID of RoverNode.
   */
  "id": string;
  /**
   * The cluster ID if the node is part of a cluster.
   */
  "clusterId"?: string;
  /**
   * The OCID of the compartment containing the RoverNode.
   */
  "compartmentId": string;
  /**
   * The type of node indicating if it belongs to a cluster
   */
  "nodeType"?: model.NodeType;
  /**
   * The shape of the node.
   */
  "shape"?: string;
  /**
   * The type of enclosure rover node is shipped in.
   */
  "enclosureType"?: model.EnclosureType;
  /**
   * Serial number of the node.
   */
  "serialNumber"?: string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The time the the RoverNode was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The current state of the RoverNode.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * A property that can contain details on the lifecycle.
   */
  "lifecycleStateDetails"?: string;
  "customerShippingAddress"?: model.ShippingAddress;
  /**
   * List of existing workloads that should be provisioned on the node.
   */
  "nodeWorkloads"?: Array<model.RoverWorkload>;
  /**
   * Date and time when customer received tne node.
   */
  "timeCustomerReceieved"?: Date;
  /**
   * Date and time when customer returned the node.
   */
  "timeCustomerReturned"?: Date;
  /**
   * Tracking information for device shipping.
   */
  "deliveryTrackingInfo"?: string;
  /**
   * Root password for the rover node.
   */
  "superUserPassword"?: string;
  /**
   * Password to unlock the rover node.
   */
  "unlockPassphrase"?: string;
  /**
   * Name of point of contact for this order if customer is picking up.
   */
  "pointOfContact"?: string;
  /**
   * Phone number of point of contact for this order if customer is picking up.
   */
  "pointOfContactPhoneNumber"?: string;
  /**
   * Preference for device delivery.
   */
  "shippingPreference"?: RoverNode.ShippingPreference;
  /**
   * Shipping vendor of choice for orace to customer shipping.
   */
  "shippingVendor"?: string;
  /**
   * Expected date when customer wants to pickup the device if they chose customer pickup.
   */
  "timePickupExpected"?: Date;
  /**
   * Start time for the window to pickup the device from customer.
   */
  "timeReturnWindowStarts"?: Date;
  /**
   * Tracking Url for the shipped RoverNode.
   */
  "oracleShippingTrackingUrl"?: string;
  /**
   * End time for the window to pickup the device from customer.
   */
  "timeReturnWindowEnds"?: Date;
  /**
   * Uri to download return shipping label.
   */
  "returnShippingLabelUri"?: string;
  /**
   * The flag indicating that customer requests data to be imported to OCI upon Rover node return.
   */
  "isImportRequested"?: boolean;
  /**
   * An OCID of a compartment where data will be imported to upon Rover node return.
   */
  "importCompartmentId"?: string;
  /**
   * Name of a bucket where files from NFS share will be imported to upon Rover node return.
   */
  "importFileBucket"?: string;
  /**
   * Validation code returned by data validation tool. Required for return shipping label generation if data import was requested.
   */
  "dataValidationCode"?: string;
  /**
   * The public key of the resource principal
   */
  "publicKey"?: string;
  /**
   * The link to pre-authenticated request for a bucket where image workloads are moved.
   */
  "imageExportPar"?: string;
  /**
   * Customer provided master key ID to encrypt secret information. If not provided, Rover's master key will be used for encryption.
   */
  "masterKeyId"?: string;
  /**
   * The certificateAuthorityId of subordinate/intermediate certificate authority.
   */
  "certificateAuthorityId"?: string;
  /**
   * The time after which leaf certificate will invalid.
   */
  "timeCertValidityEnd"?: Date;
  /**
   * The common name for the leaf certificate.
   */
  "commonName"?: string;
  /**
   * The compartmentId of the leaf certificate.
   */
  "certCompartmentId"?: string;
  /**
   * The version number of the leaf certificate.
   */
  "certificateVersionNumber"?: string;
  /**
   * The id of the leaf certificate.
   */
  "certificateId"?: string;
  /**
   * key algorithm for issuing leaf certificate.
   */
  "certKeyAlgorithm"?: model.CertKeyAlgorithm;
  /**
   * signature algorithm for issuing leaf certificate.
   */
  "certSignatureAlgorithm"?: model.CertSignatureAlgorithm;
  /**
   * The tags associated with tagSlug.
   *
   */
  "tags"?: string;
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{orcl-cloud: {free-tier-retain: true}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace RoverNode {
  export enum ShippingPreference {
    OracleShipped = "ORACLE_SHIPPED",
    CustomerPickup = "CUSTOMER_PICKUP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RoverNode): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerShippingAddress": obj.customerShippingAddress
          ? model.ShippingAddress.getJsonObj(obj.customerShippingAddress)
          : undefined,
        "nodeWorkloads": obj.nodeWorkloads
          ? obj.nodeWorkloads.map(item => {
              return model.RoverWorkload.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RoverNode): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerShippingAddress": obj.customerShippingAddress
          ? model.ShippingAddress.getDeserializedJsonObj(obj.customerShippingAddress)
          : undefined,
        "nodeWorkloads": obj.nodeWorkloads
          ? obj.nodeWorkloads.map(item => {
              return model.RoverWorkload.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

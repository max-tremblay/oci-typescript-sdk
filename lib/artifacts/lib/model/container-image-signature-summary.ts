/**
 * Artifacts and Container Images API
 * API covering the Artifacts and [Registry](/iaas/Content/Registry/Concepts/registryoverview.htm) services.
Use this API to manage resources such as generic artifacts and container images.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Container image signature summary.
 */
export interface ContainerImageSignatureSummary {
  /**
   * The OCID of the compartment in which the container repository exists.
   */
  "compartmentId": string;
  /**
    * The last 10 characters of the kmsKeyId, the last 10 characters of the kmsKeyVersionId, the signingAlgorithm, and the last 10 characters of the signatureId.
* <p>
Example: `wrmz22sixa::qdwyc2ptun::SHA_256_RSA_PKCS_PSS::2vwmobasva`
* 
    */
  "displayName": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the container image signature.
* <p>
Example: `ocid1.containerimagesignature.oc1..exampleuniqueID`
* 
    */
  "id": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the container image.
* <p>
Example: `ocid1.containerimage.oc1..exampleuniqueID`
* 
    */
  "imageId": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the kmsKeyId used to sign the container image.
* <p>
Example: `ocid1.key.oc1..exampleuniqueID`
* 
    */
  "kmsKeyId": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the kmsKeyVersionId used to sign the container image.
* <p>
Example: `ocid1.keyversion.oc1..exampleuniqueID`
* 
    */
  "kmsKeyVersionId": string;
  /**
   * The base64 encoded signature payload that was signed.
   */
  "message": string;
  /**
   * The signature of the message field using the kmsKeyId, the kmsKeyVersionId, and the signingAlgorithm.
   */
  "signature": string;
  /**
   * The algorithm to be used for signing. These are the only supported signing algorithms for container images.
   */
  "signingAlgorithm": ContainerImageSignatureSummary.SigningAlgorithm;
  /**
   * An RFC 3339 timestamp indicating when the image was created.
   */
  "timeCreated": Date;
}

export namespace ContainerImageSignatureSummary {
  export enum SigningAlgorithm {
    Sha224RsaPkcsPss = "SHA_224_RSA_PKCS_PSS",
    Sha256RsaPkcsPss = "SHA_256_RSA_PKCS_PSS",
    Sha384RsaPkcsPss = "SHA_384_RSA_PKCS_PSS",
    Sha512RsaPkcsPss = "SHA_512_RSA_PKCS_PSS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ContainerImageSignatureSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerImageSignatureSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

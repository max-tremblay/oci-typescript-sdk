/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Metadata associated with a specific Java release family.
 * A Java release family is typically a major version in the Java version identifier.
 *
 */
export interface JavaFamily {
  /**
   * List of artifacts for the latest Java release version in this family.
   * The script URLs in the response can be used from a command line, or in scripts and dockerfiles to always get the artifacts corresponding to the latest update release version.
   *
   */
  "latestReleaseArtifacts"?: Array<model.JavaArtifact>;
  /**
   * The Java release family identifier.
   */
  "familyVersion": string;
  /**
   * The display name of the release family.
   */
  "displayName": string;
  /**
   * This indicates the support category for the Java release family.
   */
  "supportType": model.SupportType;
  /**
   * The End of Support Life (EOSL) date of the Java release family (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   *
   */
  "endOfSupportLifeDate": Date;
  /**
   * Link to access the documentation for the release.
   */
  "docUrl": string;
  /**
   * Latest Java release version in the family.
   */
  "latestReleaseVersion": string;
  /**
   * Whether or not this Java release family is under active support.
   * Refer [Java Support Roadmap](https://www.oracle.com/java/technologies/java-se-support-roadmap.html) for more details.
   *
   */
  "isSupportedVersion": boolean;
}

export namespace JavaFamily {
  export function getJsonObj(obj: JavaFamily): object {
    const jsonObj = {
      ...obj,
      ...{
        "latestReleaseArtifacts": obj.latestReleaseArtifacts
          ? obj.latestReleaseArtifacts.map(item => {
              return model.JavaArtifact.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JavaFamily): object {
    const jsonObj = {
      ...obj,
      ...{
        "latestReleaseArtifacts": obj.latestReleaseArtifacts
          ? obj.latestReleaseArtifacts.map(item => {
              return model.JavaArtifact.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

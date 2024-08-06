/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Pull Request attachment created by users.
 */
export interface PullRequestAttachment {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * OCID of the pull request that this attachment belongs to
   */
  "pullRequestId": string;
  /**
   * name to display in description or comment
   */
  "fileName": string;
  /**
   * Creation timestamp. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated": Date;
  "createdBy": model.PrincipalDetails;
}

export namespace PullRequestAttachment {
  export function getJsonObj(obj: PullRequestAttachment): object {
    const jsonObj = {
      ...obj,
      ...{
        "createdBy": obj.createdBy ? model.PrincipalDetails.getJsonObj(obj.createdBy) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PullRequestAttachment): object {
    const jsonObj = {
      ...obj,
      ...{
        "createdBy": obj.createdBy
          ? model.PrincipalDetails.getDeserializedJsonObj(obj.createdBy)
          : undefined
      }
    };

    return jsonObj;
  }
}

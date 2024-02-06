/**
 * Management Agent API
 * Use the Management Agent API to manage your infrastructure's management agents, including their plugins and install keys.
For more information, see [Management Agent](https://docs.cloud.oracle.com/iaas/management-agents/index.html).

 * OpenAPI spec version: 20200202
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
 * A Kubernetes cluster data source.
 *
 */
export interface KubernetesClusterDataSource extends model.DataSource {
  /**
   * The Kubernetes namespace
   */
  "namespace": string;
  /**
   * If the Kubernetes cluster type is Daemon set then this will be set to true.
   */
  "isDaemonSet"?: boolean;

  "type": string;
}

export namespace KubernetesClusterDataSource {
  export function getJsonObj(obj: KubernetesClusterDataSource, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataSource.getJsonObj(obj) as KubernetesClusterDataSource)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "KUBERNETES_CLUSTER";
  export function getDeserializedJsonObj(
    obj: KubernetesClusterDataSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataSource.getDeserializedJsonObj(obj) as KubernetesClusterDataSource)),
      ...{}
    };

    return jsonObj;
  }
}

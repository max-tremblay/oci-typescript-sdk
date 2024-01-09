/**
 * Health Checks API
 * API for the Health Checks service. Use this API to manage endpoint probes and monitors.
For more information, see
[Overview of the Health Checks Service](/iaas/Content/HealthChecks/Concepts/healthchecks.htm).

 * OpenAPI spec version: 20180501
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
 * Information about a vantage point.
 */
export interface HealthChecksVantagePointSummary {
  /**
   * The display name for the vantage point. Display names are determined by
   * the best information available and may change over time.
   *
   */
  "displayName"?: string;
  /**
   * The organization on whose infrastructure this vantage point resides.
   * Provider names are not unique, as Oracle Cloud Infrastructure maintains
   * many vantage points in each major provider.
   *
   */
  "providerName"?: string;
  /**
   * The unique, permanent name for the vantage point.
   */
  "name"?: string;
  "geo"?: model.Geolocation;
  /**
    * An array of objects that describe how traffic to this vantage point is
* routed, including which prefixes and ASNs connect it to the internet.
* <p>
The addresses are sorted from the most-specific to least-specific
* prefix (the smallest network to largest network). When a prefix has
* multiple origin ASNs (MOAS routing), they are sorted by weight
* (highest to lowest). Weight is determined by the total percentage of
* peers observing the prefix originating from an ASN. Only present if
* `fields` includes `routing`. The field will be null if the address's
* routing information is unknown.
* 
    */
  "routing"?: Array<model.Routing>;
}

export namespace HealthChecksVantagePointSummary {
  export function getJsonObj(obj: HealthChecksVantagePointSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "geo": obj.geo ? model.Geolocation.getJsonObj(obj.geo) : undefined,
        "routing": obj.routing
          ? obj.routing.map(item => {
              return model.Routing.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HealthChecksVantagePointSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "geo": obj.geo ? model.Geolocation.getDeserializedJsonObj(obj.geo) : undefined,
        "routing": obj.routing
          ? obj.routing.map(item => {
              return model.Routing.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

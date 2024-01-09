/**
 * Web Application Acceleration (WAA) API
 * API for the Web Application Acceleration service.
Use this API to manage regional Web App Acceleration policies such as Caching and Compression
for accelerating HTTP services.

 * OpenAPI spec version: 20211230
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
 * An object that specifies an HTTP response caching policy.
 *
 */
export interface ResponseCachingPolicy {
  /**
    * When false, responses will not be cached by the backend based on response headers.
* <p>
When true, responses that contain one of the supported cache control headers will be cached according to the
* values specified in the cache control headers.
* <p>
The \"X-Accel-Expires\" header field sets caching time of a response in seconds. The zero value disables
* caching for a response. If the value starts with the @ prefix, it sets an absolute time in seconds since
* Epoch, up to which the response may be cached.
* <p>
If the header does not include the \"X-Accel-Expires\" field, parameters of caching may be set in the header
* fields \"Expires\" or \"Cache-Control\".
* <p>
If the header includes the \"Set-Cookie\" field, such a response will not be cached.
* <p>
If the header includes the \"Vary\" field with the special value \"*\", such a response will not be cached. If the
* header includes the \"Vary\" field with another value, such a response will be cached taking into account the
* corresponding request header fields.
* 
    */
  "isResponseHeaderBasedCachingEnabled"?: boolean;
}

export namespace ResponseCachingPolicy {
  export function getJsonObj(obj: ResponseCachingPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResponseCachingPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

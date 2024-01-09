/**
 *
 *
 * OpenAPI spec version: 20221001
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

export interface DetectLanguageKeyPhrasesResponse {
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * This API will be retired on Monday, 10 Oct 2023 00:00:00 GMT
   *
   */
  "sunset": string;
  /**
   * The returned model.DetectLanguageKeyPhrasesResult instance.
   */
  "detectLanguageKeyPhrasesResult": model.DetectLanguageKeyPhrasesResult;
}

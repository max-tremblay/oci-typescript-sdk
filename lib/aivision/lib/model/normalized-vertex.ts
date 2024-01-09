/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * An (x, y) coordinate in the image with dimensions normalized from zero to one.
 * The origin is at top left, with the positive x-axis pointing right and the positive y-axis pointing down.
 * The bottom right corner is at (1, 1).
 *
 */
export interface NormalizedVertex {
  /**
   * The X-axis normalized coordinate. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "x": number;
  /**
   * The Y-axis normalized coordinate. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "y": number;
}

export namespace NormalizedVertex {
  export function getJsonObj(obj: NormalizedVertex): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NormalizedVertex): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

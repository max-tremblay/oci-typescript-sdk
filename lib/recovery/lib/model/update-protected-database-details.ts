/**
 * Oracle Database Autonomous Recovery Service API
 * Use Oracle Database Autonomous Recovery Service API to manage Protected Databases.
 * OpenAPI spec version: 20210216
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
 * Describes the parameters required to update a protected database.
 */
export interface UpdateProtectedDatabaseDetails {
  /**
   * The protected database name. You can change the displayName. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The size of the database is allowed to be decreased. XS - Less than 5GB, S - 5GB to 50GB, M - 50GB to 500GB, L - 500GB to 1TB, XL - 1TB to 5TB, XXL - Greater than 5TB.
   */
  "databaseSize"?: model.DatabaseSizes;
  /**
   * The size of the database, in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "databaseSizeInGBs"?: number;
  /**
   * Password credential which can be used to connect to Protected Database.
   * It must contain at least 2 uppercase, 2 lowercase, 2 numeric and 2 special characters.
   * The special characters must be underscore (_), number sign (#) or hyphen (-). The password must not contain the username \"admin\", regardless of casing.
   * Password must not be same as current passsword.
   *
   */
  "password"?: string;
  /**
   * The OCID of the protection policy associated with the protected database.
   */
  "protectionPolicyId"?: string;
  /**
   * List of recovery service subnet resources associated with the protected database.
   */
  "recoveryServiceSubnets"?: Array<model.RecoveryServiceSubnetInput>;
  /**
   * The value TRUE indicates that the protected database is configured to use Real-time data protection, and redo-data is sent from the protected database to Recovery Service.
   * Real-time data protection substantially reduces the window of potential data loss that exists between successive archived redo log backups. For this to be effective, additional
   * configuration is needed on client side.
   *
   */
  "isRedoLogsShipped"?: boolean;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`. For more information, see [Resource Tags](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/resourcetags.htm)
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateProtectedDatabaseDetails {
  export function getJsonObj(obj: UpdateProtectedDatabaseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "recoveryServiceSubnets": obj.recoveryServiceSubnets
          ? obj.recoveryServiceSubnets.map(item => {
              return model.RecoveryServiceSubnetInput.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateProtectedDatabaseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "recoveryServiceSubnets": obj.recoveryServiceSubnets
          ? obj.recoveryServiceSubnets.map(item => {
              return model.RecoveryServiceSubnetInput.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

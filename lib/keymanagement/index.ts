/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as requests from "./lib/request";
import * as models from "./lib/model";
import * as responses from "./lib/response";
import * as client from "./lib/client";
import * as ekm_waiter from "./lib/ekm-waiter";
import * as kmsmanagement_waiter from "./lib/kmsmanagement-waiter";
import * as kmsvault_waiter from "./lib/kmsvault-waiter";

export { models };
export { requests };
export { responses };
export import EkmClient = client.EkmClient;
export import EkmWaiter = ekm_waiter.EkmWaiter;
export import KmsCryptoClient = client.KmsCryptoClient;
export import KmsManagementClient = client.KmsManagementClient;
export import KmsManagementWaiter = kmsmanagement_waiter.KmsManagementWaiter;
export import KmsVaultClient = client.KmsVaultClient;
export import KmsVaultWaiter = kmsvault_waiter.KmsVaultWaiter;

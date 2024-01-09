/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
 * 
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
import * as apigateway_waiter from "./lib/apigateway-waiter";
import * as deployment_waiter from "./lib/deployment-waiter";
import * as gateway_waiter from "./lib/gateway-waiter";
import * as subscribers_waiter from "./lib/subscribers-waiter";
import * as usageplans_waiter from "./lib/usageplans-waiter";
import * as workrequests_waiter from "./lib/workrequests-waiter";

export { models };
export { requests };
export { responses };
export import ApiGatewayClient = client.ApiGatewayClient;
export import ApiGatewayWaiter = apigateway_waiter.ApiGatewayWaiter;
export import DeploymentClient = client.DeploymentClient;
export import DeploymentWaiter = deployment_waiter.DeploymentWaiter;
export import GatewayClient = client.GatewayClient;
export import GatewayWaiter = gateway_waiter.GatewayWaiter;
export import SubscribersClient = client.SubscribersClient;
export import SubscribersWaiter = subscribers_waiter.SubscribersWaiter;
export import UsagePlansClient = client.UsagePlansClient;
export import UsagePlansWaiter = usageplans_waiter.UsagePlansWaiter;
export import WorkRequestsClient = client.WorkRequestsClient;
export import WorkRequestsWaiter = workrequests_waiter.WorkRequestsWaiter;

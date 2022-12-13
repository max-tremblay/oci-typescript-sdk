/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Possible operation types.
 **/
export enum OperationType {
  CreateMesh = "CREATE_MESH",
  UpdateMesh = "UPDATE_MESH",
  DeleteMesh = "DELETE_MESH",
  MoveMesh = "MOVE_MESH",
  CreateAccessPolicy = "CREATE_ACCESS_POLICY",
  UpdateAccessPolicy = "UPDATE_ACCESS_POLICY",
  DeleteAccessPolicy = "DELETE_ACCESS_POLICY",
  MoveAccessPolicy = "MOVE_ACCESS_POLICY",
  CreateVirtualService = "CREATE_VIRTUAL_SERVICE",
  UpdateVirtualService = "UPDATE_VIRTUAL_SERVICE",
  DeleteVirtualService = "DELETE_VIRTUAL_SERVICE",
  MoveVirtualService = "MOVE_VIRTUAL_SERVICE",
  CreateVirtualServiceRouteTable = "CREATE_VIRTUAL_SERVICE_ROUTE_TABLE",
  UpdateVirtualServiceRouteTable = "UPDATE_VIRTUAL_SERVICE_ROUTE_TABLE",
  DeleteVirtualServiceRouteTable = "DELETE_VIRTUAL_SERVICE_ROUTE_TABLE",
  MoveVirtualServiceRouteTable = "MOVE_VIRTUAL_SERVICE_ROUTE_TABLE",
  CreateVirtualDeployment = "CREATE_VIRTUAL_DEPLOYMENT",
  UpdateVirtualDeployment = "UPDATE_VIRTUAL_DEPLOYMENT",
  DeleteVirtualDeployment = "DELETE_VIRTUAL_DEPLOYMENT",
  MoveVirtualDeployment = "MOVE_VIRTUAL_DEPLOYMENT",
  CreateIngressGateway = "CREATE_INGRESS_GATEWAY",
  UpdateIngressGateway = "UPDATE_INGRESS_GATEWAY",
  DeleteIngressGateway = "DELETE_INGRESS_GATEWAY",
  MoveIngressGateway = "MOVE_INGRESS_GATEWAY",
  CreateIngressGatewayRouteTable = "CREATE_INGRESS_GATEWAY_ROUTE_TABLE",
  UpdateIngressGatewayRouteTable = "UPDATE_INGRESS_GATEWAY_ROUTE_TABLE",
  DeleteIngressGatewayRouteTable = "DELETE_INGRESS_GATEWAY_ROUTE_TABLE",
  MoveIngressGatewayRouteTable = "MOVE_INGRESS_GATEWAY_ROUTE_TABLE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): OperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationType): OperationType {
    return obj;
  }
}

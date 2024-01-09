/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * Compute related properties.
 */
export interface ComputeProperties {
  /**
   * Primary IP address of the compute instance.
   */
  "primaryIp"?: string;
  /**
   * Fully Qualified DNS Name.
   */
  "dnsName"?: string;
  /**
   * Information about the asset.
   */
  "description"?: string;
  /**
   * Number of CPUs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "coresCount"?: number;
  /**
   * CPU model name.
   */
  "cpuModel"?: string;
  /**
   * Number of GPU devices. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "gpuDevicesCount"?: number;
  /**
   * List of GPU devices attached to a virtual machine.
   */
  "gpuDevices"?: Array<model.GpuDevice>;
  /**
   * Number of threads per core. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "threadsPerCoreCount"?: number;
  /**
   * Memory size in MBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryInMBs"?: number;
  /**
   * Whether Pmem is enabled. Decides if NVDIMMs are used as a permanent memory.
   */
  "isPmemEnabled"?: boolean;
  /**
   * Pmem size in MBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "pmemInMBs"?: number;
  /**
   * Operating system.
   */
  "operatingSystem"?: string;
  /**
   * Operating system version.
   */
  "operatingSystemVersion"?: string;
  /**
   * Host name of the VM.
   */
  "hostName"?: string;
  /**
   * The current power state of the virtual machine.
   */
  "powerState"?: string;
  /**
   * Guest state.
   */
  "guestState"?: string;
  /**
   * Whether Trusted Platform Module (TPM) is enabled.
   */
  "isTpmEnabled"?: boolean;
  /**
   * Number of connected networks. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "connectedNetworks"?: number;
  /**
   * Number of network ethernet cards. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nicsCount"?: number;
  /**
   * List of network ethernet cards attached to a virtual machine.
   */
  "nics"?: Array<model.Nic>;
  /**
   * Provision storage size in MBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageProvisionedInMBs"?: number;
  /**
   * Number of disks. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "disksCount"?: number;
  /**
   * Lists the set of disks belonging to the virtual machine. This list is unordered.
   */
  "disks"?: Array<model.Disk>;
  /**
   * Information about firmware type for this virtual machine.
   */
  "firmware"?: string;
  /**
   * Latency sensitivity.
   */
  "latencySensitivity"?: string;
  /**
   * The properties of the NVDIMMs attached to a virtual machine.
   */
  "nvdimms"?: Array<model.Nvdimm>;
  "nvdimmController"?: model.NvdimmController;
  "scsiController"?: model.ScsiController;
  /**
   * Hardware version.
   */
  "hardwareVersion"?: string;
}

export namespace ComputeProperties {
  export function getJsonObj(obj: ComputeProperties): object {
    const jsonObj = {
      ...obj,
      ...{
        "gpuDevices": obj.gpuDevices
          ? obj.gpuDevices.map(item => {
              return model.GpuDevice.getJsonObj(item);
            })
          : undefined,

        "nics": obj.nics
          ? obj.nics.map(item => {
              return model.Nic.getJsonObj(item);
            })
          : undefined,

        "disks": obj.disks
          ? obj.disks.map(item => {
              return model.Disk.getJsonObj(item);
            })
          : undefined,

        "nvdimms": obj.nvdimms
          ? obj.nvdimms.map(item => {
              return model.Nvdimm.getJsonObj(item);
            })
          : undefined,
        "nvdimmController": obj.nvdimmController
          ? model.NvdimmController.getJsonObj(obj.nvdimmController)
          : undefined,
        "scsiController": obj.scsiController
          ? model.ScsiController.getJsonObj(obj.scsiController)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComputeProperties): object {
    const jsonObj = {
      ...obj,
      ...{
        "gpuDevices": obj.gpuDevices
          ? obj.gpuDevices.map(item => {
              return model.GpuDevice.getDeserializedJsonObj(item);
            })
          : undefined,

        "nics": obj.nics
          ? obj.nics.map(item => {
              return model.Nic.getDeserializedJsonObj(item);
            })
          : undefined,

        "disks": obj.disks
          ? obj.disks.map(item => {
              return model.Disk.getDeserializedJsonObj(item);
            })
          : undefined,

        "nvdimms": obj.nvdimms
          ? obj.nvdimms.map(item => {
              return model.Nvdimm.getDeserializedJsonObj(item);
            })
          : undefined,
        "nvdimmController": obj.nvdimmController
          ? model.NvdimmController.getDeserializedJsonObj(obj.nvdimmController)
          : undefined,
        "scsiController": obj.scsiController
          ? model.ScsiController.getDeserializedJsonObj(obj.scsiController)
          : undefined
      }
    };

    return jsonObj;
  }
}

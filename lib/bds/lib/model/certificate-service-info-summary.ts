/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * List of TLS/SSL information of services
 */
export interface CertificateServiceInfoSummary {
  /**
   * Name of the service
   */
  "service": CertificateServiceInfoSummary.Service;
  /**
   * Whether certificate is enabled or disabled
   */
  "serviceCertificateStatus": CertificateServiceInfoSummary.ServiceCertificateStatus;
  /**
   * List of Host specific certificate details
   */
  "hostSpecificCertificateDetails": Array<model.HostSpecificCertificateDetails>;
}

export namespace CertificateServiceInfoSummary {
  export enum Service {
    Zookeeper = "ZOOKEEPER",
    Ams = "AMS",
    Hdfs = "HDFS",
    Yarn = "YARN",
    Mapreduce = "MAPREDUCE",
    Oozie = "OOZIE",
    Hbase = "HBASE",
    Spark = "SPARK",
    Hive = "HIVE",
    Kafka = "KAFKA",
    Flink = "FLINK",
    Registry = "REGISTRY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ServiceCertificateStatus {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CertificateServiceInfoSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "hostSpecificCertificateDetails": obj.hostSpecificCertificateDetails
          ? obj.hostSpecificCertificateDetails.map(item => {
              return model.HostSpecificCertificateDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CertificateServiceInfoSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "hostSpecificCertificateDetails": obj.hostSpecificCertificateDetails
          ? obj.hostSpecificCertificateDetails.map(item => {
              return model.HostSpecificCertificateDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

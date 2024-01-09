/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
* A file system and the path that you can use to mount it. Each export
* resource belongs to exactly one export set.
* <p>
The export's path attribute is not a path in the
* referenced file system, but the value used by clients for the path
* component of the remotetarget argument when mounting the file
* system.
* <p>
The path must start with a slash (/) followed by a sequence of zero or more
* slash-separated path elements. For any two export resources associated with
* the same export set, except those in a 'DELETED' state, the path element
* sequence for the first export resource can't contain the
* complete path element sequence of the second export resource.
* <p>

* For example, the following are acceptable:
* <p>
  * /example and /path
*   * /example1 and /example2
*   * /example and /example1
* <p>
The following examples are not acceptable:
*   * /example and /example/path
*   * / and /example
* <p>
Paths may not end in a slash (/). No path element can be a period (.)
* or two periods in sequence (..). All path elements must be 255 bytes or less.
* <p>
No two non-'DELETED' export resources in the same export set can
* reference the same file system.
* <p>
Use `exportOptions` to control access to an export. For more information, see
* [Export Options](https://docs.cloud.oracle.com/Content/File/Tasks/exportoptions.htm).
* 
*/
export interface Export {
  /**
    * Policies that apply to NFS requests made through this
* export. `exportOptions` contains a sequential list of
* `ClientOptions`. Each `ClientOptions` item defines the
* export options that are applied to a specified
* set of clients.
* <p>
For each NFS request, the first `ClientOptions` option
* in the list whose `source` attribute matches the source
* IP address of the request is applied.
* <p>
If a client source IP address does not match the `source`
* property of any `ClientOptions` in the list, then the
* export will be invisible to that client. This export will
* not be returned by `MOUNTPROC_EXPORT` calls made by the client
* and any attempt to mount or access the file system through
* this export will result in an error.
* <p>
**Exports without defined `ClientOptions` are invisible to all clients.**
* <p>
If one export is invisible to a particular client, associated file
* systems may still be accessible through other exports on the same
* or different mount targets.
* To completely deny client access to a file system, be sure that the client
* source IP address is not included in any export for any mount target
* associated with the file system.
* 
    */
  "exportOptions": Array<model.ClientOptions>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of this export's export set.
   */
  "exportSetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of this export's file system.
   */
  "fileSystemId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of this export.
   */
  "id": string;
  /**
   * The current state of this export.
   */
  "lifecycleState": Export.LifecycleState;
  /**
    * Path used to access the associated file system.
* <p>
Avoid entering confidential information.
* <p>
Example: `/accounting`
* 
    */
  "path": string;
  /**
   * Whether or not the export should use ID mapping for Unix groups rather than the group list provided within an NFS request's RPC header. When this flag is true the Unix UID from the RPC header is used to retrieve the list of secondary groups from a the ID mapping subsystem. The primary GID is always taken from the RPC header. If ID mapping is not configured, incorrectly configured, unavailable, or cannot be used to determine a list of secondary groups then an empty secondary group list is used for authorization. If the number of groups exceeds the limit of 256 groups, the list retrieved from LDAP is truncated to the first 256 groups read.
   */
  "isIdmapGroupsForSysAuth"?: boolean;
  /**
    * The date and time the export was created, expressed
* in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
}

export namespace Export {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Export): object {
    const jsonObj = {
      ...obj,
      ...{
        "exportOptions": obj.exportOptions
          ? obj.exportOptions.map(item => {
              return model.ClientOptions.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Export): object {
    const jsonObj = {
      ...obj,
      ...{
        "exportOptions": obj.exportOptions
          ? obj.exportOptions.map(item => {
              return model.ClientOptions.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

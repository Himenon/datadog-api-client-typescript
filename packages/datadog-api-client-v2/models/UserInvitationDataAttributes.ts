/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from "../http/http";

/**
 * Attributes of a user invitation.
 */
export class UserInvitationDataAttributes {
  /**
   * Creation time of the user invitation.
   */
  "createdAt"?: Date;
  /**
   * Time of invitation expiration.
   */
  "expiresAt"?: Date;
  /**
   * Type of invitation.
   */
  "inviteType"?: string;
  /**
   * UUID of the user invitation.
   */
  "uuid"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "createdAt",
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    {
      name: "expiresAt",
      baseName: "expires_at",
      type: "Date",
      format: "date-time",
    },
    {
      name: "inviteType",
      baseName: "invite_type",
      type: "string",
      format: "",
    },
    {
      name: "uuid",
      baseName: "uuid",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return UserInvitationDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
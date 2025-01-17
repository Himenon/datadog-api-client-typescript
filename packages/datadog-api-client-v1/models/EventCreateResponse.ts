/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EventAlertType } from "./EventAlertType";
import { EventPriority } from "./EventPriority";

export class EventCreateResponse {
  "alertType"?: EventAlertType;
  /**
   * POSIX timestamp of the event. Must be sent as an integer (i.e. no quotes). Limited to events no older than 7 days.
   */
  "dateHappened"?: number;
  /**
   * A device name.
   */
  "deviceName"?: string;
  /**
   * Host name to associate with the event. Any tags associated with the host are also applied to this event.
   */
  "host"?: string;
  /**
   * Integer ID of the event.
   */
  "id"?: number;
  /**
   * Payload of the event.
   */
  "payload"?: string;
  "priority"?: EventPriority;
  /**
   * ID of the parent event. Must be sent as an integer (i.e. no quotes).
   */
  "relatedEventId"?: number;
  /**
   * The type of event being posted. Option examples include nagios, hudson, jenkins, my_apps, chef, puppet, git, bitbucket, etc. A complete list of source attribute values [available here](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
   */
  "sourceTypeName"?: string;
  /**
   * A status.
   */
  "status"?: string;
  /**
   * A list of tags to apply to the event.
   */
  "tags"?: Array<string>;
  /**
   * The body of the event. Limited to 4000 characters. The text supports markdown. Use `msg_text` with the Datadog Ruby library.
   */
  "text"?: string;
  /**
   * The event title. Limited to 100 characters. Use `msg_title` with the Datadog Ruby library.
   */
  "title"?: string;
  /**
   * URL of the event.
   */
  "url"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    alertType: {
      baseName: "alert_type",
      type: "EventAlertType",
    },
    dateHappened: {
      baseName: "date_happened",
      type: "number",

      format: "int64",
    },
    deviceName: {
      baseName: "device_name",
      type: "string",
    },
    host: {
      baseName: "host",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "number",

      format: "int64",
    },
    payload: {
      baseName: "payload",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "EventPriority",
    },
    relatedEventId: {
      baseName: "related_event_id",
      type: "number",

      format: "int64",
    },
    sourceTypeName: {
      baseName: "source_type_name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    text: {
      baseName: "text",
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
    },
  };

  static getAttributeTypeMap() {
    return EventCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}

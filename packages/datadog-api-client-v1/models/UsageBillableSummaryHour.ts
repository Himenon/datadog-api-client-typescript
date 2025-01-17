/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageBillableSummaryKeys } from "./UsageBillableSummaryKeys";

export class UsageBillableSummaryHour {
  /**
   * The billing plan.
   */
  "billingPlan"?: string;
  /**
   * Shows the last date of usage.
   */
  "endDate"?: Date;
  /**
   * The number of organizations.
   */
  "numOrgs"?: number;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * Shows usage aggregation for a billing period.
   */
  "ratioInMonth"?: number;
  /**
   * Shows the first date of usage.
   */
  "startDate"?: Date;
  "usage"?: UsageBillableSummaryKeys;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    billingPlan: {
      baseName: "billing_plan",
      type: "string",
    },
    endDate: {
      baseName: "end_date",
      type: "Date",

      format: "date-time",
    },
    numOrgs: {
      baseName: "num_orgs",
      type: "number",

      format: "int64",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    ratioInMonth: {
      baseName: "ratio_in_month",
      type: "number",

      format: "double",
    },
    startDate: {
      baseName: "start_date",
      type: "Date",

      format: "date-time",
    },
    usage: {
      baseName: "usage",
      type: "UsageBillableSummaryKeys",
    },
  };

  static getAttributeTypeMap() {
    return UsageBillableSummaryHour.attributeTypeMap;
  }

  public constructor() {}
}

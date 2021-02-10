// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration } from "../configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile,
} from "../http/http";
import FormData from "form-data";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { UsageAnalyzedLogsResponse } from "../models/UsageAnalyzedLogsResponse";
import { UsageAttributionResponse } from "../models/UsageAttributionResponse";
import { UsageAttributionSort } from "../models/UsageAttributionSort";
import { UsageBillableSummaryResponse } from "../models/UsageBillableSummaryResponse";
import { UsageCustomReportsResponse } from "../models/UsageCustomReportsResponse";
import { UsageFargateResponse } from "../models/UsageFargateResponse";
import { UsageHostsResponse } from "../models/UsageHostsResponse";
import { UsageIncidentManagementResponse } from "../models/UsageIncidentManagementResponse";
import { UsageIndexedSpansResponse } from "../models/UsageIndexedSpansResponse";
import { UsageIngestedSpansResponse } from "../models/UsageIngestedSpansResponse";
import { UsageIoTResponse } from "../models/UsageIoTResponse";
import { UsageLambdaResponse } from "../models/UsageLambdaResponse";
import { UsageLogsByIndexResponse } from "../models/UsageLogsByIndexResponse";
import { UsageLogsResponse } from "../models/UsageLogsResponse";
import { UsageNetworkFlowsResponse } from "../models/UsageNetworkFlowsResponse";
import { UsageNetworkHostsResponse } from "../models/UsageNetworkHostsResponse";
import { UsageProfilingResponse } from "../models/UsageProfilingResponse";
import { UsageRumSessionsResponse } from "../models/UsageRumSessionsResponse";
import { UsageSNMPResponse } from "../models/UsageSNMPResponse";
import { UsageSort } from "../models/UsageSort";
import { UsageSortDirection } from "../models/UsageSortDirection";
import { UsageSpecifiedCustomReportsResponse } from "../models/UsageSpecifiedCustomReportsResponse";
import { UsageSummaryResponse } from "../models/UsageSummaryResponse";
import { UsageSyntheticsAPIResponse } from "../models/UsageSyntheticsAPIResponse";
import { UsageSyntheticsBrowserResponse } from "../models/UsageSyntheticsBrowserResponse";
import { UsageSyntheticsResponse } from "../models/UsageSyntheticsResponse";
import { UsageTimeseriesResponse } from "../models/UsageTimeseriesResponse";
import { UsageTopAvgMetricsResponse } from "../models/UsageTopAvgMetricsResponse";
import { UsageTraceResponse } from "../models/UsageTraceResponse";
import { UsageTracingWithoutLimitsResponse } from "../models/UsageTracingWithoutLimitsResponse";

/**
 * no description
 */
export class UsageMeteringApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Get daily custom reports.
   * Get the list of available daily custom reports
   * @param pageSize The number of files to return in the response. &#x60;[default&#x3D;60]&#x60;.
   * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
   * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
   */
  public async getDailyCustomReports(
    pageSize?: number,
    pageNumber?: number,
    sortDir?: UsageSortDirection,
    sort?: UsageSort,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/daily_custom_reports";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64")
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64")
      );
    }
    if (sortDir !== undefined) {
      requestContext.setQueryParam(
        "sort_dir",
        ObjectSerializer.serialize(sortDir, "UsageSortDirection", "")
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "UsageSort", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for incident management.
   * Get hourly usage for incident management
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public async getIncidentManagement(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getIncidentManagement."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/incident-management";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for ingested spans.
   * Get hourly usage for ingested spans
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public async getIngestedSpans(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getIngestedSpans."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/ingested-spans";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get monthly custom reports.
   * Get the list of available monthly custom reports
   * @param pageSize The number of files to return in the response &#x60;[default&#x3D;60].&#x60;
   * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
   * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
   */
  public async getMonthlyCustomReports(
    pageSize?: number,
    pageNumber?: number,
    sortDir?: UsageSortDirection,
    sort?: UsageSort,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/monthly_custom_reports";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64")
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64")
      );
    }
    if (sortDir !== undefined) {
      requestContext.setQueryParam(
        "sort_dir",
        ObjectSerializer.serialize(sortDir, "UsageSortDirection", "")
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "UsageSort", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get specified daily custom reports.
   * Get specified daily custom reports
   * @param reportId The specified ID to search results for.
   */
  public async getSpecifiedDailyCustomReports(
    reportId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'reportId' is not null or undefined
    if (reportId === null || reportId === undefined) {
      throw new RequiredError(
        "Required parameter reportId was null or undefined when calling getSpecifiedDailyCustomReports."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/daily_custom_reports/{report_id}".replace(
      "{" + "report_id" + "}",
      encodeURIComponent(String(reportId))
    );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get specified monthly custom reports.
   * Get specified monthly custom reports
   * @param reportId The specified ID to search results for.
   */
  public async getSpecifiedMonthlyCustomReports(
    reportId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'reportId' is not null or undefined
    if (reportId === null || reportId === undefined) {
      throw new RequiredError(
        "Required parameter reportId was null or undefined when calling getSpecifiedMonthlyCustomReports."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/monthly_custom_reports/{report_id}".replace(
      "{" + "report_id" + "}",
      encodeURIComponent(String(reportId))
    );

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for tracing without limits.  **Note** This endpoint has been renamed to `/api/v1/usage/ingested-spans`.
   * Get hourly usage for tracing without limits
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public async getTracingWithoutLimits(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getTracingWithoutLimits."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/tracing-without-limits";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for analyzed logs (Security Monitoring).
   * Get hourly usage for analyzed logs
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public async getUsageAnalyzedLogs(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageAnalyzedLogs."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/analyzed_logs";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get Usage Attribution.
   * Get Usage Attribution
   * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
   * @param fields The specified field to search results for.
   * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
   * @param sortDirection The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @param sortName The field to sort by.
   */
  public async getUsageAttribution(
    startMonth: Date,
    fields: string,
    endMonth?: Date,
    sortDirection?: UsageSortDirection,
    sortName?: UsageAttributionSort,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startMonth' is not null or undefined
    if (startMonth === null || startMonth === undefined) {
      throw new RequiredError(
        "Required parameter startMonth was null or undefined when calling getUsageAttribution."
      );
    }

    // verify required parameter 'fields' is not null or undefined
    if (fields === null || fields === undefined) {
      throw new RequiredError(
        "Required parameter fields was null or undefined when calling getUsageAttribution."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/attribution";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startMonth !== undefined) {
      requestContext.setQueryParam(
        "start_month",
        ObjectSerializer.serialize(startMonth, "Date", "date-time")
      );
    }
    if (fields !== undefined) {
      requestContext.setQueryParam(
        "fields",
        ObjectSerializer.serialize(fields, "string", "")
      );
    }
    if (endMonth !== undefined) {
      requestContext.setQueryParam(
        "end_month",
        ObjectSerializer.serialize(endMonth, "Date", "date-time")
      );
    }
    if (sortDirection !== undefined) {
      requestContext.setQueryParam(
        "sort_direction",
        ObjectSerializer.serialize(sortDirection, "UsageSortDirection", "")
      );
    }
    if (sortName !== undefined) {
      requestContext.setQueryParam(
        "sort_name",
        ObjectSerializer.serialize(sortName, "UsageAttributionSort", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get billable usage across your account.
   * Get billable usage across your account
   * @param month Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage starting this month.
   */
  public async getUsageBillableSummary(
    month?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/usage/billable-summary";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (month !== undefined) {
      requestContext.setQueryParam(
        "month",
        ObjectSerializer.serialize(month, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
   * Get hourly usage for Fargate
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public async getUsageFargate(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageFargate."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/fargate";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for hosts and containers.
   * Get hourly usage for hosts and containers
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public async getUsageHosts(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageHosts."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/hosts";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for indexed spans.
   * Get hourly usage for indexed spans
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public async getUsageIndexedSpans(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageIndexedSpans."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/indexed-spans";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for IoT.
   * Get hourly usage for IoT
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public async getUsageInternetOfThings(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageInternetOfThings."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/iot";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for lambda.
   * Get hourly usage for Lambda
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public async getUsageLambda(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageLambda."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/aws_lambda";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for logs.
   * Get hourly usage for Logs
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public async getUsageLogs(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageLogs."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/logs";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for logs by index.
   * Get hourly usage for Logs by Index
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @param indexName Comma-separated list of log index names.
   */
  public async getUsageLogsByIndex(
    startHr: Date,
    endHr?: Date,
    indexName?: Array<string>,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageLogsByIndex."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/logs_by_index";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }
    if (indexName !== undefined) {
      requestContext.setQueryParam(
        "index_name",
        ObjectSerializer.serialize(indexName, "Array<string>", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for network flows.
   * Get hourly usage for Network Flows
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public async getUsageNetworkFlows(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageNetworkFlows."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/network_flows";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for network hosts.
   * Get hourly usage for Network Hosts
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public async getUsageNetworkHosts(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageNetworkHosts."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/network_hosts";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for profiled hosts.
   * Get hourly usage for profiled hosts
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public async getUsageProfiling(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageProfiling."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/profiling";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
   * Get hourly usage for RUM Sessions
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @param type RUM type: &#x60;[browser, mobile]&#x60;. Defaults to &#x60;browser&#x60;.
   */
  public async getUsageRumSessions(
    startHr: Date,
    endHr?: Date,
    type?: string,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageRumSessions."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/rum_sessions";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }
    if (type !== undefined) {
      requestContext.setQueryParam(
        "type",
        ObjectSerializer.serialize(type, "string", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for SNMP devices.
   * Get hourly usage for SNMP devices
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public async getUsageSNMP(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageSNMP."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/snmp";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get usage across your multi-org account. You must have the multi-org feature enabled.
   * Get usage across your multi-org account
   * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
   * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
   * @param includeOrgDetails Include usage summaries for each sub-org.
   */
  public async getUsageSummary(
    startMonth: Date,
    endMonth?: Date,
    includeOrgDetails?: boolean,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startMonth' is not null or undefined
    if (startMonth === null || startMonth === undefined) {
      throw new RequiredError(
        "Required parameter startMonth was null or undefined when calling getUsageSummary."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/summary";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startMonth !== undefined) {
      requestContext.setQueryParam(
        "start_month",
        ObjectSerializer.serialize(startMonth, "Date", "date-time")
      );
    }
    if (endMonth !== undefined) {
      requestContext.setQueryParam(
        "end_month",
        ObjectSerializer.serialize(endMonth, "Date", "date-time")
      );
    }
    if (includeOrgDetails !== undefined) {
      requestContext.setQueryParam(
        "include_org_details",
        ObjectSerializer.serialize(includeOrgDetails, "boolean", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).
   * Get hourly usage for Synthetics Checks
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public async getUsageSynthetics(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageSynthetics."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/synthetics";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
   * Get hourly usage for Synthetics API Checks
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public async getUsageSyntheticsAPI(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageSyntheticsAPI."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/synthetics_api";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for synthetics browser checks.
   * Get hourly usage for Synthetics Browser Checks
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public async getUsageSyntheticsBrowser(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageSyntheticsBrowser."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/synthetics_browser";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
   * Get hourly usage for custom metrics
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public async getUsageTimeseries(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageTimeseries."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/timeseries";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get top [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average.
   * Get top custom metrics by hourly average
   * @param month Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour.
   * @param names Comma-separated list of metric names.
   * @param limit Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified.
   */
  public async getUsageTopAvgMetrics(
    month: Date,
    names?: Array<string>,
    limit?: number,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'month' is not null or undefined
    if (month === null || month === undefined) {
      throw new RequiredError(
        "Required parameter month was null or undefined when calling getUsageTopAvgMetrics."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/top_avg_metrics";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (month !== undefined) {
      requestContext.setQueryParam(
        "month",
        ObjectSerializer.serialize(month, "Date", "date-time")
      );
    }
    if (names !== undefined) {
      requestContext.setQueryParam(
        "names",
        ObjectSerializer.serialize(names, "Array<string>", "")
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int32")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get hourly usage for trace search.  **Note** This endpoint has been renamed to `/api/v1/usage/indexed-spans`.
   * Get hourly usage for Trace Search
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public async getUsageTrace(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageTrace."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/traces";

    // Make Request Context
    const requestContext = config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class UsageMeteringApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDailyCustomReports
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDailyCustomReports(
    response: ResponseContext
  ): Promise<UsageCustomReportsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCustomReportsResponse",
        ""
      ) as UsageCustomReportsResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCustomReportsResponse",
        ""
      ) as UsageCustomReportsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getIncidentManagement
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentManagement(
    response: ResponseContext
  ): Promise<UsageIncidentManagementResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageIncidentManagementResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIncidentManagementResponse",
        ""
      ) as UsageIncidentManagementResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageIncidentManagementResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIncidentManagementResponse",
        ""
      ) as UsageIncidentManagementResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getIngestedSpans
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIngestedSpans(
    response: ResponseContext
  ): Promise<UsageIngestedSpansResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageIngestedSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIngestedSpansResponse",
        ""
      ) as UsageIngestedSpansResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageIngestedSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIngestedSpansResponse",
        ""
      ) as UsageIngestedSpansResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getMonthlyCustomReports
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonthlyCustomReports(
    response: ResponseContext
  ): Promise<UsageCustomReportsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCustomReportsResponse",
        ""
      ) as UsageCustomReportsResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCustomReportsResponse",
        ""
      ) as UsageCustomReportsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSpecifiedDailyCustomReports
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSpecifiedDailyCustomReports(
    response: ResponseContext
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSpecifiedCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSpecifiedCustomReportsResponse",
        ""
      ) as UsageSpecifiedCustomReportsResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSpecifiedCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSpecifiedCustomReportsResponse",
        ""
      ) as UsageSpecifiedCustomReportsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSpecifiedMonthlyCustomReports
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSpecifiedMonthlyCustomReports(
    response: ResponseContext
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSpecifiedCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSpecifiedCustomReportsResponse",
        ""
      ) as UsageSpecifiedCustomReportsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSpecifiedCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSpecifiedCustomReportsResponse",
        ""
      ) as UsageSpecifiedCustomReportsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTracingWithoutLimits
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTracingWithoutLimits(
    response: ResponseContext
  ): Promise<UsageTracingWithoutLimitsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageTracingWithoutLimitsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTracingWithoutLimitsResponse",
        ""
      ) as UsageTracingWithoutLimitsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageTracingWithoutLimitsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTracingWithoutLimitsResponse",
        ""
      ) as UsageTracingWithoutLimitsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageAnalyzedLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageAnalyzedLogs(
    response: ResponseContext
  ): Promise<UsageAnalyzedLogsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageAnalyzedLogsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageAnalyzedLogsResponse",
        ""
      ) as UsageAnalyzedLogsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageAnalyzedLogsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageAnalyzedLogsResponse",
        ""
      ) as UsageAnalyzedLogsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageAttribution
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageAttribution(
    response: ResponseContext
  ): Promise<UsageAttributionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageAttributionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageAttributionResponse",
        ""
      ) as UsageAttributionResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageAttributionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageAttributionResponse",
        ""
      ) as UsageAttributionResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageBillableSummary
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageBillableSummary(
    response: ResponseContext
  ): Promise<UsageBillableSummaryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageBillableSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageBillableSummaryResponse",
        ""
      ) as UsageBillableSummaryResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageBillableSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageBillableSummaryResponse",
        ""
      ) as UsageBillableSummaryResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageFargate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageFargate(
    response: ResponseContext
  ): Promise<UsageFargateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageFargateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageFargateResponse",
        ""
      ) as UsageFargateResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageFargateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageFargateResponse",
        ""
      ) as UsageFargateResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageHosts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageHosts(
    response: ResponseContext
  ): Promise<UsageHostsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageHostsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageHostsResponse",
        ""
      ) as UsageHostsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageHostsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageHostsResponse",
        ""
      ) as UsageHostsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageIndexedSpans
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageIndexedSpans(
    response: ResponseContext
  ): Promise<UsageIndexedSpansResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageIndexedSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIndexedSpansResponse",
        ""
      ) as UsageIndexedSpansResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageIndexedSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIndexedSpansResponse",
        ""
      ) as UsageIndexedSpansResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageInternetOfThings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageInternetOfThings(
    response: ResponseContext
  ): Promise<UsageIoTResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageIoTResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIoTResponse",
        ""
      ) as UsageIoTResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageIoTResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIoTResponse",
        ""
      ) as UsageIoTResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageLambda
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageLambda(
    response: ResponseContext
  ): Promise<UsageLambdaResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageLambdaResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLambdaResponse",
        ""
      ) as UsageLambdaResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageLambdaResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLambdaResponse",
        ""
      ) as UsageLambdaResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageLogs(
    response: ResponseContext
  ): Promise<UsageLogsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageLogsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLogsResponse",
        ""
      ) as UsageLogsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageLogsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLogsResponse",
        ""
      ) as UsageLogsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageLogsByIndex
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageLogsByIndex(
    response: ResponseContext
  ): Promise<UsageLogsByIndexResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageLogsByIndexResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLogsByIndexResponse",
        ""
      ) as UsageLogsByIndexResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageLogsByIndexResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLogsByIndexResponse",
        ""
      ) as UsageLogsByIndexResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageNetworkFlows
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageNetworkFlows(
    response: ResponseContext
  ): Promise<UsageNetworkFlowsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageNetworkFlowsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageNetworkFlowsResponse",
        ""
      ) as UsageNetworkFlowsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageNetworkFlowsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageNetworkFlowsResponse",
        ""
      ) as UsageNetworkFlowsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageNetworkHosts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageNetworkHosts(
    response: ResponseContext
  ): Promise<UsageNetworkHostsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageNetworkHostsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageNetworkHostsResponse",
        ""
      ) as UsageNetworkHostsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageNetworkHostsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageNetworkHostsResponse",
        ""
      ) as UsageNetworkHostsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageProfiling
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageProfiling(
    response: ResponseContext
  ): Promise<UsageProfilingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageProfilingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageProfilingResponse",
        ""
      ) as UsageProfilingResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageProfilingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageProfilingResponse",
        ""
      ) as UsageProfilingResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageRumSessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageRumSessions(
    response: ResponseContext
  ): Promise<UsageRumSessionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageRumSessionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageRumSessionsResponse",
        ""
      ) as UsageRumSessionsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageRumSessionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageRumSessionsResponse",
        ""
      ) as UsageRumSessionsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageSNMP
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSNMP(
    response: ResponseContext
  ): Promise<UsageSNMPResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSNMPResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSNMPResponse",
        ""
      ) as UsageSNMPResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSNMPResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSNMPResponse",
        ""
      ) as UsageSNMPResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageSummary
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSummary(
    response: ResponseContext
  ): Promise<UsageSummaryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSummaryResponse",
        ""
      ) as UsageSummaryResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSummaryResponse",
        ""
      ) as UsageSummaryResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageSynthetics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSynthetics(
    response: ResponseContext
  ): Promise<UsageSyntheticsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSyntheticsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsResponse",
        ""
      ) as UsageSyntheticsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSyntheticsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsResponse",
        ""
      ) as UsageSyntheticsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageSyntheticsAPI
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSyntheticsAPI(
    response: ResponseContext
  ): Promise<UsageSyntheticsAPIResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSyntheticsAPIResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsAPIResponse",
        ""
      ) as UsageSyntheticsAPIResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSyntheticsAPIResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsAPIResponse",
        ""
      ) as UsageSyntheticsAPIResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageSyntheticsBrowser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSyntheticsBrowser(
    response: ResponseContext
  ): Promise<UsageSyntheticsBrowserResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSyntheticsBrowserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsBrowserResponse",
        ""
      ) as UsageSyntheticsBrowserResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSyntheticsBrowserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsBrowserResponse",
        ""
      ) as UsageSyntheticsBrowserResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageTimeseries(
    response: ResponseContext
  ): Promise<UsageTimeseriesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageTimeseriesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTimeseriesResponse",
        ""
      ) as UsageTimeseriesResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageTimeseriesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTimeseriesResponse",
        ""
      ) as UsageTimeseriesResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageTopAvgMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageTopAvgMetrics(
    response: ResponseContext
  ): Promise<UsageTopAvgMetricsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageTopAvgMetricsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTopAvgMetricsResponse",
        ""
      ) as UsageTopAvgMetricsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageTopAvgMetricsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTopAvgMetricsResponse",
        ""
      ) as UsageTopAvgMetricsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageTrace
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageTrace(
    response: ResponseContext
  ): Promise<UsageTraceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageTraceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTraceResponse",
        ""
      ) as UsageTraceResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageTraceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTraceResponse",
        ""
      ) as UsageTraceResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
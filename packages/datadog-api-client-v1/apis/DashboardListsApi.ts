// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration, getServer } from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { DashboardList } from "../models/DashboardList";
import { DashboardListDeleteResponse } from "../models/DashboardListDeleteResponse";
import { DashboardListListResponse } from "../models/DashboardListListResponse";

/**
 * no description
 */
export class DashboardListsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Create an empty dashboard list.
   * Create a dashboard list
   * @param body Create a dashboard list request body.
   */
  public async createDashboardList(
    body: DashboardList,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createDashboardList."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/lists/manual";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DashboardListsApi.createDashboardList"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardList", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["AuthZ"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Delete a dashboard list.
   * Delete a dashboard list
   * @param listId ID of the dashboard list to delete.
   */
  public async deleteDashboardList(
    listId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'listId' is not null or undefined
    if (listId === null || listId === undefined) {
      throw new RequiredError(
        "Required parameter listId was null or undefined when calling deleteDashboardList."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/lists/manual/{list_id}".replace(
      "{" + "list_id" + "}",
      encodeURIComponent(String(listId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DashboardListsApi.deleteDashboardList"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["AuthZ"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Fetch an existing dashboard list's definition.
   * Get a dashboard list
   * @param listId ID of the dashboard list to fetch.
   */
  public async getDashboardList(
    listId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'listId' is not null or undefined
    if (listId === null || listId === undefined) {
      throw new RequiredError(
        "Required parameter listId was null or undefined when calling getDashboardList."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/lists/manual/{list_id}".replace(
      "{" + "list_id" + "}",
      encodeURIComponent(String(listId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DashboardListsApi.getDashboardList"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["AuthZ"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Fetch all of your existing dashboard list definitions.
   * Get all dashboard lists
   */
  public async listDashboardLists(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/dashboard/lists/manual";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DashboardListsApi.listDashboardLists"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["AuthZ"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Update the name of a dashboard list.
   * Update a dashboard list
   * @param listId ID of the dashboard list to update.
   * @param body Update a dashboard list request body.
   */
  public async updateDashboardList(
    listId: number,
    body: DashboardList,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'listId' is not null or undefined
    if (listId === null || listId === undefined) {
      throw new RequiredError(
        "Required parameter listId was null or undefined when calling updateDashboardList."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateDashboardList."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/dashboard/lists/manual/{list_id}".replace(
      "{" + "list_id" + "}",
      encodeURIComponent(String(listId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "DashboardListsApi.updateDashboardList"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DashboardList", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["AuthZ"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class DashboardListsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDashboardList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDashboardList(
    response: ResponseContext
  ): Promise<DashboardList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
        ""
      ) as DashboardList;
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
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
        ""
      ) as DashboardList;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteDashboardList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDashboardList(
    response: ResponseContext
  ): Promise<DashboardListDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: DashboardListDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListDeleteResponse",
        ""
      ) as DashboardListDeleteResponse;
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
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DashboardListDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListDeleteResponse",
        ""
      ) as DashboardListDeleteResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDashboardList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDashboardList(
    response: ResponseContext
  ): Promise<DashboardList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
        ""
      ) as DashboardList;
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
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
        ""
      ) as DashboardList;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listDashboardLists
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDashboardLists(
    response: ResponseContext
  ): Promise<DashboardListListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: DashboardListListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListListResponse",
        ""
      ) as DashboardListListResponse;
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
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DashboardListListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardListListResponse",
        ""
      ) as DashboardListListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateDashboardList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDashboardList(
    response: ResponseContext
  ): Promise<DashboardList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
        ""
      ) as DashboardList;
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
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DashboardList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DashboardList",
        ""
      ) as DashboardList;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration, getServer } from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { APIErrorResponse } from '../models/APIErrorResponse';
import { CheckCanDeleteSLOResponse } from '../models/CheckCanDeleteSLOResponse';
import { SLOBulkDeleteResponse } from '../models/SLOBulkDeleteResponse';
import { SLODeleteResponse } from '../models/SLODeleteResponse';
import { SLOHistoryResponse } from '../models/SLOHistoryResponse';
import { SLOListResponse } from '../models/SLOListResponse';
import { SLOResponse } from '../models/SLOResponse';
import { SLOTimeframe } from '../models/SLOTimeframe';
import { ServiceLevelObjective } from '../models/ServiceLevelObjective';
import { ServiceLevelObjectiveRequest } from '../models/ServiceLevelObjectiveRequest';

/**
 * no description
 */
export class ServiceLevelObjectivesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Check if an SLO can be safely deleted. For example, assure an SLO can be deleted without disrupting a dashboard.
     * Check if SLOs can be safely deleted
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     */
    public async checkCanDeleteSLO(ids: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'ids' is not null or undefined
        if (ids === null || ids === undefined) {
            throw new RequiredError('Required parameter ids was null or undefined when calling checkCanDeleteSLO.');
        }


        // Path Params
        const localVarPath = '/api/v1/slo/can_delete';

        // Make Request Context
        const requestContext = getServer(config, 'ServiceLevelObjectivesApi.checkCanDeleteSLO').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a service level objective object.
     * Create an SLO object
     * @param body Service level objective request object.
     */
    public async createSLO(body: ServiceLevelObjectiveRequest, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createSLO.');
        }


        // Path Params
        const localVarPath = '/api/v1/slo';

        // Make Request Context
        const requestContext = getServer(config, 'ServiceLevelObjectivesApi.createSLO').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ServiceLevelObjectiveRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
     * Delete an SLO
     * @param sloId The ID of the service level objective.
     * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     */
    public async deleteSLO(sloId: string, force?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'sloId' is not null or undefined
        if (sloId === null || sloId === undefined) {
            throw new RequiredError('Required parameter sloId was null or undefined when calling deleteSLO.');
        }



        // Path Params
        const localVarPath = '/api/v1/slo/{slo_id}'
            .replace('{' + 'slo_id' + '}', encodeURIComponent(String(sloId)));

        // Make Request Context
        const requestContext = getServer(config, 'ServiceLevelObjectivesApi.deleteSLO').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
     * Bulk Delete SLO Timeframes
     * @param body Delete multiple service level objective objects request body.
     */
    public async deleteSLOTimeframeInBulk(body: { [key: string]: Array<SLOTimeframe>; }, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling deleteSLOTimeframeInBulk.');
        }


        // Path Params
        const localVarPath = '/api/v1/slo/bulk_delete';

        // Make Request Context
        const requestContext = getServer(config, 'ServiceLevelObjectivesApi.deleteSLOTimeframeInBulk').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "{ [key: string]: Array<SLOTimeframe>; }", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a service level objective object.
     * Get an SLO's details
     * @param sloId The ID of the service level objective object.
     */
    public async getSLO(sloId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'sloId' is not null or undefined
        if (sloId === null || sloId === undefined) {
            throw new RequiredError('Required parameter sloId was null or undefined when calling getSLO.');
        }


        // Path Params
        const localVarPath = '/api/v1/slo/{slo_id}'
            .replace('{' + 'slo_id' + '}', encodeURIComponent(String(sloId)));

        // Make Request Context
        const requestContext = getServer(config, 'ServiceLevelObjectivesApi.getSLO').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
     * Get an SLO's history
     * @param sloId The ID of the service level objective object.
     * @param fromTs The &#x60;from&#x60; timestamp for the query window in epoch seconds.
     * @param toTs The &#x60;to&#x60; timestamp for the query window in epoch seconds.
     */
    public async getSLOHistory(sloId: string, fromTs: number, toTs: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'sloId' is not null or undefined
        if (sloId === null || sloId === undefined) {
            throw new RequiredError('Required parameter sloId was null or undefined when calling getSLOHistory.');
        }


        // verify required parameter 'fromTs' is not null or undefined
        if (fromTs === null || fromTs === undefined) {
            throw new RequiredError('Required parameter fromTs was null or undefined when calling getSLOHistory.');
        }


        // verify required parameter 'toTs' is not null or undefined
        if (toTs === null || toTs === undefined) {
            throw new RequiredError('Required parameter toTs was null or undefined when calling getSLOHistory.');
        }


        // Path Params
        const localVarPath = '/api/v1/slo/{slo_id}/history'
            .replace('{' + 'slo_id' + '}', encodeURIComponent(String(sloId)));

        // Make Request Context
        const requestContext = getServer(config, 'ServiceLevelObjectivesApi.getSLOHistory').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromTs !== undefined) {
            requestContext.setQueryParam("from_ts", ObjectSerializer.serialize(fromTs, "number", "int64"));
        }
        if (toTs !== undefined) {
            requestContext.setQueryParam("to_ts", ObjectSerializer.serialize(toTs, "number", "int64"));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of service level objective objects for your organization.
     * Get all SLOs
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     * @param query The query string to filter results based on SLO names.
     * @param tagsQuery The query string to filter results based on a single SLO tag.
     * @param metricsQuery The query string to filter results based on SLO numerator and denominator.
     */
    public async listSLOs(ids?: string, query?: string, tagsQuery?: string, metricsQuery?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;





        // Path Params
        const localVarPath = '/api/v1/slo';

        // Make Request Context
        const requestContext = getServer(config, 'ServiceLevelObjectivesApi.listSLOs').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }
        if (tagsQuery !== undefined) {
            requestContext.setQueryParam("tags_query", ObjectSerializer.serialize(tagsQuery, "string", ""));
        }
        if (metricsQuery !== undefined) {
            requestContext.setQueryParam("metrics_query", ObjectSerializer.serialize(metricsQuery, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update the specified service level objective object.
     * Update an SLO
     * @param sloId The ID of the service level objective object.
     * @param body The edited service level objective request object.
     */
    public async updateSLO(sloId: string, body: ServiceLevelObjective, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'sloId' is not null or undefined
        if (sloId === null || sloId === undefined) {
            throw new RequiredError('Required parameter sloId was null or undefined when calling updateSLO.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling updateSLO.');
        }


        // Path Params
        const localVarPath = '/api/v1/slo/{slo_id}'
            .replace('{' + 'slo_id' + '}', encodeURIComponent(String(sloId)));

        // Make Request Context
        const requestContext = getServer(config, 'ServiceLevelObjectivesApi.updateSLO').makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ServiceLevelObjective", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ServiceLevelObjectivesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkCanDeleteSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkCanDeleteSLO(response: ResponseContext): Promise<CheckCanDeleteSLOResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckCanDeleteSLOResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckCanDeleteSLOResponse", ""
            ) as CheckCanDeleteSLOResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: CheckCanDeleteSLOResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckCanDeleteSLOResponse", ""
            ) as CheckCanDeleteSLOResponse;
            throw new ApiException<CheckCanDeleteSLOResponse>(409, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckCanDeleteSLOResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckCanDeleteSLOResponse", ""
            ) as CheckCanDeleteSLOResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSLO(response: ResponseContext): Promise<SLOListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SLOListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOListResponse", ""
            ) as SLOListResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SLOListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOListResponse", ""
            ) as SLOListResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSLO(response: ResponseContext): Promise<SLODeleteResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SLODeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLODeleteResponse", ""
            ) as SLODeleteResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: SLODeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLODeleteResponse", ""
            ) as SLODeleteResponse;
            throw new ApiException<SLODeleteResponse>(409, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SLODeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLODeleteResponse", ""
            ) as SLODeleteResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSLOTimeframeInBulk
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSLOTimeframeInBulk(response: ResponseContext): Promise<SLOBulkDeleteResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SLOBulkDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOBulkDeleteResponse", ""
            ) as SLOBulkDeleteResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SLOBulkDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOBulkDeleteResponse", ""
            ) as SLOBulkDeleteResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSLO(response: ResponseContext): Promise<SLOResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SLOResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOResponse", ""
            ) as SLOResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SLOResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOResponse", ""
            ) as SLOResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSLOHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSLOHistory(response: ResponseContext): Promise<SLOHistoryResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SLOHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOHistoryResponse", ""
            ) as SLOHistoryResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SLOHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOHistoryResponse", ""
            ) as SLOHistoryResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSLOs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSLOs(response: ResponseContext): Promise<SLOListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SLOListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOListResponse", ""
            ) as SLOListResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SLOListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOListResponse", ""
            ) as SLOListResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateSLO(response: ResponseContext): Promise<SLOListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SLOListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOListResponse", ""
            ) as SLOListResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SLOListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SLOListResponse", ""
            ) as SLOListResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
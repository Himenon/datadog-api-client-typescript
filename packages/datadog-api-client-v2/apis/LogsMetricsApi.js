"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMetricsApiResponseProcessor = exports.LogsMetricsApiRequestFactory = void 0;
// TODO: better import syntax?
var baseapi_1 = require("./baseapi");
var configuration_1 = require("../configuration");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
/**
 * no description
 */
var LogsMetricsApiRequestFactory = /** @class */ (function (_super) {
    __extends(LogsMetricsApiRequestFactory, _super);
    function LogsMetricsApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a metric based on your ingested logs in your organization. Returns the log-based metric object from the request body when the request is successful.
     * Create a log-based metric
     * @param body The definition of the new log-based metric.
     */
    LogsMetricsApiRequestFactory.prototype.createLogsMetric = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling createLogsMetric.');
                        }
                        localVarPath = '/api/v2/logs/config/metrics';
                        requestContext = configuration_1.getServer(config, 'LogsMetricsApi.createLogsMetric').makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LogsMetricCreateRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Delete a specific log-based metric from your organization.
     * Delete a log-based metric
     * @param metricId The name of the log-based metric.
     */
    LogsMetricsApiRequestFactory.prototype.deleteLogsMetric = function (metricId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'metricId' is not null or undefined
                        if (metricId === null || metricId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter metricId was null or undefined when calling deleteLogsMetric.');
                        }
                        localVarPath = '/api/v2/logs/config/metrics/{metric_id}'
                            .replace('{' + 'metric_id' + '}', encodeURIComponent(String(metricId)));
                        requestContext = configuration_1.getServer(config, 'LogsMetricsApi.deleteLogsMetric').makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Get a specific log-based metric from your organization.
     * Get a log-based metric
     * @param metricId The name of the log-based metric.
     */
    LogsMetricsApiRequestFactory.prototype.getLogsMetric = function (metricId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'metricId' is not null or undefined
                        if (metricId === null || metricId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter metricId was null or undefined when calling getLogsMetric.');
                        }
                        localVarPath = '/api/v2/logs/config/metrics/{metric_id}'
                            .replace('{' + 'metric_id' + '}', encodeURIComponent(String(metricId)));
                        requestContext = configuration_1.getServer(config, 'LogsMetricsApi.getLogsMetric').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Get the list of configured log-based metrics with their definitions.
     * Get all log-based metrics
     */
    LogsMetricsApiRequestFactory.prototype.listLogsMetrics = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        localVarPath = '/api/v2/logs/config/metrics';
                        requestContext = configuration_1.getServer(config, 'LogsMetricsApi.listLogsMetrics').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Update a specific log-based metric from your organization. Returns the log-based metric object from the request body when the request is successful.
     * Update a log-based metric
     * @param metricId The name of the log-based metric.
     * @param body New definition of the log-based metric.
     */
    LogsMetricsApiRequestFactory.prototype.updateLogsMetric = function (metricId, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'metricId' is not null or undefined
                        if (metricId === null || metricId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter metricId was null or undefined when calling updateLogsMetric.');
                        }
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling updateLogsMetric.');
                        }
                        localVarPath = '/api/v2/logs/config/metrics/{metric_id}'
                            .replace('{' + 'metric_id' + '}', encodeURIComponent(String(metricId)));
                        requestContext = configuration_1.getServer(config, 'LogsMetricsApi.updateLogsMetric').makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LogsMetricUpdateRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    return LogsMetricsApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.LogsMetricsApiRequestFactory = LogsMetricsApiRequestFactory;
var LogsMetricsApiResponseProcessor = /** @class */ (function () {
    function LogsMetricsApiResponseProcessor() {
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    LogsMetricsApiResponseProcessor.prototype.createLogsMetric = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_1, _a, _b, _c, _d, body_2, _e, _f, _g, _h, body_3, _j, _k, _l, _m, body_4, _o, _p, _q, _r, body_5, _s, _t, _u, _v, body_6, _w, _x, _y, _z, body;
            return __generator(this, function (_0) {
                switch (_0.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_1 = _b.apply(_a, [_d.apply(_c, [_0.sent(), contentType]), "LogsMetricResponse", ""]);
                        return [2 /*return*/, body_1];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_2 = _f.apply(_e, [_h.apply(_g, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_2);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_3 = _k.apply(_j, [_m.apply(_l, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_3);
                    case 6:
                        if (!util_1.isCodeInRange("409", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_4 = _p.apply(_o, [_r.apply(_q, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(409, body_4);
                    case 8:
                        if (!util_1.isCodeInRange("429", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_5 = _t.apply(_s, [_v.apply(_u, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(429, body_5);
                    case 10:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body_6 = _x.apply(_w, [_z.apply(_y, [_0.sent(), contentType]), "LogsMetricResponse", ""]);
                        return [2 /*return*/, body_6];
                    case 12:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    LogsMetricsApiResponseProcessor.prototype.deleteLogsMetric = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_7, _a, _b, _c, _d, body_8, _e, _f, _g, _h, body_9, _j, _k, _l, _m, body_10, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                            return [2 /*return*/];
                        }
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_7 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_7);
                    case 2:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_8 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_8);
                    case 4:
                        if (!util_1.isCodeInRange("429", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_9 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(429, body_9);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_10 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "void", ""]);
                        return [2 /*return*/, body_10];
                    case 8:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    LogsMetricsApiResponseProcessor.prototype.getLogsMetric = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_11, _a, _b, _c, _d, body_12, _e, _f, _g, _h, body_13, _j, _k, _l, _m, body_14, _o, _p, _q, _r, body_15, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_11 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "LogsMetricResponse", ""]);
                        return [2 /*return*/, body_11];
                    case 2:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_12 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_12);
                    case 4:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_13 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_13);
                    case 6:
                        if (!util_1.isCodeInRange("429", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_14 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(429, body_14);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_15 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "LogsMetricResponse", ""]);
                        return [2 /*return*/, body_15];
                    case 10:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogsMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    LogsMetricsApiResponseProcessor.prototype.listLogsMetrics = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_16, _a, _b, _c, _d, body_17, _e, _f, _g, _h, body_18, _j, _k, _l, _m, body_19, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_16 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "LogsMetricsResponse", ""]);
                        return [2 /*return*/, body_16];
                    case 2:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_17 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_17);
                    case 4:
                        if (!util_1.isCodeInRange("429", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_18 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(429, body_18);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_19 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "LogsMetricsResponse", ""]);
                        return [2 /*return*/, body_19];
                    case 8:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    LogsMetricsApiResponseProcessor.prototype.updateLogsMetric = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_20, _a, _b, _c, _d, body_21, _e, _f, _g, _h, body_22, _j, _k, _l, _m, body_23, _o, _p, _q, _r, body_24, _s, _t, _u, _v, body_25, _w, _x, _y, _z, body;
            return __generator(this, function (_0) {
                switch (_0.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_20 = _b.apply(_a, [_d.apply(_c, [_0.sent(), contentType]), "LogsMetricResponse", ""]);
                        return [2 /*return*/, body_20];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_21 = _f.apply(_e, [_h.apply(_g, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_21);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_22 = _k.apply(_j, [_m.apply(_l, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_22);
                    case 6:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_23 = _p.apply(_o, [_r.apply(_q, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_23);
                    case 8:
                        if (!util_1.isCodeInRange("429", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_24 = _t.apply(_s, [_v.apply(_u, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(429, body_24);
                    case 10:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body_25 = _x.apply(_w, [_z.apply(_y, [_0.sent(), contentType]), "LogsMetricResponse", ""]);
                        return [2 /*return*/, body_25];
                    case 12:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    return LogsMetricsApiResponseProcessor;
}());
exports.LogsMetricsApiResponseProcessor = LogsMetricsApiResponseProcessor;
//# sourceMappingURL=LogsMetricsApi.js.map
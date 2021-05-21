"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestRequest = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object describing the Synthetic test request.
*/
var SyntheticsTestRequest = /** @class */ (function () {
    function SyntheticsTestRequest() {
    }
    SyntheticsTestRequest.getAttributeTypeMap = function () {
        return SyntheticsTestRequest.attributeTypeMap;
    };
    SyntheticsTestRequest.deserialize = function (data) {
        var res = new SyntheticsTestRequest();
        res.basicAuth = ObjectSerializer_1.ObjectSerializer.deserialize(data.basicAuth, "SyntheticsBasicAuth", "");
        res.body = ObjectSerializer_1.ObjectSerializer.deserialize(data.body, "string", "");
        res.certificate = ObjectSerializer_1.ObjectSerializer.deserialize(data.certificate, "SyntheticsTestRequestCertificate", "");
        res.dnsServer = ObjectSerializer_1.ObjectSerializer.deserialize(data.dnsServer, "string", "");
        res.dnsServerPort = ObjectSerializer_1.ObjectSerializer.deserialize(data.dnsServerPort, "number", "int32");
        res.headers = ObjectSerializer_1.ObjectSerializer.deserialize(data.headers, "{ [key: string]: string; }", "");
        res.host = ObjectSerializer_1.ObjectSerializer.deserialize(data.host, "string", "");
        if (['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'HEAD', 'OPTIONS', undefined].includes(data.method)) {
            res.method = data.method;
        }
        else {
            throw TypeError("invalid enum value " + data.method + " for method");
        }
        res.noSavingResponseBody = ObjectSerializer_1.ObjectSerializer.deserialize(data.noSavingResponseBody, "boolean", "");
        res.numberOfPackets = ObjectSerializer_1.ObjectSerializer.deserialize(data.numberOfPackets, "number", "int32");
        res.port = ObjectSerializer_1.ObjectSerializer.deserialize(data.port, "number", "int64");
        res.query = ObjectSerializer_1.ObjectSerializer.deserialize(data.query, "any", "");
        res.shouldTrackHops = ObjectSerializer_1.ObjectSerializer.deserialize(data.shouldTrackHops, "boolean", "");
        res.timeout = ObjectSerializer_1.ObjectSerializer.deserialize(data.timeout, "number", "double");
        res.url = ObjectSerializer_1.ObjectSerializer.deserialize(data.url, "string", "");
        return res;
    };
    SyntheticsTestRequest.serialize = function (data) {
        var attributeTypes = SyntheticsTestRequest.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.basicAuth = ObjectSerializer_1.ObjectSerializer.serialize(data.basicAuth, "SyntheticsBasicAuth", "");
        res.body = ObjectSerializer_1.ObjectSerializer.serialize(data.body, "string", "");
        res.certificate = ObjectSerializer_1.ObjectSerializer.serialize(data.certificate, "SyntheticsTestRequestCertificate", "");
        res.dnsServer = ObjectSerializer_1.ObjectSerializer.serialize(data.dnsServer, "string", "");
        res.dnsServerPort = ObjectSerializer_1.ObjectSerializer.serialize(data.dnsServerPort, "number", "int32");
        res.headers = ObjectSerializer_1.ObjectSerializer.serialize(data.headers, "{ [key: string]: string; }", "");
        res.host = ObjectSerializer_1.ObjectSerializer.serialize(data.host, "string", "");
        if (['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'HEAD', 'OPTIONS', undefined].includes(data.method)) {
            res.method = data.method;
        }
        else {
            throw TypeError("invalid enum value " + data.method + " for method");
        }
        res.noSavingResponseBody = ObjectSerializer_1.ObjectSerializer.serialize(data.noSavingResponseBody, "boolean", "");
        res.numberOfPackets = ObjectSerializer_1.ObjectSerializer.serialize(data.numberOfPackets, "number", "int32");
        res.port = ObjectSerializer_1.ObjectSerializer.serialize(data.port, "number", "int64");
        res.query = ObjectSerializer_1.ObjectSerializer.serialize(data.query, "any", "");
        res.shouldTrackHops = ObjectSerializer_1.ObjectSerializer.serialize(data.shouldTrackHops, "boolean", "");
        res.timeout = ObjectSerializer_1.ObjectSerializer.serialize(data.timeout, "number", "double");
        res.url = ObjectSerializer_1.ObjectSerializer.serialize(data.url, "string", "");
        return res;
    };
    SyntheticsTestRequest.discriminator = undefined;
    SyntheticsTestRequest.attributeTypeMap = {
        "basicAuth": {
            "baseName": "basicAuth",
            "type": "SyntheticsBasicAuth",
            "format": ""
        },
        "body": {
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        "certificate": {
            "baseName": "certificate",
            "type": "SyntheticsTestRequestCertificate",
            "format": ""
        },
        "dnsServer": {
            "baseName": "dnsServer",
            "type": "string",
            "format": ""
        },
        "dnsServerPort": {
            "baseName": "dnsServerPort",
            "type": "number",
            "format": "int32"
        },
        "headers": {
            "baseName": "headers",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        "host": {
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        "method": {
            "baseName": "method",
            "type": "HTTPMethod",
            "format": ""
        },
        "noSavingResponseBody": {
            "baseName": "noSavingResponseBody",
            "type": "boolean",
            "format": ""
        },
        "numberOfPackets": {
            "baseName": "numberOfPackets",
            "type": "number",
            "format": "int32"
        },
        "port": {
            "baseName": "port",
            "type": "number",
            "format": "int64"
        },
        "query": {
            "baseName": "query",
            "type": "any",
            "format": ""
        },
        "shouldTrackHops": {
            "baseName": "shouldTrackHops",
            "type": "boolean",
            "format": ""
        },
        "timeout": {
            "baseName": "timeout",
            "type": "number",
            "format": "double"
        },
        "url": {
            "baseName": "url",
            "type": "string",
            "format": ""
        }
    };
    return SyntheticsTestRequest;
}());
exports.SyntheticsTestRequest = SyntheticsTestRequest;
//# sourceMappingURL=SyntheticsTestRequest.js.map
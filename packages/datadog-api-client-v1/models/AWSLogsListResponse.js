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
exports.AWSLogsListResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A list of all Datadog-AWS logs integrations available in your Datadog organization.
*/
var AWSLogsListResponse = /** @class */ (function () {
    function AWSLogsListResponse() {
    }
    AWSLogsListResponse.getAttributeTypeMap = function () {
        return AWSLogsListResponse.attributeTypeMap;
    };
    AWSLogsListResponse.deserialize = function (data) {
        var res = new AWSLogsListResponse();
        res.accountId = ObjectSerializer_1.ObjectSerializer.deserialize(data.account_id, "string", "");
        res.lambdas = ObjectSerializer_1.ObjectSerializer.deserialize(data.lambdas, "Array<AWSLogsLambda>", "");
        res.services = ObjectSerializer_1.ObjectSerializer.deserialize(data.services, "Array<string>", "");
        return res;
    };
    AWSLogsListResponse.serialize = function (data) {
        var attributeTypes = AWSLogsListResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.account_id = ObjectSerializer_1.ObjectSerializer.serialize(data.accountId, "string", "");
        res.lambdas = ObjectSerializer_1.ObjectSerializer.serialize(data.lambdas, "Array<AWSLogsLambda>", "");
        res.services = ObjectSerializer_1.ObjectSerializer.serialize(data.services, "Array<string>", "");
        return res;
    };
    AWSLogsListResponse.discriminator = undefined;
    AWSLogsListResponse.attributeTypeMap = {
        "accountId": {
            "baseName": "account_id",
            "type": "string",
            "format": ""
        },
        "lambdas": {
            "baseName": "lambdas",
            "type": "Array<AWSLogsLambda>",
            "format": ""
        },
        "services": {
            "baseName": "services",
            "type": "Array<string>",
            "format": ""
        }
    };
    return AWSLogsListResponse;
}());
exports.AWSLogsListResponse = AWSLogsListResponse;
//# sourceMappingURL=AWSLogsListResponse.js.map
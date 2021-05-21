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
exports.AWSAccountAndLambdaRequest = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* AWS account ID and Lambda ARN.
*/
var AWSAccountAndLambdaRequest = /** @class */ (function () {
    function AWSAccountAndLambdaRequest() {
    }
    AWSAccountAndLambdaRequest.getAttributeTypeMap = function () {
        return AWSAccountAndLambdaRequest.attributeTypeMap;
    };
    AWSAccountAndLambdaRequest.deserialize = function (data) {
        var res = new AWSAccountAndLambdaRequest();
        if (data.account_id === undefined) {
            throw new TypeError("missing required attribute 'account_id' on 'AWSAccountAndLambdaRequest' object");
        }
        res.accountId = ObjectSerializer_1.ObjectSerializer.deserialize(data.account_id, "string", "");
        if (data.lambda_arn === undefined) {
            throw new TypeError("missing required attribute 'lambda_arn' on 'AWSAccountAndLambdaRequest' object");
        }
        res.lambdaArn = ObjectSerializer_1.ObjectSerializer.deserialize(data.lambda_arn, "string", "");
        return res;
    };
    AWSAccountAndLambdaRequest.serialize = function (data) {
        var attributeTypes = AWSAccountAndLambdaRequest.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.accountId === undefined) {
            throw new TypeError("missing required attribute 'account_id' on 'AWSAccountAndLambdaRequest' object");
        }
        res.account_id = ObjectSerializer_1.ObjectSerializer.serialize(data.accountId, "string", "");
        if (data.lambdaArn === undefined) {
            throw new TypeError("missing required attribute 'lambda_arn' on 'AWSAccountAndLambdaRequest' object");
        }
        res.lambda_arn = ObjectSerializer_1.ObjectSerializer.serialize(data.lambdaArn, "string", "");
        return res;
    };
    AWSAccountAndLambdaRequest.discriminator = undefined;
    AWSAccountAndLambdaRequest.attributeTypeMap = {
        "accountId": {
            "baseName": "account_id",
            "type": "string",
            "format": ""
        },
        "lambdaArn": {
            "baseName": "lambda_arn",
            "type": "string",
            "format": ""
        }
    };
    return AWSAccountAndLambdaRequest;
}());
exports.AWSAccountAndLambdaRequest = AWSAccountAndLambdaRequest;
//# sourceMappingURL=AWSAccountAndLambdaRequest.js.map
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
exports.LogsArchiveIntegrationGCS = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The GCS archive's integration destination.
*/
var LogsArchiveIntegrationGCS = /** @class */ (function () {
    function LogsArchiveIntegrationGCS() {
    }
    LogsArchiveIntegrationGCS.getAttributeTypeMap = function () {
        return LogsArchiveIntegrationGCS.attributeTypeMap;
    };
    LogsArchiveIntegrationGCS.deserialize = function (data) {
        var res = new LogsArchiveIntegrationGCS();
        if (data.client_email === undefined) {
            throw new TypeError("missing required attribute 'client_email' on 'LogsArchiveIntegrationGCS' object");
        }
        res.clientEmail = ObjectSerializer_1.ObjectSerializer.deserialize(data.client_email, "string", "");
        if (data.project_id === undefined) {
            throw new TypeError("missing required attribute 'project_id' on 'LogsArchiveIntegrationGCS' object");
        }
        res.projectId = ObjectSerializer_1.ObjectSerializer.deserialize(data.project_id, "string", "");
        return res;
    };
    LogsArchiveIntegrationGCS.serialize = function (data) {
        var attributeTypes = LogsArchiveIntegrationGCS.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.clientEmail === undefined) {
            throw new TypeError("missing required attribute 'client_email' on 'LogsArchiveIntegrationGCS' object");
        }
        res.client_email = ObjectSerializer_1.ObjectSerializer.serialize(data.clientEmail, "string", "");
        if (data.projectId === undefined) {
            throw new TypeError("missing required attribute 'project_id' on 'LogsArchiveIntegrationGCS' object");
        }
        res.project_id = ObjectSerializer_1.ObjectSerializer.serialize(data.projectId, "string", "");
        return res;
    };
    LogsArchiveIntegrationGCS.discriminator = undefined;
    LogsArchiveIntegrationGCS.attributeTypeMap = {
        "clientEmail": {
            "baseName": "client_email",
            "type": "string",
            "format": ""
        },
        "projectId": {
            "baseName": "project_id",
            "type": "string",
            "format": ""
        }
    };
    return LogsArchiveIntegrationGCS;
}());
exports.LogsArchiveIntegrationGCS = LogsArchiveIntegrationGCS;
//# sourceMappingURL=LogsArchiveIntegrationGCS.js.map
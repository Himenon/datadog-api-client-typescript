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
exports.LogsArchiveDestinationGCS = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The GCS archive destination.
*/
var LogsArchiveDestinationGCS = /** @class */ (function () {
    function LogsArchiveDestinationGCS() {
    }
    LogsArchiveDestinationGCS.getAttributeTypeMap = function () {
        return LogsArchiveDestinationGCS.attributeTypeMap;
    };
    LogsArchiveDestinationGCS.deserialize = function (data) {
        var res = new LogsArchiveDestinationGCS();
        if (data.bucket === undefined) {
            throw new TypeError("missing required attribute 'bucket' on 'LogsArchiveDestinationGCS' object");
        }
        res.bucket = ObjectSerializer_1.ObjectSerializer.deserialize(data.bucket, "string", "");
        if (data.integration === undefined) {
            throw new TypeError("missing required attribute 'integration' on 'LogsArchiveDestinationGCS' object");
        }
        res.integration = ObjectSerializer_1.ObjectSerializer.deserialize(data.integration, "LogsArchiveIntegrationGCS", "");
        res.path = ObjectSerializer_1.ObjectSerializer.deserialize(data.path, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'LogsArchiveDestinationGCS' object");
        }
        if (['gcs', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    LogsArchiveDestinationGCS.serialize = function (data) {
        var attributeTypes = LogsArchiveDestinationGCS.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.bucket === undefined) {
            throw new TypeError("missing required attribute 'bucket' on 'LogsArchiveDestinationGCS' object");
        }
        res.bucket = ObjectSerializer_1.ObjectSerializer.serialize(data.bucket, "string", "");
        if (data.integration === undefined) {
            throw new TypeError("missing required attribute 'integration' on 'LogsArchiveDestinationGCS' object");
        }
        res.integration = ObjectSerializer_1.ObjectSerializer.serialize(data.integration, "LogsArchiveIntegrationGCS", "");
        res.path = ObjectSerializer_1.ObjectSerializer.serialize(data.path, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'LogsArchiveDestinationGCS' object");
        }
        if (['gcs', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    LogsArchiveDestinationGCS.discriminator = undefined;
    LogsArchiveDestinationGCS.attributeTypeMap = {
        "bucket": {
            "baseName": "bucket",
            "type": "string",
            "format": ""
        },
        "integration": {
            "baseName": "integration",
            "type": "LogsArchiveIntegrationGCS",
            "format": ""
        },
        "path": {
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "LogsArchiveDestinationGCSType",
            "format": ""
        }
    };
    return LogsArchiveDestinationGCS;
}());
exports.LogsArchiveDestinationGCS = LogsArchiveDestinationGCS;
//# sourceMappingURL=LogsArchiveDestinationGCS.js.map
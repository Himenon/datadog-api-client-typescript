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
exports.IncidentTeamResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Response with an incident team payload.
*/
var IncidentTeamResponse = /** @class */ (function () {
    function IncidentTeamResponse() {
    }
    IncidentTeamResponse.getAttributeTypeMap = function () {
        return IncidentTeamResponse.attributeTypeMap;
    };
    IncidentTeamResponse.deserialize = function (data) {
        var res = new IncidentTeamResponse();
        if (data.data === undefined) {
            throw new TypeError("missing required attribute 'data' on 'IncidentTeamResponse' object");
        }
        res.data = ObjectSerializer_1.ObjectSerializer.deserialize(data.data, "IncidentTeamResponseData", "");
        res.included = ObjectSerializer_1.ObjectSerializer.deserialize(data.included, "Array<IncidentTeamIncludedItems>", "");
        return res;
    };
    IncidentTeamResponse.serialize = function (data) {
        var attributeTypes = IncidentTeamResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.data === undefined) {
            throw new TypeError("missing required attribute 'data' on 'IncidentTeamResponse' object");
        }
        res.data = ObjectSerializer_1.ObjectSerializer.serialize(data.data, "IncidentTeamResponseData", "");
        res.included = ObjectSerializer_1.ObjectSerializer.serialize(data.included, "Array<IncidentTeamIncludedItems>", "");
        return res;
    };
    IncidentTeamResponse.discriminator = undefined;
    IncidentTeamResponse.attributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "IncidentTeamResponseData",
            "format": ""
        },
        "included": {
            "baseName": "included",
            "type": "Array<IncidentTeamIncludedItems>",
            "format": ""
        }
    };
    return IncidentTeamResponse;
}());
exports.IncidentTeamResponse = IncidentTeamResponse;
//# sourceMappingURL=IncidentTeamResponse.js.map
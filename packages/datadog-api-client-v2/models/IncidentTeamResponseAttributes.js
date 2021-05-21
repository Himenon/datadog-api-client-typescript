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
exports.IncidentTeamResponseAttributes = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The incident team's attributes from a response.
*/
var IncidentTeamResponseAttributes = /** @class */ (function () {
    function IncidentTeamResponseAttributes() {
    }
    IncidentTeamResponseAttributes.getAttributeTypeMap = function () {
        return IncidentTeamResponseAttributes.attributeTypeMap;
    };
    IncidentTeamResponseAttributes.deserialize = function (data) {
        var res = new IncidentTeamResponseAttributes();
        res.created = ObjectSerializer_1.ObjectSerializer.deserialize(data.created, "Date", "date-time");
        res.modified = ObjectSerializer_1.ObjectSerializer.deserialize(data.modified, "Date", "date-time");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        return res;
    };
    IncidentTeamResponseAttributes.serialize = function (data) {
        var attributeTypes = IncidentTeamResponseAttributes.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.created = ObjectSerializer_1.ObjectSerializer.serialize(data.created, "Date", "date-time");
        res.modified = ObjectSerializer_1.ObjectSerializer.serialize(data.modified, "Date", "date-time");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        return res;
    };
    IncidentTeamResponseAttributes.discriminator = undefined;
    IncidentTeamResponseAttributes.attributeTypeMap = {
        "created": {
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        "modified": {
            "baseName": "modified",
            "type": "Date",
            "format": "date-time"
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    };
    return IncidentTeamResponseAttributes;
}());
exports.IncidentTeamResponseAttributes = IncidentTeamResponseAttributes;
//# sourceMappingURL=IncidentTeamResponseAttributes.js.map
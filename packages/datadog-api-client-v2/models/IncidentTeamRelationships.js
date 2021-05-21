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
exports.IncidentTeamRelationships = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The incident team's relationships.
*/
var IncidentTeamRelationships = /** @class */ (function () {
    function IncidentTeamRelationships() {
    }
    IncidentTeamRelationships.getAttributeTypeMap = function () {
        return IncidentTeamRelationships.attributeTypeMap;
    };
    IncidentTeamRelationships.deserialize = function (data) {
        var res = new IncidentTeamRelationships();
        res.createdBy = ObjectSerializer_1.ObjectSerializer.deserialize(data.created_by, "RelationshipToUser", "");
        res.lastModifiedBy = ObjectSerializer_1.ObjectSerializer.deserialize(data.last_modified_by, "RelationshipToUser", "");
        return res;
    };
    IncidentTeamRelationships.serialize = function (data) {
        var attributeTypes = IncidentTeamRelationships.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.created_by = ObjectSerializer_1.ObjectSerializer.serialize(data.createdBy, "RelationshipToUser", "");
        res.last_modified_by = ObjectSerializer_1.ObjectSerializer.serialize(data.lastModifiedBy, "RelationshipToUser", "");
        return res;
    };
    IncidentTeamRelationships.discriminator = undefined;
    IncidentTeamRelationships.attributeTypeMap = {
        "createdBy": {
            "baseName": "created_by",
            "type": "RelationshipToUser",
            "format": ""
        },
        "lastModifiedBy": {
            "baseName": "last_modified_by",
            "type": "RelationshipToUser",
            "format": ""
        }
    };
    return IncidentTeamRelationships;
}());
exports.IncidentTeamRelationships = IncidentTeamRelationships;
//# sourceMappingURL=IncidentTeamRelationships.js.map
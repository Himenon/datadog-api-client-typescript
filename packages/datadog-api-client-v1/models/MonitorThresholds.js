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
exports.MonitorThresholds = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* List of the different monitor threshold available.
*/
var MonitorThresholds = /** @class */ (function () {
    function MonitorThresholds() {
    }
    MonitorThresholds.getAttributeTypeMap = function () {
        return MonitorThresholds.attributeTypeMap;
    };
    MonitorThresholds.deserialize = function (data) {
        var res = new MonitorThresholds();
        res.critical = ObjectSerializer_1.ObjectSerializer.deserialize(data.critical, "number", "double");
        res.criticalRecovery = ObjectSerializer_1.ObjectSerializer.deserialize(data.critical_recovery, "number", "double");
        res.ok = ObjectSerializer_1.ObjectSerializer.deserialize(data.ok, "number", "double");
        res.unknown = ObjectSerializer_1.ObjectSerializer.deserialize(data.unknown, "number", "double");
        res.warning = ObjectSerializer_1.ObjectSerializer.deserialize(data.warning, "number", "double");
        res.warningRecovery = ObjectSerializer_1.ObjectSerializer.deserialize(data.warning_recovery, "number", "double");
        return res;
    };
    MonitorThresholds.serialize = function (data) {
        var attributeTypes = MonitorThresholds.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.critical = ObjectSerializer_1.ObjectSerializer.serialize(data.critical, "number", "double");
        res.critical_recovery = ObjectSerializer_1.ObjectSerializer.serialize(data.criticalRecovery, "number", "double");
        res.ok = ObjectSerializer_1.ObjectSerializer.serialize(data.ok, "number", "double");
        res.unknown = ObjectSerializer_1.ObjectSerializer.serialize(data.unknown, "number", "double");
        res.warning = ObjectSerializer_1.ObjectSerializer.serialize(data.warning, "number", "double");
        res.warning_recovery = ObjectSerializer_1.ObjectSerializer.serialize(data.warningRecovery, "number", "double");
        return res;
    };
    MonitorThresholds.discriminator = undefined;
    MonitorThresholds.attributeTypeMap = {
        "critical": {
            "baseName": "critical",
            "type": "number",
            "format": "double"
        },
        "criticalRecovery": {
            "baseName": "critical_recovery",
            "type": "number",
            "format": "double"
        },
        "ok": {
            "baseName": "ok",
            "type": "number",
            "format": "double"
        },
        "unknown": {
            "baseName": "unknown",
            "type": "number",
            "format": "double"
        },
        "warning": {
            "baseName": "warning",
            "type": "number",
            "format": "double"
        },
        "warningRecovery": {
            "baseName": "warning_recovery",
            "type": "number",
            "format": "double"
        }
    };
    return MonitorThresholds;
}());
exports.MonitorThresholds = MonitorThresholds;
//# sourceMappingURL=MonitorThresholds.js.map
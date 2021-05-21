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
exports.IPPrefixesProcess = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Available prefix information for the Process endpoints.
*/
var IPPrefixesProcess = /** @class */ (function () {
    function IPPrefixesProcess() {
    }
    IPPrefixesProcess.getAttributeTypeMap = function () {
        return IPPrefixesProcess.attributeTypeMap;
    };
    IPPrefixesProcess.deserialize = function (data) {
        var res = new IPPrefixesProcess();
        res.prefixesIpv4 = ObjectSerializer_1.ObjectSerializer.deserialize(data.prefixes_ipv4, "Array<string>", "");
        res.prefixesIpv6 = ObjectSerializer_1.ObjectSerializer.deserialize(data.prefixes_ipv6, "Array<string>", "");
        return res;
    };
    IPPrefixesProcess.serialize = function (data) {
        var attributeTypes = IPPrefixesProcess.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.prefixes_ipv4 = ObjectSerializer_1.ObjectSerializer.serialize(data.prefixesIpv4, "Array<string>", "");
        res.prefixes_ipv6 = ObjectSerializer_1.ObjectSerializer.serialize(data.prefixesIpv6, "Array<string>", "");
        return res;
    };
    IPPrefixesProcess.discriminator = undefined;
    IPPrefixesProcess.attributeTypeMap = {
        "prefixesIpv4": {
            "baseName": "prefixes_ipv4",
            "type": "Array<string>",
            "format": ""
        },
        "prefixesIpv6": {
            "baseName": "prefixes_ipv6",
            "type": "Array<string>",
            "format": ""
        }
    };
    return IPPrefixesProcess;
}());
exports.IPPrefixesProcess = IPPrefixesProcess;
//# sourceMappingURL=IPPrefixesProcess.js.map
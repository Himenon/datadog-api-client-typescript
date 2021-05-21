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
exports.SyntheticsSSLCertificateIssuer = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object describing the issuer of a SSL certificate.
*/
var SyntheticsSSLCertificateIssuer = /** @class */ (function () {
    function SyntheticsSSLCertificateIssuer() {
    }
    SyntheticsSSLCertificateIssuer.getAttributeTypeMap = function () {
        return SyntheticsSSLCertificateIssuer.attributeTypeMap;
    };
    SyntheticsSSLCertificateIssuer.deserialize = function (data) {
        var res = new SyntheticsSSLCertificateIssuer();
        res.C = ObjectSerializer_1.ObjectSerializer.deserialize(data.C, "string", "");
        res.CN = ObjectSerializer_1.ObjectSerializer.deserialize(data.CN, "string", "");
        res.L = ObjectSerializer_1.ObjectSerializer.deserialize(data.L, "string", "");
        res.O = ObjectSerializer_1.ObjectSerializer.deserialize(data.O, "string", "");
        res.OU = ObjectSerializer_1.ObjectSerializer.deserialize(data.OU, "string", "");
        res.ST = ObjectSerializer_1.ObjectSerializer.deserialize(data.ST, "string", "");
        return res;
    };
    SyntheticsSSLCertificateIssuer.serialize = function (data) {
        var attributeTypes = SyntheticsSSLCertificateIssuer.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.C = ObjectSerializer_1.ObjectSerializer.serialize(data.C, "string", "");
        res.CN = ObjectSerializer_1.ObjectSerializer.serialize(data.CN, "string", "");
        res.L = ObjectSerializer_1.ObjectSerializer.serialize(data.L, "string", "");
        res.O = ObjectSerializer_1.ObjectSerializer.serialize(data.O, "string", "");
        res.OU = ObjectSerializer_1.ObjectSerializer.serialize(data.OU, "string", "");
        res.ST = ObjectSerializer_1.ObjectSerializer.serialize(data.ST, "string", "");
        return res;
    };
    SyntheticsSSLCertificateIssuer.discriminator = undefined;
    SyntheticsSSLCertificateIssuer.attributeTypeMap = {
        "C": {
            "baseName": "C",
            "type": "string",
            "format": ""
        },
        "CN": {
            "baseName": "CN",
            "type": "string",
            "format": ""
        },
        "L": {
            "baseName": "L",
            "type": "string",
            "format": ""
        },
        "O": {
            "baseName": "O",
            "type": "string",
            "format": ""
        },
        "OU": {
            "baseName": "OU",
            "type": "string",
            "format": ""
        },
        "ST": {
            "baseName": "ST",
            "type": "string",
            "format": ""
        }
    };
    return SyntheticsSSLCertificateIssuer;
}());
exports.SyntheticsSSLCertificateIssuer = SyntheticsSSLCertificateIssuer;
//# sourceMappingURL=SyntheticsSSLCertificateIssuer.js.map
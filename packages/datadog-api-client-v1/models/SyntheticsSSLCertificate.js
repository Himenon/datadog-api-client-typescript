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
exports.SyntheticsSSLCertificate = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object describing the SSL certificate used for a Synthetic test.
*/
var SyntheticsSSLCertificate = /** @class */ (function () {
    function SyntheticsSSLCertificate() {
    }
    SyntheticsSSLCertificate.getAttributeTypeMap = function () {
        return SyntheticsSSLCertificate.attributeTypeMap;
    };
    SyntheticsSSLCertificate.deserialize = function (data) {
        var res = new SyntheticsSSLCertificate();
        res.cipher = ObjectSerializer_1.ObjectSerializer.deserialize(data.cipher, "string", "");
        res.exponent = ObjectSerializer_1.ObjectSerializer.deserialize(data.exponent, "number", "double");
        res.extKeyUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.extKeyUsage, "Array<string>", "");
        res.fingerprint = ObjectSerializer_1.ObjectSerializer.deserialize(data.fingerprint, "string", "");
        res.fingerprint256 = ObjectSerializer_1.ObjectSerializer.deserialize(data.fingerprint256, "string", "");
        res.issuer = ObjectSerializer_1.ObjectSerializer.deserialize(data.issuer, "SyntheticsSSLCertificateIssuer", "");
        res.modulus = ObjectSerializer_1.ObjectSerializer.deserialize(data.modulus, "string", "");
        res.protocol = ObjectSerializer_1.ObjectSerializer.deserialize(data.protocol, "string", "");
        res.serialNumber = ObjectSerializer_1.ObjectSerializer.deserialize(data.serialNumber, "string", "");
        res.subject = ObjectSerializer_1.ObjectSerializer.deserialize(data.subject, "SyntheticsSSLCertificateSubject", "");
        res.validFrom = ObjectSerializer_1.ObjectSerializer.deserialize(data.validFrom, "Date", "date-time");
        res.validTo = ObjectSerializer_1.ObjectSerializer.deserialize(data.validTo, "Date", "date-time");
        return res;
    };
    SyntheticsSSLCertificate.serialize = function (data) {
        var attributeTypes = SyntheticsSSLCertificate.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.cipher = ObjectSerializer_1.ObjectSerializer.serialize(data.cipher, "string", "");
        res.exponent = ObjectSerializer_1.ObjectSerializer.serialize(data.exponent, "number", "double");
        res.extKeyUsage = ObjectSerializer_1.ObjectSerializer.serialize(data.extKeyUsage, "Array<string>", "");
        res.fingerprint = ObjectSerializer_1.ObjectSerializer.serialize(data.fingerprint, "string", "");
        res.fingerprint256 = ObjectSerializer_1.ObjectSerializer.serialize(data.fingerprint256, "string", "");
        res.issuer = ObjectSerializer_1.ObjectSerializer.serialize(data.issuer, "SyntheticsSSLCertificateIssuer", "");
        res.modulus = ObjectSerializer_1.ObjectSerializer.serialize(data.modulus, "string", "");
        res.protocol = ObjectSerializer_1.ObjectSerializer.serialize(data.protocol, "string", "");
        res.serialNumber = ObjectSerializer_1.ObjectSerializer.serialize(data.serialNumber, "string", "");
        res.subject = ObjectSerializer_1.ObjectSerializer.serialize(data.subject, "SyntheticsSSLCertificateSubject", "");
        res.validFrom = ObjectSerializer_1.ObjectSerializer.serialize(data.validFrom, "Date", "date-time");
        res.validTo = ObjectSerializer_1.ObjectSerializer.serialize(data.validTo, "Date", "date-time");
        return res;
    };
    SyntheticsSSLCertificate.discriminator = undefined;
    SyntheticsSSLCertificate.attributeTypeMap = {
        "cipher": {
            "baseName": "cipher",
            "type": "string",
            "format": ""
        },
        "exponent": {
            "baseName": "exponent",
            "type": "number",
            "format": "double"
        },
        "extKeyUsage": {
            "baseName": "extKeyUsage",
            "type": "Array<string>",
            "format": ""
        },
        "fingerprint": {
            "baseName": "fingerprint",
            "type": "string",
            "format": ""
        },
        "fingerprint256": {
            "baseName": "fingerprint256",
            "type": "string",
            "format": ""
        },
        "issuer": {
            "baseName": "issuer",
            "type": "SyntheticsSSLCertificateIssuer",
            "format": ""
        },
        "modulus": {
            "baseName": "modulus",
            "type": "string",
            "format": ""
        },
        "protocol": {
            "baseName": "protocol",
            "type": "string",
            "format": ""
        },
        "serialNumber": {
            "baseName": "serialNumber",
            "type": "string",
            "format": ""
        },
        "subject": {
            "baseName": "subject",
            "type": "SyntheticsSSLCertificateSubject",
            "format": ""
        },
        "validFrom": {
            "baseName": "validFrom",
            "type": "Date",
            "format": "date-time"
        },
        "validTo": {
            "baseName": "validTo",
            "type": "Date",
            "format": "date-time"
        }
    };
    return SyntheticsSSLCertificate;
}());
exports.SyntheticsSSLCertificate = SyntheticsSSLCertificate;
//# sourceMappingURL=SyntheticsSSLCertificate.js.map
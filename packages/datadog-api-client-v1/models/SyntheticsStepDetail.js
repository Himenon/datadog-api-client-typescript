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
exports.SyntheticsStepDetail = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object describing a step for a Synthetic test.
*/
var SyntheticsStepDetail = /** @class */ (function () {
    function SyntheticsStepDetail() {
    }
    SyntheticsStepDetail.getAttributeTypeMap = function () {
        return SyntheticsStepDetail.attributeTypeMap;
    };
    SyntheticsStepDetail.deserialize = function (data) {
        var res = new SyntheticsStepDetail();
        res.browserErrors = ObjectSerializer_1.ObjectSerializer.deserialize(data.browserErrors, "Array<SyntheticsBrowserError>", "");
        if (['equals', 'notEquals', 'contains', 'notContains', 'startsWith', 'notStartsWith', 'greater', 'lower', 'greaterEquals', 'lowerEquals', 'matchRegex', 'between', 'isEmpty', 'notIsEmpty', undefined].includes(data.checkType)) {
            res.checkType = data.checkType;
        }
        else {
            throw TypeError("invalid enum value " + data.checkType + " for checkType");
        }
        res.description = ObjectSerializer_1.ObjectSerializer.deserialize(data.description, "string", "");
        res.duration = ObjectSerializer_1.ObjectSerializer.deserialize(data.duration, "number", "double");
        res.error = ObjectSerializer_1.ObjectSerializer.deserialize(data.error, "string", "");
        if ([-1, 0, 1, 2, 3, undefined].includes(data.playingTab)) {
            res.playingTab = data.playingTab;
        }
        else {
            throw TypeError("invalid enum value " + data.playingTab + " for playingTab");
        }
        res.screenshotBucketKey = ObjectSerializer_1.ObjectSerializer.deserialize(data.screenshotBucketKey, "boolean", "");
        res.skipped = ObjectSerializer_1.ObjectSerializer.deserialize(data.skipped, "boolean", "");
        res.snapshotBucketKey = ObjectSerializer_1.ObjectSerializer.deserialize(data.snapshotBucketKey, "boolean", "");
        res.stepId = ObjectSerializer_1.ObjectSerializer.deserialize(data.stepId, "number", "int64");
        res.subTestStepDetails = ObjectSerializer_1.ObjectSerializer.deserialize(data.subTestStepDetails, "Array<SyntheticsStepDetail>", "");
        res.timeToInteractive = ObjectSerializer_1.ObjectSerializer.deserialize(data.timeToInteractive, "number", "double");
        if (['assertCurrentUrl', 'assertElementAttribute', 'assertElementContent', 'assertElementPresent', 'assertEmail', 'assertFileDownload', 'assertFromJavascript', 'assertPageContains', 'assertPageLacks', 'click', 'extractFromJavascript', 'extractVariable', 'goToEmailLink', 'goToUrl', 'goToUrlAndMeasureTti', 'hover', 'playSubTest', 'pressKey', 'refresh', 'runApiTest', 'scroll', 'selectOption', 'typeText', 'uploadFiles', 'wait', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        res.url = ObjectSerializer_1.ObjectSerializer.deserialize(data.url, "string", "");
        res.value = ObjectSerializer_1.ObjectSerializer.deserialize(data.value, "any", "");
        res.vitalsMetrics = ObjectSerializer_1.ObjectSerializer.deserialize(data.vitalsMetrics, "Array<SyntheticsCoreWebVitals>", "");
        res.warnings = ObjectSerializer_1.ObjectSerializer.deserialize(data.warnings, "Array<SyntheticsStepDetailWarning>", "");
        return res;
    };
    SyntheticsStepDetail.serialize = function (data) {
        var attributeTypes = SyntheticsStepDetail.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.browserErrors = ObjectSerializer_1.ObjectSerializer.serialize(data.browserErrors, "Array<SyntheticsBrowserError>", "");
        if (['equals', 'notEquals', 'contains', 'notContains', 'startsWith', 'notStartsWith', 'greater', 'lower', 'greaterEquals', 'lowerEquals', 'matchRegex', 'between', 'isEmpty', 'notIsEmpty', undefined].includes(data.checkType)) {
            res.checkType = data.checkType;
        }
        else {
            throw TypeError("invalid enum value " + data.checkType + " for checkType");
        }
        res.description = ObjectSerializer_1.ObjectSerializer.serialize(data.description, "string", "");
        res.duration = ObjectSerializer_1.ObjectSerializer.serialize(data.duration, "number", "double");
        res.error = ObjectSerializer_1.ObjectSerializer.serialize(data.error, "string", "");
        if ([-1, 0, 1, 2, 3, undefined].includes(data.playingTab)) {
            res.playingTab = data.playingTab;
        }
        else {
            throw TypeError("invalid enum value " + data.playingTab + " for playingTab");
        }
        res.screenshotBucketKey = ObjectSerializer_1.ObjectSerializer.serialize(data.screenshotBucketKey, "boolean", "");
        res.skipped = ObjectSerializer_1.ObjectSerializer.serialize(data.skipped, "boolean", "");
        res.snapshotBucketKey = ObjectSerializer_1.ObjectSerializer.serialize(data.snapshotBucketKey, "boolean", "");
        res.stepId = ObjectSerializer_1.ObjectSerializer.serialize(data.stepId, "number", "int64");
        res.subTestStepDetails = ObjectSerializer_1.ObjectSerializer.serialize(data.subTestStepDetails, "Array<SyntheticsStepDetail>", "");
        res.timeToInteractive = ObjectSerializer_1.ObjectSerializer.serialize(data.timeToInteractive, "number", "double");
        if (['assertCurrentUrl', 'assertElementAttribute', 'assertElementContent', 'assertElementPresent', 'assertEmail', 'assertFileDownload', 'assertFromJavascript', 'assertPageContains', 'assertPageLacks', 'click', 'extractFromJavascript', 'extractVariable', 'goToEmailLink', 'goToUrl', 'goToUrlAndMeasureTti', 'hover', 'playSubTest', 'pressKey', 'refresh', 'runApiTest', 'scroll', 'selectOption', 'typeText', 'uploadFiles', 'wait', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        res.url = ObjectSerializer_1.ObjectSerializer.serialize(data.url, "string", "");
        res.value = ObjectSerializer_1.ObjectSerializer.serialize(data.value, "any", "");
        res.vitalsMetrics = ObjectSerializer_1.ObjectSerializer.serialize(data.vitalsMetrics, "Array<SyntheticsCoreWebVitals>", "");
        res.warnings = ObjectSerializer_1.ObjectSerializer.serialize(data.warnings, "Array<SyntheticsStepDetailWarning>", "");
        return res;
    };
    SyntheticsStepDetail.discriminator = undefined;
    SyntheticsStepDetail.attributeTypeMap = {
        "browserErrors": {
            "baseName": "browserErrors",
            "type": "Array<SyntheticsBrowserError>",
            "format": ""
        },
        "checkType": {
            "baseName": "checkType",
            "type": "SyntheticsCheckType",
            "format": ""
        },
        "description": {
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        "duration": {
            "baseName": "duration",
            "type": "number",
            "format": "double"
        },
        "error": {
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        "playingTab": {
            "baseName": "playingTab",
            "type": "SyntheticsPlayingTab",
            "format": ""
        },
        "screenshotBucketKey": {
            "baseName": "screenshotBucketKey",
            "type": "boolean",
            "format": ""
        },
        "skipped": {
            "baseName": "skipped",
            "type": "boolean",
            "format": ""
        },
        "snapshotBucketKey": {
            "baseName": "snapshotBucketKey",
            "type": "boolean",
            "format": ""
        },
        "stepId": {
            "baseName": "stepId",
            "type": "number",
            "format": "int64"
        },
        "subTestStepDetails": {
            "baseName": "subTestStepDetails",
            "type": "Array<SyntheticsStepDetail>",
            "format": ""
        },
        "timeToInteractive": {
            "baseName": "timeToInteractive",
            "type": "number",
            "format": "double"
        },
        "type": {
            "baseName": "type",
            "type": "SyntheticsStepType",
            "format": ""
        },
        "url": {
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        "value": {
            "baseName": "value",
            "type": "any",
            "format": ""
        },
        "vitalsMetrics": {
            "baseName": "vitalsMetrics",
            "type": "Array<SyntheticsCoreWebVitals>",
            "format": ""
        },
        "warnings": {
            "baseName": "warnings",
            "type": "Array<SyntheticsStepDetailWarning>",
            "format": ""
        }
    };
    return SyntheticsStepDetail;
}());
exports.SyntheticsStepDetail = SyntheticsStepDetail;
//# sourceMappingURL=SyntheticsStepDetail.js.map
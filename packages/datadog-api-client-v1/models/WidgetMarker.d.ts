/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
* Markers allow you to add visual conditional formatting for your graphs.
*/
export declare class WidgetMarker {
    /**
    * Combination of:   - A severity error, warning, ok, or info   - A line type: dashed, solid, or bold In this case of a Distribution widget, this can be set to be `x_axis_percentile`.
    */
    'displayType'?: string;
    /**
    * Label to display over the marker.
    */
    'label'?: string;
    /**
    * Timestamp for the widget.
    */
    'time'?: string;
    /**
    * Value to apply. Can be a single value y = 15 or a range of values 0 < y < 10.
    */
    'value': string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: {
        [key: string]: {
            baseName: string;
            type: string;
            format: string;
        };
    };
    static getAttributeTypeMap(): {
        [key: string]: {
            baseName: string;
            type: string;
            format: string;
        };
    };
    static deserialize(data: {
        [key: string]: any;
    }): WidgetMarker;
    static serialize(data: WidgetMarker): {
        [key: string]: any;
    };
    constructor();
}

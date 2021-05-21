/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DistributionWidgetDefinitionType } from './DistributionWidgetDefinitionType';
import { DistributionWidgetRequest } from './DistributionWidgetRequest';
import { DistributionWidgetXAxis } from './DistributionWidgetXAxis';
import { DistributionWidgetYAxis } from './DistributionWidgetYAxis';
import { WidgetMarker } from './WidgetMarker';
import { WidgetTextAlign } from './WidgetTextAlign';
import { WidgetTime } from './WidgetTime';
/**
* The Distribution visualization is another way of showing metrics aggregated across one or several tags, such as hosts. Unlike the heat map, a distribution graph’s x-axis is quantity rather than time.
*/
export declare class DistributionWidgetDefinition {
    /**
    * (Deprecated) The widget legend was replaced by a tooltip and sidebar.
    */
    'legendSize'?: string;
    /**
    * List of markers.
    */
    'markers'?: Array<WidgetMarker>;
    /**
    * Array of one request object to display in the widget.  See the dedicated [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json)  to learn how to build the `REQUEST_SCHEMA`.
    */
    'requests': Array<DistributionWidgetRequest>;
    /**
    * (Deprecated) The widget legend was replaced by a tooltip and sidebar.
    */
    'showLegend'?: boolean;
    'time'?: WidgetTime;
    /**
    * Title of the widget.
    */
    'title'?: string;
    'titleAlign'?: WidgetTextAlign;
    /**
    * Size of the title.
    */
    'titleSize'?: string;
    'type': DistributionWidgetDefinitionType;
    'xaxis'?: DistributionWidgetXAxis;
    'yaxis'?: DistributionWidgetYAxis;
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
    }): DistributionWidgetDefinition;
    static serialize(data: DistributionWidgetDefinition): {
        [key: string]: any;
    };
    constructor();
}

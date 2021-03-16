/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HeatMapWidgetDefinitionType } from './HeatMapWidgetDefinitionType';
import { HeatMapWidgetRequest } from './HeatMapWidgetRequest';
import { WidgetAxis } from './WidgetAxis';
import { WidgetCustomLink } from './WidgetCustomLink';
import { WidgetEvent } from './WidgetEvent';
import { WidgetTextAlign } from './WidgetTextAlign';
import { WidgetTime } from './WidgetTime';
import { HttpFile } from '../http/http';

/**
* The heat map visualization shows metrics aggregated across many tags, such as hosts. The more hosts that have a particular value, the darker that square is.
*/
export class HeatMapWidgetDefinition {
    /**
    * List of custom links.
    */
    'customLinks'?: Array<WidgetCustomLink>;
    /**
    * List of widget events.
    */
    'events'?: Array<WidgetEvent>;
    /**
    * Available legend sizes for a widget. Should be one of \"0\", \"2\", \"4\", \"8\", \"16\", or \"auto\".
    */
    'legendSize'?: string;
    /**
    * List of widget types.
    */
    'requests': Array<HeatMapWidgetRequest>;
    /**
    * Whether or not to display the legend on this widget.
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
    'type': HeatMapWidgetDefinitionType;
    'yaxis'?: WidgetAxis;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customLinks",
            "baseName": "custom_links",
            "type": "Array<WidgetCustomLink>",
            "format": ""
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<WidgetEvent>",
            "format": ""
        },
        {
            "name": "legendSize",
            "baseName": "legend_size",
            "type": "string",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "Array<HeatMapWidgetRequest>",
            "format": ""
        },
        {
            "name": "showLegend",
            "baseName": "show_legend",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "WidgetTime",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "titleAlign",
            "baseName": "title_align",
            "type": "WidgetTextAlign",
            "format": ""
        },
        {
            "name": "titleSize",
            "baseName": "title_size",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "HeatMapWidgetDefinitionType",
            "format": ""
        },
        {
            "name": "yaxis",
            "baseName": "yaxis",
            "type": "WidgetAxis",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HeatMapWidgetDefinition.attributeTypeMap;
    }
    
    public constructor() {
    }
}

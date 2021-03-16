/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EventTimelineWidgetDefinitionType } from './EventTimelineWidgetDefinitionType';
import { WidgetTextAlign } from './WidgetTextAlign';
import { WidgetTime } from './WidgetTime';
import { HttpFile } from '../http/http';

/**
* The event timeline is a widget version of the timeline that appears at the top of the Event Stream view. Only available on FREE layout dashboards.
*/
export class EventTimelineWidgetDefinition {
    /**
    * Query to filter the event timeline with.
    */
    'query': string;
    /**
    * The execution method for multi-value filters. Can be either and or or.
    */
    'tagsExecution'?: string;
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
    'type': EventTimelineWidgetDefinitionType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        {
            "name": "tagsExecution",
            "baseName": "tags_execution",
            "type": "string",
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
            "type": "EventTimelineWidgetDefinitionType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventTimelineWidgetDefinition.attributeTypeMap;
    }
    
    public constructor() {
    }
}

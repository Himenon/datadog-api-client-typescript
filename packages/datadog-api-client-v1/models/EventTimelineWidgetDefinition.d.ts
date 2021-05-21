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
/**
* The event timeline is a widget version of the timeline that appears at the top of the Event Stream view. Only available on FREE layout dashboards.
*/
export declare class EventTimelineWidgetDefinition {
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
    }): EventTimelineWidgetDefinition;
    static serialize(data: EventTimelineWidgetDefinition): {
        [key: string]: any;
    };
    constructor();
}

/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CheckStatusWidgetDefinitionType } from './CheckStatusWidgetDefinitionType';
import { WidgetGrouping } from './WidgetGrouping';
import { WidgetTextAlign } from './WidgetTextAlign';
import { WidgetTime } from './WidgetTime';
/**
* Check status shows the current status or number of results for any check performed.
*/
export declare class CheckStatusWidgetDefinition {
    /**
    * Name of the check to use in the widget.
    */
    'check': string;
    /**
    * Group reporting a single check.
    */
    'group'?: string;
    /**
    * List of tag prefixes to group by in the case of a cluster check.
    */
    'groupBy'?: Array<string>;
    'grouping': WidgetGrouping;
    /**
    * List of tags used to filter the groups reporting a cluster check.
    */
    'tags'?: Array<string>;
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
    'type': CheckStatusWidgetDefinitionType;
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
    }): CheckStatusWidgetDefinition;
    static serialize(data: CheckStatusWidgetDefinition): {
        [key: string]: any;
    };
    constructor();
}

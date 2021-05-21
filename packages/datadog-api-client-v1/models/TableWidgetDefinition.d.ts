/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TableWidgetDefinitionType } from './TableWidgetDefinitionType';
import { TableWidgetHasSearchBar } from './TableWidgetHasSearchBar';
import { TableWidgetRequest } from './TableWidgetRequest';
import { WidgetCustomLink } from './WidgetCustomLink';
import { WidgetTextAlign } from './WidgetTextAlign';
import { WidgetTime } from './WidgetTime';
/**
* The table visualization is available on timeboards and screenboards. It displays columns of metrics grouped by tag key.
*/
export declare class TableWidgetDefinition {
    /**
    * List of custom links.
    */
    'customLinks'?: Array<WidgetCustomLink>;
    'hasSearchBar'?: TableWidgetHasSearchBar;
    /**
    * Widget definition.
    */
    'requests': Array<TableWidgetRequest>;
    'time'?: WidgetTime;
    /**
    * Title of your widget.
    */
    'title'?: string;
    'titleAlign'?: WidgetTextAlign;
    /**
    * Size of the title.
    */
    'titleSize'?: string;
    'type': TableWidgetDefinitionType;
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
    }): TableWidgetDefinition;
    static serialize(data: TableWidgetDefinition): {
        [key: string]: any;
    };
    constructor();
}

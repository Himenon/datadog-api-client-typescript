/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LogsAttributeRemapperType } from './LogsAttributeRemapperType';
import { TargetFormatType } from './TargetFormatType';
/**
* The remapper processor remaps any source attribute(s) or tag to another target attribute or tag. Constraints on the tag/attribute name are explained in the [Tag Best Practice documentation](https://docs.datadoghq.com/logs/guide/log-parsing-best-practice). Some additional constraints are applied as `:` or `,` are not allowed in the target tag/attribute name.
*/
export declare class LogsAttributeRemapper {
    /**
    * Whether or not the processor is enabled.
    */
    'isEnabled'?: boolean;
    /**
    * Name of the processor.
    */
    'name'?: string;
    /**
    * Override or not the target element if already set,
    */
    'overrideOnConflict'?: boolean;
    /**
    * Remove or preserve the remapped source element.
    */
    'preserveSource'?: boolean;
    /**
    * Defines if the sources are from log `attribute` or `tag`.
    */
    'sourceType'?: string;
    /**
    * Array of source attributes.
    */
    'sources': Array<string>;
    /**
    * Final attribute or tag name to remap the sources to.
    */
    'target': string;
    'targetFormat'?: TargetFormatType;
    /**
    * Defines if the final attribute or tag name is from log `attribute` or `tag`.
    */
    'targetType'?: string;
    'type': LogsAttributeRemapperType;
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
    }): LogsAttributeRemapper;
    static serialize(data: LogsAttributeRemapper): {
        [key: string]: any;
    };
    constructor();
}
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { NotebookResourceType } from './NotebookResourceType';
import { NotebooksResponseDataAttributes } from './NotebooksResponseDataAttributes';
/**
* The data for a notebook in get all response.
*/
export declare class NotebooksResponseData {
    'attributes': NotebooksResponseDataAttributes;
    /**
    * Unique notebook ID, assigned when you create the notebook.
    */
    'id': number;
    'type': NotebookResourceType;
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
    }): NotebooksResponseData;
    static serialize(data: NotebooksResponseData): {
        [key: string]: any;
    };
    constructor();
}
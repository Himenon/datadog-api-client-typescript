/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { NotebookAuthor } from './NotebookAuthor';
import { NotebookCellResponse } from './NotebookCellResponse';
import { NotebookGlobalTime } from './NotebookGlobalTime';
import { NotebookStatus } from './NotebookStatus';
/**
* The attributes of a notebook in get all response.
*/
export declare class NotebooksResponseDataAttributes {
    'author'?: NotebookAuthor;
    /**
    * List of cells to display in the notebook.
    */
    'cells'?: Array<NotebookCellResponse>;
    /**
    * UTC time stamp for when the notebook was created.
    */
    'created'?: Date;
    /**
    * UTC time stamp for when the notebook was last modified.
    */
    'modified'?: Date;
    /**
    * The name of the notebook.
    */
    'name': string;
    'status'?: NotebookStatus;
    'time'?: NotebookGlobalTime;
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
    }): NotebooksResponseDataAttributes;
    static serialize(data: NotebooksResponseDataAttributes): {
        [key: string]: any;
    };
    constructor();
}

/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsSSLCertificateIssuer } from './SyntheticsSSLCertificateIssuer';
import { SyntheticsSSLCertificateSubject } from './SyntheticsSSLCertificateSubject';
import { HttpFile } from '../http/http';

/**
* Object describing the SSL certificate used for a Synthetic test.
*/
export class SyntheticsSSLCertificate {
    /**
    * Cipher used for the connection.
    */
    'cipher'?: string;
    /**
    * Exponent associated to the certificate.
    */
    'exponent'?: number;
    /**
    * Array of extensions and details used for the certificate.
    */
    'extKeyUsage'?: Array<string>;
    /**
    * MD5 digest of the DER-encoded Certificate information.
    */
    'fingerprint'?: string;
    /**
    * SHA-1 digest of the DER-encoded Certificate information.
    */
    'fingerprint256'?: string;
    'issuer'?: SyntheticsSSLCertificateIssuer;
    /**
    * Modulus associated to the SSL certificate private key.
    */
    'modulus'?: string;
    /**
    * TLS protocol used for the test.
    */
    'protocol'?: string;
    /**
    * Serial Number assigned by Symantec to the SSL certificate.
    */
    'serialNumber'?: string;
    'subject'?: SyntheticsSSLCertificateSubject;
    /**
    * Date from which the SSL certificate is valid.
    */
    'validFrom'?: Date;
    /**
    * Date until which the SSL certificate is valid.
    */
    'validTo'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cipher",
            "baseName": "cipher",
            "type": "string",
            "format": ""
        },
        {
            "name": "exponent",
            "baseName": "exponent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "extKeyUsage",
            "baseName": "extKeyUsage",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string",
            "format": ""
        },
        {
            "name": "fingerprint256",
            "baseName": "fingerprint256",
            "type": "string",
            "format": ""
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "SyntheticsSSLCertificateIssuer",
            "format": ""
        },
        {
            "name": "modulus",
            "baseName": "modulus",
            "type": "string",
            "format": ""
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string",
            "format": ""
        },
        {
            "name": "serialNumber",
            "baseName": "serialNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "SyntheticsSSLCertificateSubject",
            "format": ""
        },
        {
            "name": "validFrom",
            "baseName": "validFrom",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "validTo",
            "baseName": "validTo",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsSSLCertificate.attributeTypeMap;
    }
    
    public constructor() {
    }
}

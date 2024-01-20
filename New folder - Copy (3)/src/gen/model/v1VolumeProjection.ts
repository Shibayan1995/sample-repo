/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.21.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1ConfigMapProjection } from './v1ConfigMapProjection';
import { V1DownwardAPIProjection } from './v1DownwardAPIProjection';
import { V1SecretProjection } from './v1SecretProjection';
import { V1ServiceAccountTokenProjection } from './v1ServiceAccountTokenProjection';

/**
* Projection that may be projected along with other supported volume types
*/
export class V1VolumeProjection {
    'configMap'?: V1ConfigMapProjection;
    'downwardAPI'?: V1DownwardAPIProjection;
    'secret'?: V1SecretProjection;
    'serviceAccountToken'?: V1ServiceAccountTokenProjection;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "V1ConfigMapProjection"
        },
        {
            "name": "downwardAPI",
            "baseName": "downwardAPI",
            "type": "V1DownwardAPIProjection"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "V1SecretProjection"
        },
        {
            "name": "serviceAccountToken",
            "baseName": "serviceAccountToken",
            "type": "V1ServiceAccountTokenProjection"
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeProjection.attributeTypeMap;
    }
}


import {geoType} from './geoType';

export interface addressType {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geoType
}
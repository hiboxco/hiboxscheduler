import { FC } from 'react';
import { Address } from '../types';
declare type Action = {
    actionName: string;
    actionType: string;
    target: string;
};
declare type AggregateRating = {
    ratingValue: string;
    ratingCount: string;
};
declare type AreaServed = GeoCircle[];
declare type Geo = {
    latitude: string;
    longitude: string;
};
declare type GeoCircle = {
    geoMidpoint: Geo;
    geoRadius: string;
};
declare type MakesOffer = Offer[];
declare type Offer = {
    priceSpecification: PriceSpecification;
    itemOffered: Service;
};
declare type OpeningHoursSpecification = {
    opens: string;
    closes: string;
    dayOfWeek: string | string[];
    validFrom?: string;
    validThrough?: string;
};
declare type PriceSpecification = {
    type: string;
    priceCurrency: string;
    price: string;
};
declare type Rating = {
    ratingValue: string;
    worstRating?: string;
    bestRating?: string;
    reviewAspect?: string;
};
declare type Review = {
    author: string;
    datePublished: string;
    reviewBody: string;
    reviewRating: Rating;
    name?: string;
};
declare type Service = {
    name: string;
    description: string;
};
export interface LocalBusinessJsonLdProps {
    keyOverride?: string;
    type: string;
    id: string;
    name: string;
    description: string;
    url?: string;
    telephone?: string;
    address: Address;
    geo?: Geo;
    images?: string[];
    rating?: AggregateRating;
    review?: Review[];
    priceRange?: string;
    servesCuisine?: string | string[];
    sameAs?: string[];
    openingHours?: OpeningHoursSpecification | OpeningHoursSpecification[];
    action?: Action;
    areaServed?: AreaServed;
    makesOffer?: MakesOffer;
}
declare const LocalBusinessJsonLd: FC<LocalBusinessJsonLdProps>;
export default LocalBusinessJsonLd;

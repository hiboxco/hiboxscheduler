import { FC } from 'react';
import { AggregateRating, Review } from '../types';
export interface SoftwareAppJsonLdProps {
    keyOverride?: string;
    name: string;
    price: string;
    priceCurrency: string;
    applicationCategory?: string;
    operatingSystem?: string;
    review?: Review;
    aggregateRating?: AggregateRating;
}
declare const SoftwareAppJsonLd: FC<SoftwareAppJsonLdProps>;
export default SoftwareAppJsonLd;

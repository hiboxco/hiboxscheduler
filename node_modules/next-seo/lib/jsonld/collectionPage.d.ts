import { FC } from 'react';
export interface CollectionPageJsonLdProps {
    keyOverride?: string;
    name: string;
    hasPart: CreativeWork[];
}
export interface CreativeWork {
    author: string;
    about: string;
    name: string;
    datePublished: string;
    audience?: string;
    keywords?: string;
    thumbnailUrl?: string;
    image?: string;
}
declare const CollectionPageJsonLd: FC<CollectionPageJsonLdProps>;
export default CollectionPageJsonLd;

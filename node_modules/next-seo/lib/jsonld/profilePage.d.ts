import { FC } from 'react';
export interface ProfilePageJsonLdProps {
    keyOverride?: string;
    breadcrumb: string | ItemListElements[];
    lastReviewed?: string;
}
export interface ItemListElements {
    item: string;
    name: string;
    position: number;
}
declare const ProfilePageJsonLd: FC<ProfilePageJsonLdProps>;
export default ProfilePageJsonLd;

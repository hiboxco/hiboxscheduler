import { FC } from 'react';
import { Video, AggregateRating } from '../types';
declare type Instruction = {
    name?: string;
    text: string;
    url?: string;
    image?: string;
};
export declare const buildInstruction: (instruction: Instruction) => string;
export interface RecipeJsonLdProps {
    name: string;
    description: string;
    authorName: string | string[];
    ingredients: string[];
    instructions: Instruction[];
    images?: string[];
    datePublished?: string;
    prepTime?: string;
    cookTime?: string;
    totalTime?: string;
    keywords?: string;
    yields?: string;
    category?: string;
    cuisine?: string;
    calories?: number;
    aggregateRating?: AggregateRating;
    video?: Video;
}
declare const RecipeJsonLd: FC<RecipeJsonLdProps>;
export default RecipeJsonLd;

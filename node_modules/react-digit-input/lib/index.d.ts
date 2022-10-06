import * as React from 'react';
export interface InputAttributes extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onClick' | 'onFocus' | 'onKeyDown' | 'onChange'> {
    ref: (input: HTMLInputElement | null) => void;
}
export interface Options {
    acceptedCharacters: RegExp;
    length: number;
    value: string;
    onChange: (value: string) => void;
}
export default function useDigitInput({ acceptedCharacters, length, value, onChange, }: Options): InputAttributes[];

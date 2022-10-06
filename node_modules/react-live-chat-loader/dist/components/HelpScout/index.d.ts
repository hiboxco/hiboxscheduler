/// <reference types="react" />
declare type HelpScoutIcon = 'message' | 'antenna' | 'search' | 'question' | 'beacon' | 'close';
interface Props {
    color?: string;
    icon?: HelpScoutIcon;
    zIndex: string;
    horizontalPosition: 'left' | 'right';
}
declare const HelpScout: ({ color, icon, zIndex, horizontalPosition }: Props) => JSX.Element | null;
export default HelpScout;

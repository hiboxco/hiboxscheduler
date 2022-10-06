/// <reference types="react" />
import { Provider } from '../types';
interface LiveChatLoaderProps {
    provider: Provider;
    children: JSX.Element;
    idlePeriod?: number;
    providerKey: string;
    appID?: string;
    baseUrl?: string;
    beforeInit?: () => void;
    onReady?: () => void;
}
export declare const LiveChatLoaderProvider: ({ provider, children, idlePeriod, baseUrl, ...props }: LiveChatLoaderProps) => JSX.Element | null;
export default LiveChatLoaderProvider;

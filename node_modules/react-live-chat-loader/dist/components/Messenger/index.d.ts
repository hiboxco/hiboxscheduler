/// <reference types="react" />
import { Provider } from '../../types';
interface Props {
    providerKey: Provider | undefined;
    themeColor?: string;
    loggedInGreeting?: string;
    loggedOutGreeting?: string;
    show?: string;
    hide?: string;
    fade?: string;
    greetingDialogDelay?: string;
    greetingDialogDisplay?: string;
    color?: string;
}
declare const Messenger: ({ color, ...props }: Props) => JSX.Element;
export default Messenger;

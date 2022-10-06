/// <reference types="react" />
interface Props {
    color?: string;
}
declare const Provider: {
    ({ color }: Props): JSX.Element | null;
    defaultProps: {
        color: string;
    };
};
export default Provider;

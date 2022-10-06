import * as React from "react";
import * as Radix from "@radix-ui/react-primitive";
import { Primitive } from "@radix-ui/react-primitive";
type PrimitiveSpanProps = Radix.ComponentPropsWithoutRef<typeof Primitive.span>;
export interface LabelProps extends PrimitiveSpanProps {
    htmlFor?: string;
}
export const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLSpanElement>>;
export const useLabelContext: (element?: HTMLElement | null | undefined) => string | undefined;
export const Root: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLSpanElement>>;

//# sourceMappingURL=index.d.ts.map

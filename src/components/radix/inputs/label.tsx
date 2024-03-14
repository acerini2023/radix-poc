import * as React from "react";

import * as LabelPrimitive from "@radix-ui/react-label";
import { clsx } from "clsx";

import st from "./input.module.css";

export type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root>;

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    className={clsx(st.label, className)}
    ref={ref}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;

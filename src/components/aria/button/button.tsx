import { forwardRef } from "react";

import clsx from "clsx";
import {
  type ButtonProps as AriaButtonProps,
  Button as RACButton,
} from "react-aria-components";

import type { Size, Variant } from "./types";

import st from "./button.module.scss";

export interface ButtonProps extends AriaButtonProps {
  size?: Size;
  variant?: Variant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    let variantCss = "";
    switch (props.variant) {
      case "borderless":
        variantCss = "citrus-button-ghost";
        break;
      case "outline":
        variantCss = "citrus-button-outline";
        break;
    }

    return (
      <RACButton
        className={clsx(st.button, "citrus-interactive", variantCss, className)}
        ref={ref}
        {...props}
      >
        {children}
      </RACButton>
    );
  },
);

Button.displayName = "Button";

export default Button;

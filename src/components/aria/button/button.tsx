import { forwardRef } from "react";

import clsx from "clsx";
import {
  type ButtonProps as AriaButtonProps,
  Button as RACButton,
} from "react-aria-components";

import type { Size, Variant } from "./types";

import "../../../assets/sass/components/buttons/buttons.scss";
import "./button.scss";

export interface ButtonProps extends AriaButtonProps {
  size?: Size;
  variant?: Variant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    const variantClass = props.variant ? props.variant : "";
    const sizeClass = props.size ? props.size : "";

    return (
      <RACButton
        className={clsx(
          "citrus-button",
          variantClass,
          sizeClass,
          "citrus-interactive",
          className,
        )}
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

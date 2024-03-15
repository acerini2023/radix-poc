import { forwardRef } from "react";

import { clsx } from "clsx";

import st from "./button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        className={clsx(st.button, "citrus-interactive", className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "ButtonBase";

export default Button;

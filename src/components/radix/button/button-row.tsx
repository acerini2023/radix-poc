import { forwardRef } from "react";

import { clsx } from "clsx";

import st from "./button.module.css";

export interface ButtonRowProps extends React.HTMLAttributes<HTMLDivElement> {}

const ButtonRow = forwardRef<HTMLDivElement, ButtonRowProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={clsx(st["button-row"], className)} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

ButtonRow.displayName = "ButtonRow";

export default ButtonRow;

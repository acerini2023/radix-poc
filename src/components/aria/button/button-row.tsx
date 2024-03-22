import { forwardRef } from "react";

import { clsx } from "clsx";

export interface ButtonRowProps extends React.HTMLAttributes<HTMLDivElement> {}

const ButtonRow = forwardRef<HTMLDivElement, ButtonRowProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={clsx("button-row", className)} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

ButtonRow.displayName = "ButtonRow";

export default ButtonRow;

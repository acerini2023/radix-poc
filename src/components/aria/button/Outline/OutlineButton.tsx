import { forwardRef } from "react";

import Button, { type ButtonProps } from "../button.tsx";

export interface OutlineButtonProps extends ButtonProps {}

const OutlineButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button ref={ref} variant="outline" {...props}>
        {children}
      </Button>
    );
  },
);

OutlineButton.displayName = "OutlineButton";

export default OutlineButton;

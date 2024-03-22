import { forwardRef } from "react";

import Button, { type ButtonProps } from "../button.tsx";

export interface DefaultButtonProps extends ButtonProps {}

const DefaultButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button ref={ref} variant="default" {...props}>
        {children}
      </Button>
    );
  },
);

DefaultButton.displayName = "DefaultButton";

export default DefaultButton;

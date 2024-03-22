import { forwardRef } from "react";

import Button, { type ButtonProps } from "../button.tsx";

export interface BorderlessButtonProps extends ButtonProps {}

const BorderlessButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button ref={ref} variant="borderless" {...props}>
        {children}
      </Button>
    );
  },
);

BorderlessButton.displayName = "OutlineButton";

export default BorderlessButton;

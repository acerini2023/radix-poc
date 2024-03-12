import { forwardRef } from "react";

import { clsx } from "clsx";

import st from "./input.module.css";

export interface InputWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={clsx(st["input-wrapper"], className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

InputWrapper.displayName = "InputWrapper";

export default InputWrapper;

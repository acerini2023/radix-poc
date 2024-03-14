import clsx from "clsx";
import {
  FieldError as AriaFieldError,
  type FieldErrorProps as AriaFieldErrorProps,
} from "react-aria-components";

import st from "./fieldError.module.css";

export interface FieldErrorProps extends AriaFieldErrorProps {}

function FieldError(props: FieldErrorProps) {
  const { children, className, ...restProps } = props;
  return (
    <AriaFieldError className={clsx(st.fieldError, className)} {...restProps}>
      {children}
    </AriaFieldError>
  );
}

export default FieldError;

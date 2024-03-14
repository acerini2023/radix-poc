import clsx from "clsx";
import {
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";

import st from "./textField.module.scss";

export interface TextFieldProps extends AriaTextFieldProps {}

function TextField(props: TextFieldProps) {
  const { children, className, ...restProps } = props;
  return (
    <AriaTextField className={clsx(st.textField, className)} {...restProps}>
      {children}
    </AriaTextField>
  );
}

export default TextField;

import clsx from "clsx";
import {
  type InputProps as AriaInputProps,
  Input as RACInput,
} from "react-aria-components";

import st from "./input.module.scss";

export interface InputProps extends AriaInputProps {}

function Input(props: InputProps) {
  const { children, className, ...restProps } = props;
  return (
    <RACInput className={clsx(st.input, className)} {...restProps}>
      {children}
    </RACInput>
  );
}

export default Input;

import clsx from "clsx";
import {
  type LabelProps as ArialabelProps,
  Label as RACLabel,
} from "react-aria-components";

import st from "./label.module.scss";

export interface LabelProps extends ArialabelProps {}

function Label(props: LabelProps) {
  const { children, className, ...restProps } = props;
  return (
    <RACLabel className={clsx(st.label, className)} {...restProps}>
      {children}
    </RACLabel>
  );
}

export default Label;

import clsx from "clsx";
import {
  Text as AriaText,
  type TextProps as AriaTextProps,
} from "react-aria-components";

import st from "./text.module.css";

export interface TextProps extends AriaTextProps {}

function Text(props: TextProps) {
  const { children, className, ...restProps } = props;
  return (
    <AriaText className={clsx(st.text, className)} {...restProps}>
      {children}
    </AriaText>
  );
}

export default Text;

import clsx from "clsx";
import {
  Tabs as AriaTabs,
  type TabsProps as AriaTabsProps,
} from "react-aria-components";

import st from "./tabs.module.scss";

export interface TabsProps extends AriaTabsProps {}

function Tabs(props: TabsProps) {
  const { children, className, ...restProps } = props;
  return (
    <AriaTabs className={clsx(st.tabs, className)} {...restProps}>
      {children}
    </AriaTabs>
  );
}

export default Tabs;

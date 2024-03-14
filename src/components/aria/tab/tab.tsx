import clsx from "clsx";
import {
  Tab as AriaTab,
  type TabProps as AriaTabProps,
} from "react-aria-components";

import st from "./tab.module.css";

export interface TabProps extends AriaTabProps {}

function Tab(props: TabProps) {
  const { children, className, ...restProps } = props;
  return (
    <AriaTab className={clsx(st.tab, className)} {...restProps}>
      {children}
    </AriaTab>
  );
}

export default Tab;

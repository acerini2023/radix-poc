import clsx from "clsx";
import {
  TabList as AriaTabList,
  type TabListProps as AriaTabListProps,
} from "react-aria-components";

import st from "./tabList.module.css";

export interface TabListProps<T extends object> extends AriaTabListProps<T> {}

function TabList<T extends object>(props: TabListProps<T>) {
  const { children, className, ...restProps } = props;
  return (
    <AriaTabList className={clsx(st["tab-list"], className)} {...restProps}>
      {children}
    </AriaTabList>
  );
}

export default TabList;

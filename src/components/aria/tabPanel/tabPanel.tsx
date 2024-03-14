import clsx from "clsx";
import {
  TabPanel as AriaTabPanel,
  type TabPanelProps as AriaTabPanelProps,
} from "react-aria-components";

import st from "./tabPanel.module.scss";

export interface TabPanelProps extends AriaTabPanelProps {}

function TabPanel(props: TabPanelProps) {
  const { children, className, ...restProps } = props;
  return (
    <AriaTabPanel className={clsx(st.tabPanel, className)} {...restProps}>
      {children}
    </AriaTabPanel>
  );
}

export default TabPanel;

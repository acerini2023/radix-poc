import { forwardRef } from "react";

import { clsx } from "clsx";

import st from "./layout.module.scss";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={clsx(st.layout, className)} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

Layout.displayName = "Layout";

export default Layout;

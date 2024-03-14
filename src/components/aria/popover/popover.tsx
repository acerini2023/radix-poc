import React, { forwardRef } from "react";

import clsx from "clsx";
import {
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps,
  Dialog,
  OverlayArrow,
} from "react-aria-components";

import st from "./popover.module.scss";

export interface PopoverProps extends Omit<AriaPopoverProps, "children"> {
  children: React.ReactNode;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <AriaPopover className={clsx(st.popover, className)} {...props} ref={ref}>
        <OverlayArrow>
          <svg height={12} viewBox="0 0 12 12" width={12}>
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
        <Dialog>{children}</Dialog>
      </AriaPopover>
    );
  },
);

Popover.displayName = "Popover";

export default Popover;

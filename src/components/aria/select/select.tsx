import React, { forwardRef } from "react";

import clsx from "clsx";
import {
  Select as AriaSelect,
  type SelectProps as AriaSelectProps,
  ListBox,
  SelectValue,
  type ValidationResult,
} from "react-aria-components";

import { Button } from "../button";
import { FieldError } from "../fieldError";
import { Label } from "../label";
import { Popover } from "../popover";
import { Text } from "../text";
import st from "./select.module.scss";

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  children: ((item: T) => React.ReactNode) | React.ReactNode;
  description?: string;
  errorMessage?: ((validation: ValidationResult) => string) | string;
  items?: Iterable<T>;
  label?: string;
}

export const Select = forwardRef<HTMLDivElement, SelectProps<object>>(
  ({ children, description, errorMessage, items, label, ...props }, ref) => {
    return (
      <div ref={ref}>
        <AriaSelect className={clsx(st.select)} {...props}>
          <Label>{label}</Label>
          <Button className={clsx(st.trigger)}>
            <SelectValue />
            <span aria-hidden="true">▼</span>
          </Button>
          {description && <Text slot="description">{description}</Text>}
          <FieldError>{errorMessage}</FieldError>
          <Popover className={clsx(st.popover)}>
            <ListBox className={clsx(st.listbox)} items={items}>
              {children}
            </ListBox>
          </Popover>
        </AriaSelect>
      </div>
    );
  },
);

Select.displayName = "Select";

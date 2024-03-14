import clsx from "clsx";
import { ListBoxItem, type ListBoxItemProps } from "react-aria-components";

import st from "./select.module.scss";

function SelectItem(props: ListBoxItemProps) {
  return <ListBoxItem className={clsx(st["select-item"])} {...props} />;
}

export default SelectItem;

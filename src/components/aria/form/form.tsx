import clsx from "clsx";
import {
  type FormProps as AriaFormProps,
  Form as RACForm,
} from "react-aria-components";

import st from "./form.module.scss";

export interface FormProps extends AriaFormProps {}

function Form(props: FormProps) {
  const { children, className, ...restProps } = props;
  return (
    <RACForm className={clsx(st.form, className)} {...restProps}>
      {children}
    </RACForm>
  );
}

export default Form;

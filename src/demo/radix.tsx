import { useState } from "react";

import st from "../App.module.scss";
import { Button, ButtonRow } from "../components/radix/button";
import {
  Input,
  InputWrapper,
  Label,
  type Option,
  SelectBasic,
} from "../components/radix/inputs";
import { Layout } from "../components/radix/layout";

const suffixOptions: Option[] = [
  { label: "Jr.", value: "jr" },
  { label: "Sr.", value: "sr" },
  { label: "III", value: "iii" },
  { label: "IV", value: "iv" },
];

const Radix = (): React.JSX.Element => {
  const [suffix, setSuffix] = useState<string>("");

  return (
    <main className={st.main}>
      <div className={st.content}>
        <h1 className={st.title}>Add Radix Employee</h1>
        <Layout>
          <form className={st.form}>
            <InputWrapper>
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                placeholder="Enter employee's name..."
                type="text"
              />
            </InputWrapper>

            <InputWrapper className={st["input-break-top"]}>
              <Label htmlFor="suffix">Suffix</Label>
              <SelectBasic
                onValueChange={setSuffix}
                options={suffixOptions}
                placeholder="Suffix"
                value={suffix}
              />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="email@email.com" type="email" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input id="phone-number" placeholder="555-555-5555" type="tel" />
            </InputWrapper>

            <ButtonRow>
              <Button
                className="citrus-button-outline"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Cancel
              </Button>

              <Button
                onClick={(e) => {
                  e.preventDefault();
                }}
                type="submit"
              >
                Add Employee
              </Button>
            </ButtonRow>
          </form>
        </Layout>
      </div>
    </main>
  );
};

export default Radix;

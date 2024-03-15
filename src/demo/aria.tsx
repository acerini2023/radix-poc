import { useState } from "react";

import st from "../App.module.scss";
import { Button, ButtonRow } from "../components/aria/button";
import { FieldError } from "../components/aria/fieldError";
import { Form } from "../components/aria/form";
import { Input } from "../components/aria/input";
import { Label } from "../components/aria/label";
import { Layout } from "../components/aria/layout";
import { Select, SelectItem } from "../components/aria/select";
import { TextField } from "../components/aria/textField";

const Aria = (): React.JSX.Element => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <main className={st.main}>
      <div className={st.content}>
        <h1 className={st.title}>Add Aria Employee</h1>
        <Layout>
          <Form className={isInvalid ? "error" : ""}>
            <TextField
              className={st["input-break-bottom"]}
              isRequired
              name="fullName"
            >
              <Label>Full Name</Label>
              <Input placeholder="Enter employee's name..." />
              <FieldError>
                {({ validationDetails }) => {
                  setIsInvalid(true);
                  return validationDetails.valueMissing ?
                      "This is an example of custom error message"
                    : "";
                }}
              </FieldError>
            </TextField>
            <Select label="Suffix">
              <SelectItem>Jr</SelectItem>
              <SelectItem>Sr</SelectItem>
              <SelectItem>iii</SelectItem>
              <SelectItem>iv</SelectItem>
            </Select>
            <TextField isRequired name="email">
              <Label>Email</Label>
              <Input placeholder="email@email.com" type="email" />
              <FieldError />
            </TextField>
            <TextField isRequired name="phone">
              <Label>Phone Number</Label>
              <Input placeholder="555-555-5555" type="tel" />
              <FieldError />
            </TextField>
            <ButtonRow>
              <Button type="reset" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Add Employee</Button>
            </ButtonRow>
          </Form>
        </Layout>
      </div>
    </main>
  );
};

export default Aria;

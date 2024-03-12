import st from "./App.module.css";
import { Button, ButtonRow } from "./components/button";
import { Input, InputWrapper, Label } from "./components/inputs";
import { Layout } from "./components/layout";

const App = (): React.JSX.Element => {
  return (
    <main className={st.main}>
      <div className={st.content}>
        <h1 className={st.title}>Add Employee</h1>
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

            <InputWrapper className={st["input-break"]}>
              <Label htmlFor="suffix">Suffix</Label>
              <Input id="suffer" placeholder="--select--" type="text" />
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
              <Button type="submit">Add Employee</Button>
            </ButtonRow>
          </form>
        </Layout>
      </div>
    </main>
  );
};

export default App;

import st from "./App.module.css";
import { Button } from "./components/button";
import { Layout } from "./components/layout";

const App = (): React.JSX.Element => {
  return (
    <main className={st.main}>
      <div className={st.content}>
        <h1 className={st.title}>Add Employee</h1>
        <Layout>
          <Button>Button</Button>
        </Layout>
      </div>
    </main>
  );
};

export default App;

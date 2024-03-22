import { Provider, defaultTheme } from "@adobe/react-spectrum";

import Aria from "./demo/aria";

const App = () => {
  return (
    <Provider theme={defaultTheme}>
      <Aria />
    </Provider>
  );
};

export default App;

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Aria from "./demo/aria";
import Radix from "./demo/radix";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/demo/radix">Radix</Link>
            </li>
            <li>
              <Link to="/demo/aria">React Aria</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route element={<Radix />} path="/demo/radix" />
          <Route element={<Aria />} path="/demo/aria" />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

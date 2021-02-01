import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import Unmatched from "./components/pages/Unmatched";
import Homepage from "./components/pages/Homepage.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* Homepage */}
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route>
          <Unmatched />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Unmatched from "./components/Unmatched";
import Homepage from "./components/Homepage.js";

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

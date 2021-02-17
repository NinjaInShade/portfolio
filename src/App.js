import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import Unmatched from "./components/pages/Unmatched";
import Home from "./components/pages/Home.js";

import "./App.css";

// TODO: Refactor contact form. The html/css may be excessive and could be a lot cleaner and smaller.
// TODO: Change sidebar bg colour and darken rest of the screen, or consider different approach.
// TODO: Place download cv in a convient place

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
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

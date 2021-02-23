import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Footer/Footer";
import Unmatched from "./components/pages/Unmatched/Unmatched";
import Construction from "./components/pages/Construction/Construction";
import Home from "./components/pages/Home/Home.js";

import "./App.css";

// TODO: Refactor contact form. The html/css may be excessive and could be a lot cleaner and smaller.
// TODO: Add loading status on contact form after req is sent. Make this while user waits to be redirected to email page
// TODO: 404 error page
// TODO: Go through and make sure all of the sites components and such include semantic html.
// TODO: Make astronaught on home page come shooting up from near bottom right corner into place on page load.
// TODO: Experiment with animations -> such as sections load in as you scroll with maybe a fade animation?
// TODO: use localstorage to add a timer between download/email reqs

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <Construction />
        </Route>
        <Route path="/projects" exact>
          <Construction />
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

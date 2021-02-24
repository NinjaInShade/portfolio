import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Footer/Footer";
import Unmatched from "./components/pages/Unmatched/Unmatched";
import Construction from "./components/pages/Construction/Construction";
import Home from "./components/pages/Home/Home.js";

import "./App.css";

// TODO: Refactor contact form. The html/css may be excessive and could be a lot cleaner and smaller.
// TODO: 404 error page
// TODO: use localstorage to add a timer between download/email reqs
// TODO: Refactor every component and it's css if there is room for improvement. Items that need looking over => Construction, Home, Unmatched,  ContactForm, ProjectCard
// TODO: Setup custom CSS vars for colours and gradients and such
// TODO: React-reveal not up to date, change to https://markoskon.com/scroll-reveal-animations-with-react-spring/ asap.

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

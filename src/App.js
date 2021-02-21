import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Footer/Footer";
import Unmatched from "./components/pages/Unmatched/Unmatched";
import Construction from "./components/pages/Construction/Construction";
import Home from "./components/pages/Home/Home.js";

import "./App.css";

// TODO: Refactor contact form. The html/css may be excessive and could be a lot cleaner and smaller.
// TODO: Make a page which after you send an email informs if email was send correctly (and make API for sending the email and server side validation).
// TODO: Make download cv button on navbar work by reaching to API and using PDFKit perhaps to make the pdf on the fly, or have a pdf made beforehand and make it download that.
// TODO: 404 error page
// TODO: Go through and make sure all of the sites components and such include semantic html.
// TODO: Make astronaught on home page come shooting up from near bottom right corner into place on page load.
// TODO: Experiment with animations -> such as sections load in as you scroll with maybe a fade animation?

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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Footer/Footer";
import Unmatched from "./components/pages/Unmatched/Unmatched";
import Home from "./components/pages/Home/Home.js";

import "./App.css";

// TODO: Refactor contact form. The html/css may be excessive and could be a lot cleaner and smaller.
// TODO: Make a page which after you send an email informs if email was send correctly (and make API for sending the email and server side validation).
// TODO: Make download cv button on navbar work by reaching to API and using PDFKit perhaps to make the pdf on the fly, or have a pdf made beforehand and make it download that.
// TODO: Make projects text/img space between. Will need an extra container of max width: 1200px;

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

import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import SingleArticle from "./components/SingleArticle";
import CreateArticle from "./components/CreateArticle";

const Main = withRouter(location => {
  console.log("location", location);
  return (
    <div>
      {location.location.pathname !== "/login" &&
        location.location.pathname !== "/register" && <Navbar />}
      <Header/>
      <Route exact path="/" component={Welcome} />
      <Route path="/articles/create" component={CreateArticle} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/article/:id" component={SingleArticle} />
      {location.location.pathname !== "/login" &&
        location.location.pathname !== "/register" && <Footer />}
    </div>
  );
});

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();

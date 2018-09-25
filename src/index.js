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


class App extends React.Component {   
  
  constructor(){
    super();
    
    this.state = {
      authUser : null
    };
  }

  componentWillMount(){
    const user = localStorage.getItem('user');
    console.log(user);

    if(user){
      this.setState({
        authUser : JSON.parse(user)
      });
    }
  }

  setAuthUser = (authUser) =>{
    this.setState({
      authUser
    });
  }

  render(){
    const { location } = this.props;
    return (
      <div>
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Navbar authUser = {this.state.authUser}/>}

        <Header/>
        
        <Route exact path="/" component={Welcome} />
        <Route path="/articles/create" component={CreateArticle} />
        <Route path="/login" component={Login} />
        <Route path="/register" render={(props) => <Register {...props} setAuthUser={this.setAuthUser} />} />
        <Route path="/article/:id" component={SingleArticle} />
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Footer />}
      </div>
    );
  }
}

const Main = withRouter((props) => {  
  return (
    <App {...props} />
  );
});

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();

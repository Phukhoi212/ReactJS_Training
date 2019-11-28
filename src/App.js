import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import NavBar from "./components/NavBar/NavBar";
import fireAuth from "./FireBase";
import Login from "./components/Login/Login";
import * as firebase from 'firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      token: ""
    };
  }

  componentDidMount(){
    this.authListener()
  }

  authListener() {
    fireAuth.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
          if(idToken){
            this.setState({
              token: idToken
            })
          } else {
            this.setState({user: null})
          }
        }).catch(function(error) {
          // Handle error
        });
      } else {
        this.setState({user: null});
      }
    });
  }

  render() {
    return this.state.user ? (
      <Router>
        <div className="App">
          <NavBar />
          {this.showContentMenus(routes)}
        </div>
      </Router> 
    ) : <Login />
  }

  showContentMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;

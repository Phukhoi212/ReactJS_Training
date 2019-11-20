import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import NavBar from "./components/NavBar/NavBar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          {this.showContentMenus(routes)}
        </div>
      </Router>
    );
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

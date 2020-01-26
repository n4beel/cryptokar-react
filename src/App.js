import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Buy from './components/Buy';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateAd from './components/CreateAd';
import CarDetails from './components/CarDetails';
import "./assets/css/main.css";
import "./assets/css/style.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* components with nav and footer */}
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/buy" component={Buy}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/createAd" component={CreateAd}></Route>
          <Route exact path="/car/:id" component={CarDetails}></Route>

          {/* components without nav and footer */}
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

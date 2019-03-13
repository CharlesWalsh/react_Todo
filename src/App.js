import React, { Component } from 'react';
import 'firebase/database';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Login from "./Login"
import todoApp from "./todoApp";

class App extends Component {

  render()
  {
      return (
          <BrowserRouter>
              <div>
                  <Route exact path={"/login"} component={Login}/>
                  <Route exact path={"/"} component={todoApp}/>
              </div>
          </BrowserRouter>
      );
  }
}

export default App;

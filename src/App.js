import React from 'react';
import './App.css';
import RegisterPage from "./components/RegisterPage";
import {Route, Switch} from 'react-router-dom';
import List from "./components/list";
import LoginPage from "./components/LoginPage";
import UserProvider from "./providers/userProvider";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={RegisterPage}/>
            <Route path={process.env.PUBLIC_URL + '/list'} component={List}/>
            <Route path={process.env.PUBLIC_URL + '/login'} component={LoginPage}/>
        </Switch>
        <UserProvider/>
    </div>
  );
}

export default (App);

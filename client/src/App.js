import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import NewsList from './components/NewsList/NewsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/news" component={NewsList} />
      </Switch>
    </div>
  );
}

export default App;

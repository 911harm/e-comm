import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './screens/Home';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

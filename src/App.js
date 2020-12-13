import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Details from './screens/Details';
import Home from './screens/Home';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/item/details/:id" component={Details}></Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;

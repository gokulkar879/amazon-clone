import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
      <Router>
         <Switch>
           <Route exact path="/">
             <Home />
           </Route>
           <Route path="/cart">
             <Cart />
           </Route>
         </Switch>
      </Router>   
  );
}

export default App;

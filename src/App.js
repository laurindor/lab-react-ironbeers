import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails'; 

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
     <Route exact path="/beer/:beerId" component={BeerDetails}/>
     <Route exact path="/beers" component={BeerList}/>
     <Route exact path="/" component={HomePage}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;

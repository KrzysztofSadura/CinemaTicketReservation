import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Home from './components/Home';
import Reservation from './components/Reservation';
import Confirmation from './components/Confirmation';
import DataContextProvider from './contexts/DataContext';

function App() {
  return (
    
    <div className="App">
        <Router>
      <DataContextProvider>
      <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/reservation" component={Reservation}/>
            <Route path="/confirmation" component={Confirmation}/>
          </Switch>
      </div>
      </DataContextProvider>
        </Router>
    </div>
  );
}

export default App;

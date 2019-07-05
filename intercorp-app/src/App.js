import React from 'react';
import NewClient from './Components/NewClient';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Information from './Components/Information';
import Statistics from './Components/Statistics';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>   
         <Switch>
           <Route path="/" component={Home} exact />
           <Route path="/home" component={Home}exact />
           <Route path="/statistic" component={Statistics} />
           <Route path="/information" component={Information} exact />
           <Route path="/newclient" component={NewClient} exact />      
         </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;


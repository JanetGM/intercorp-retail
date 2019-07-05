import React from 'react';
import NewClient from './Components/NewClient';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>   
         <Switch>
            <Route path="" component={NewClient} exact />
           <Route path="/Home" component={NewClient} exact />
         </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;


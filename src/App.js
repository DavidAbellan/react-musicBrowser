import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from './components/search-artist';
import Index from './components/index';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

     <Switch>
     <Route path="/" component={Index} exact />
               
     </Switch>
    </BrowserRouter>
  )

}

export default App;

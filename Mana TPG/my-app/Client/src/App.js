import React from 'react';
import './App.css';
import Application from './Components/Application/Application';
import Adminlogin from './Components/Adminlogin/Adminlogin';
import {Switch, Route} from 'react-router';


function App() {
  return (
    <div className="App">

        <Switch>
          <Route path='/Adminlogin' component={Adminlogin}/>
          <Route  path='/' component={Application} />
        </Switch>

    </div>
  );
}

export default App;

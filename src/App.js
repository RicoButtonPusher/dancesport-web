import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/Homepage';
import Registration from './pages/Registration';
import Officials from './pages/Officials';
import News from './pages/News';
import Schedule from './pages/Schedule';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';


import React, {useState} from 'react';


function App() {
  return (
    <>

    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/officials" exact component={Officials} />
        <Route path="/schedule" exact component={Schedule} />
        <Route path="/tickets" exact component={Tickets} />
        <Route path="/news" exact component={News} />
        {/* <Route path="/contact" exact component={Contact}/> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
